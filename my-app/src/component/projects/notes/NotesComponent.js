import React from "react";

import { useEffect , useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DraggableNoteComponent } from "./DraggableNoteComponent";


import "./NotesComponent.css"

export const NotesComponent = () => {
    const [elements, setElements] = useState([]);
    const [newNote, setNewNote] = useState("");
    const [newColor, setNewColor] = useState("green")
    const [showModal, setShowModal] = useState(false);

    const addNotes = () => {
        const theNote = <DraggableNoteComponent 
            newNote={newNote} 
            newColor={setColor(newColor)}/>
        setElements([...elements, theNote])
    }

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalOpen = () => {
        setShowModal(true);
    };

    const insertNewNote = () => {
        addNotes()
        handleModalClose()
        setNewColor("green")
    }

    const handleNewNoteInput = (event) => {
        setNewNote(event.target.value)
    }

    const setChoosenColor = (color) => {
        setNewColor(color)
    }

    const setColor = (color) => {
        switch(color) {
            case "red":
                return "red"
            case "grey":
                return "grey"
            case "yellow" : 
                return "yellow"
            case "blue":
                return "cyan"
            default:
                return "greenyellow"
        }
    }
      

    return (
        <>
        
            <div className="container_notes">
                <div className="sidebar_notes">
                    <div className="wrapper_sidebar_notes">
                        <div id="box_green" onClick={handleModalOpen}>
                            Add Notes
                        </div>
                    </div>
                </div>
                <div className="wrapper_notes">
                    <div className="container_notes_body">
                        {elements}
                    </div>
                    <div
                    className="modal show"
                    style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal show={showModal} onHide={handleModalClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Type your reminder here</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="text_body_container">
                                    <textarea className="form-control"  
                                        id="textarea" 
                                        onChange={handleNewNoteInput}>
                                    </textarea>
                                    <p style={{paddingTop:"24px", fontWeight:"bold"}}>Choose your color</p>
                                    <div className="color">
                                        <div className="choose red" onClick={() => setChoosenColor("red")} style={{border : newColor === "red" ? "2px solid blue" : ""}}></div>
                                        <div className="choose grey" onClick={() => setChoosenColor("grey")} style={{border : newColor === "grey" ? "2px solid blue" : ""}}> </div>
                                        <div className="choose yellow" onClick={() => setChoosenColor("yellow")} style={{border : newColor === "yellow" ? "2px solid blue" : ""}}></div>
                                        <div className="choose blue" onClick={() => setChoosenColor("blue")} style={{border : newColor === "blue" ? "2px solid black" : ""}}></div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" onClick={insertNewNote}>
                                    Save
                                </Button>
                                <Button variant="secondary" onClick={handleModalClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
            </div>

        </>
    )
}