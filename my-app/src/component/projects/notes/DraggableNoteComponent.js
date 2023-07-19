import React from "react";
import "./NotesComponent.css"

import { useState , useEffect } from "react";

export const DraggableNoteComponent = (props) => {

    const [position , setPosition] = useState({
        x:0,
        y:0
    })
    const [isDragging, setIsDragging] = useState(false);
    const [relativePosition, setRelativePosition] = useState({x:0,y:0})
    const [isComponentDragged , setIsComponentDragged] = useState(false)


    useEffect(() => {
        const component = document.getElementById(props.newNote)
        const { left, top } = component.getBoundingClientRect()
        setPosition({x:left,y:top})
    }, [])

    const handleDragStart = () => {
        setIsDragging(true);
        setIsComponentDragged(true);
    }


    const handleMouseDown = (e) => {
        setRelativePosition
        (
            {
                x : e.clientX - e.target.getBoundingClientRect().x,
                y: e.clientY - e.target.getBoundingClientRect().y
            }
        )
    }

    const handleDragEnd = (e) => {

        setIsDragging(false);
        const mousePositionX = e.clientX;
        const mousePositionY = e.clientY;


        const relativeX = relativePosition.x
        const relativeY = relativePosition.y

        setPosition
        (
            { 
                x: mousePositionX - relativeX - 16, 
                y: mousePositionY - relativeY - 16
            }
        );
    }

    const shadowBox = () => {
        return (
            <div className="">

            </div>
        )
    }

    return (
            <div className="box_green_added"
                id={props.newNote}
                style={{ 
                    backgroundColor : props.newColor,
                    opacity: isDragging ? 0.9999 : 1,
                    position: isComponentDragged ? "absolute" : "",
                    left: position.x,
                    top: position.y,
                    cursor: 'move'
                }}
                draggable
                onMouseDown={handleMouseDown}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                >
                <div className="wrapper_content">
                    {props.newNote}
                </div>
            </div>
    )
}