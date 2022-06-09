import React from "react";
import {useAlert} from "./АlertContext";

export default function Alert() {
    const alert = useAlert();

    if(!alert) return null;

    return (
        <div className={'alert alert-danger'}>
            Это очень и очень важное сообщение
        </div>
    )
}