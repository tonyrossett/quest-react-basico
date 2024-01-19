import React from "react";
import "./text.css";

const Text = ({children, color}) => {
    return (
        <p style={{textTransform: "uppercase", color: color}}>
            { children }
        </p>
    )
}

Text.defaultProps = {
    color: 'red'
}

export default Text;