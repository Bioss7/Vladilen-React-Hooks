import React from "react";
import { useAlertToggle } from "./alert/АlertContext";

export default function Main() {
    const toggle = useAlertToggle()

    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={toggle} className="btn btn-success">Показать alert</button>
        </>
    )
}