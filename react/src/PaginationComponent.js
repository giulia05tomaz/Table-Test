import React from "react";
import './App.css';



const PaginationComponent = ({pages, currentPage, setCurrentPage}) => {
    return (
        <div>
        {Array.from(Array(pages), (item, index) => {

          return <button style={index === currentPage ? {backgroundColor: "aquamarine"} : null}
          
          className="pagnationButton" value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>;

        })}
      </div>
    )
}

export default PaginationComponent