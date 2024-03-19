import React from "react";
import "../css/Modal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Modal({ text, onClose }) {
    return (
        <div className="modal--container">
            <div className="modal--content">
                <span className="modal--close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </span>
                <div className="modal--text">
                    {text}
                </div>
            </div>
        </div>
    )
}