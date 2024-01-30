import React from "react";

const style = {
    textTransform: "uppercase",
    fontSize: "20px"
}

const Text = (props) => {
    return <p style={style}>{props.children}</p>
}

export default Text;