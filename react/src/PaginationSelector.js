import React from "react";
import './App.css';


const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
    return (
        <div>
        <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
    </div>
    )
}

export default PaginationSelector