import React from "react";

interface IProps {
    children: React.ReactNode;
}


function Books({ children }: IProps) {
    return (
        <div className="list-overflow-container">
            <ul className="list-group">{children}</ul>
        </div>
    );
}

function BookItem({ children }: IProps) {
    return <li className="list-group-item">{children}</li>
}

export { Books, BookItem };