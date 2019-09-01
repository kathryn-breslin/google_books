import React from "react";

interface IProps {
    books: []
}

const Books = ({ books }: IProps) => (
    <ul className="list-group" id="book">
        <li className="list-group-item" id="bookItem">
            {books}
        </li>
    </ul>
);

export default Books;