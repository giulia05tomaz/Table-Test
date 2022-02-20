import React from "react";
import './App.css';


const PaginationSelector = ({itensPerPage, setItensPerPage}) => {
    return (
        <div>
        <select value={itensPerPage} onChange={(e) => setItensPerPage(Number(e.target.value))}>
        <option value={10}>5</option>
        <option value={15}>10</option>
        <option value={20}>15</option>
        <option value={25}>20</option>
      </select>
    </div>
    )
}

export default PaginationSelector