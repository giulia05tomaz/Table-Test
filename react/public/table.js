const KEY_BD = '@clientsestudo'


var registerUser = {
    lastId:0,
    users:[]
}


var FILTRO = ''


function RecordBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(registerUser) )
}

function ReadBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        registerUser = JSON.parse(data)
    }
    draw()
}


function search(value){
    FILTRO = value;
    draw()
}


function draw(){
    const tbody = document.getElementById('RegisterBody')
    if(tbody){
        var data = registerUser.users;
       
        data = data
            .sort( (a, b) => {
                return a.nome < b.nome ? -1 : 1
            })
            .map( client => {
                return `<tr>
                        <td>${client.id}</td>
                        <td>${client.nome}</td>
                        <td>${client.idade}</td>
                        <td>${client.estdcivil}</td>
                        <td>${client.cpf}</td>
                        <td>${client.cidade}</td>
                        <td>${client.estado}</td>
                        <td>
                            <button onclick='vizualizar("registrationform",false,${client.id})'>Editar</button>
                            <button class='vermelho' onclick='AskDelete(${client.id})'>Deletar</button>
                        </td>
                    </tr>`
            } )
        tbody.innerHTML = data.join('')
    }
}

function insertclient(nome, idade, estdcivil, cpf, cidade, estado){
    const id = registerUser.lastId + 1;
    registerUser.lastId = id;
    registerUser.users.push({
        id, nome, idade, estdcivil, cpf, cidade, estado
    })
    RecordBD()
    draw()
    vizualizar('table')
}

function editclient(id, nome, idade, estdcivil, cpf, cidade, estado){
    var client = registerUser.users.find( client => client.id == id )
    client.nome = nome;
    client.idade = idade;
    client.estdcivil = estdcivil;
    client.cpf = cpf;
    client.cidade = cidade;
    client.estado = estado;

    RecordBD()
    draw()
    vizualizar('table')
}

function deleteclient(id){
    registerUser.users = registerUser.users.filter( client => {
        return client.id != id
    } )
    RecordBD()
    draw()
}

function AskDelete(id){
    if(confirm('Quer deletar o registro de id '+id)){
        deleteclient(id)
    }
}


function limparEdicao(){
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('estdcivil').value = ''
    document.getElementById('cpf').value = ''
    document.getElementById('cidade').value = ''
    document.getElementById('estado').value = ''

}

function vizualizar(page, novo=false, id=null){
    document.body.setAttribute('page',page)
    if(page === 'registrationform'){
        if(novo) limparEdicao()
        if(id){
            const client = registerUser.users.find( client => client.id == id )
            if(client){
                document.getElementById('id').value = client.id
                document.getElementById('nome').value = client.nome
                document.getElementById('idade').value = client.idade
                document.getElementById('estdcivil').value = client.estdcivil
                document.getElementById('cpf').value = client.cpf
                document.getElementById('cidade').value = client.cidade
                document.getElementById('estado').value = client.estado

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
        estdcivil: document.getElementById('estdcivil').value,
        cpf: document.getElementById('cpf').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
    }
    if(data.id){
        editclient(data.id, data.nome, data.idade, data.estdcivil, data.cpf, data.cidade, data.estado)
    }else{
        insertclient( data.nome, data.idade, data.estdcivil, data.cpf, data.cidade, data.estado )
    }
}


window.addEventListener('load', () => {
    ReadBD()
    document.getElementById('registration').addEventListener('submit', send)
    document.getElementById('inputSearch').addEventListener('keyup', e => {
        search(e.target.value)
    })

})