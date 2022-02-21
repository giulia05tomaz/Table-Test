const KEY_BD = '@userdatabase'


var registerusers ={
    lastId:0,
    userdata:[]
}




function recordBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(registerusers) )
}

function readBD(){
    const data = localStorage.getItem('KEY_BD')
    if(data){
        registerusers = JSON.parse(data)
    }
    draw()

}

function draw(){
    const tbody = document.getElementById('bodyregister')
    if(tbody){
        tbody.innerHTML = registerusers.userdata.map( user => {

            return `<tr>
                    <td>${user.id}</td>
                    <td>${user.nome}</td>
                    <td>${user.idade}</td>
                    <td>${user.stdcivil}</td>
                    <td>${user.cpf}</td>
                    <td>${user.cidade}</td>
                    <td>${user.estado}</td>
                    <td>
                        <button id="btn" onClick='visualization("newregister", false,${user.id})'>Editar</button>
                        <button id="btn" class ="red" onClick='askdelete(${user.id})'>Deletar</button>
                    </td>
                    </tr>`

        }).join('')
    }
}

function insert(nome,idade,stdcivil,cpf,cidade,estado){
    const id = registerusers.lastId + 1;
    registerusers.lastId = id;
    registerusers.userdata.push({
        id,nome,idade,stdcivil,cpf,cidade,estado
    })
    recordBD()
    draw()
    visualization('table')
}

function edit(id,nome,idade,stdcivil,cpf,cidade,estado){
    var user = registerusers.userdata.find(user => user.id == id)
    user.nome = nome;
    user.idade =idade;
    user.cpf = cpf;
    user.stdcivil = stdcivil;
    user.cidade = cidade;
    user.estado = estado;
    recordBD()
    draw()
    visualization('table')

}

function deleteUser(id){
   registerusers.userdata = registerusers.userdata.filter(user =>{
       return user.id != id
   })
   recordBD()
   draw()
}

function askdelete(id){
    if(confirm('Deseja deletar?'+id)){
        deleteUser(id)
        
    }
}


function visualization(pageinitial, newbox=false, id=null){
    document.body.setAttribute('page', pageinitial)
    if(pageinitial === 'newregister'){
        if(newbox) clearbox()
        if(id){
            const user = registerusers.user.find( user => user.id === id)
            if(user){
                document.getElementById('nome').value = user.nome,
                document.getElementById('idade').value = user.idade,
                document.getElementById('stdcivil').value = user.stdcivil,
                document.getElementById('cidade').value = user.cidade,
                document.getElementById('cpf').value = user.cpf,
                document.getElementById('estado').value = user.estado
            }
        }
        document.getElementById('nome').focus()
        
    }
    
}


function send(e){
    e.preventDefault()
    const data = {
    id: document.getElementById('id').value,
    nome: document.getElementById('nome').value,
    idade: document.getElementById('idade').value,
    stdcivil: document.getElementById('stdcivil').value,
    cpf: document.getElementById('cpf').value,
    cidade: document.getElementById('cidade').value,
    estado: document.getElementById('estado').value
    }
    if(data.id){
        edit(...data.id, data.nome, data.idade, data.stdcivil, data.cpf, data.cidade, data.estado)
    }else{
        insert(data.nome, data.idade, data.stdcivil, data.cpf, data.cidade, data.estado )
    }
  
}

function clearbox(){
    document.getElementById('nome').value = '',
    document.getElementById('idade').value = '',
    document.getElementById('stdcivil').value = '',
    document.getElementById('cidade').value = '',
    document.getElementById('cpf').value = '',
    document.getElementById('estado').value = ''

}


window.addEventListener('load', () =>{
    readBD()
    document.getElementById('Register').addEventListener('submit', send)
})