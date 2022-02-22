import './App.css';
import {useEffect, useState} from 'react'
import PaginationComponent from './PaginationComponent';
import PaginationSelector from './PaginationSelector';



function App() {

  const [itens, setItens] = useState([])
  const [itensPerPage, setItensPerPage] = useState(10)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(itens.length / itensPerPage)
  const startIndex = currentPage + itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = itens.slice(startIndex,endIndex)

    useEffect(() => {
      const fetchData = async () => {
      const result = await fetch('tabela')
        .then(response => response.json())
        .then(data => data)

        setItens(result)

        }
        fetchData()
      }, [])

      useEffect(() => {
        setCurrentPage(0)
      }, [itensPerPage])

  return (

    <div className="App">

     
    


    </div>
  );
}

export default App;
