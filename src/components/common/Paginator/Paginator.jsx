import React from "react";
import "./Paginator.css";


let Paginator = ({totalUserCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUserCount / pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)

    }
    return <div>
        {pages.map(p => {
            return <span className={currentPage === p && "selectedPage"}
                onClick={(e) => {onPageChanged(p) }}>{p}</span>
        })}
    </div>
}

export default Paginator;