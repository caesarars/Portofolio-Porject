import React from "react";
import "./NotesComponent.css"

import { useState , useEffect } from "react";

export const DraggableNoteComponent = (props) => {

    const [position , setPosition] = useState
    (
        {
            x:0,
            y:0
        }
    )
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

    const checkOverflow = (e) => {
        return e.target.clientWidth < e.target.scrollWidth || 
            e.target.clientHeight < e.target.scrollHeight;
    }

    const handleDragEnd = (e) => {

        setIsDragging(false);
        const mousePositionX = e.clientX;
        const mousePositionY = e.clientY;


        const relativeX = relativePosition.x
        const relativeY = relativePosition.y

        const isOverflow = e.target.style.overflow
        if ( isOverflow || isOverflow === 'visible' ) e.target.style.overflow = 'hidden';

        let paddingSize = 16;

        if ( checkOverflow(e) ) paddingSize += 24

        setPosition
        (
            { 
                x: mousePositionX - relativeX - paddingSize, 
                y: mousePositionY - relativeY - paddingSize
            }
        );
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
                    <p>{props.newNote}</p>
                </div>
            </div>
    )
}