import React from "react";

export default function Main({toggle}) {
    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle} className="btn btn-success">Показать alert</button>
        </>
    )
}