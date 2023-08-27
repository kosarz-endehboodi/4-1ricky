import { XCircleIcon } from "@heroicons/react/24/outline";
import { Favorite } from "./NavBar";

export default function Modal({ favorites, title, children, onOpen, open }) {

    if (!open) return null;
    return (

        <div className="backdrop">
            <div className="modal">
                <div className="modal__header">
                    <h2>{title}</h2>
                    <button onClick={() => onOpen(false)}><XCircleIcon className="icon close" /></button>
                </div>

                {children}

            </div>
        </div >
    )
}