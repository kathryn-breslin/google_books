import React from "react";
import "./Jumbotron.css";

interface IProps {
    children: any;
  }

const Jumbotron = ({children}: IProps) => {
    return (
        <div className="jumbotron text-center">
            {children}
        </div>
    )
}

export default Jumbotron;