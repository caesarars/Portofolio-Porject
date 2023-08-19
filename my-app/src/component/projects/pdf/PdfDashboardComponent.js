import React , {useState, useEffect, useRef} from 'react';
import { Viewer, Worker , PdfJs, SpecialZoomLevel} from '@react-pdf-viewer/core';
import { pageNavigationPlugin } from '@react-pdf-viewer/page-navigation';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/page-navigation/lib/styles/index.css';


import "./PdfDashboard.css"


const PdfDashboardComponent = () => {
      const pageNavigationPluginInstance = pageNavigationPlugin();
      const canvasRef = useRef(null);
      const textLayerRef = useRef(null);
      const [pdfFile, setPdfFile] = useState('');
      const [textLayers, setTextLayers] = useState([]);
      const pattern = /([a-zA-Z]+.*\d|\d+.*[a-zA-Z])/;
      const [currentWord, setCurrentWord] = useState('');
      const [toggleHovering , setToggleHovering] = useState(false);

      useEffect(() => {
        setTextLayers(document.getElementsByClassName("rpv-core__text-layer-text"));
        console.log(textLayers.length, 'asdaa')

          const arrayTextLayers = [...textLayers].filter((layer) => layer.localName === "span");

          arrayTextLayers.forEach((layer) => {
            // add event listener when enter the wordsaag

            layer.addEventListener("" , (e) => {
              
            })

            layer.addEventListener("mouseenter", (e) => {
              setToggleHovering(true)
              setCurrentWord(e.target.innerHTML)
              const rect = e.target.getBoundingClientRect();
              const hoverElement = document.getElementById("hovering_word");
              const top = e.pageY - 30;
              const left = rect.x;
          
              hoverElement.style.top = (top)+ "px";
              hoverElement.style.left = left + "px";
            })

            layer.addEventListener("mouseleave", (e) => {
              setToggleHovering(false)
            })

          })
      });

      const handleFileChange = async (event) => {
        const file = event.target.files[0];
        const fileURL = URL.createObjectURL(file);
        setPdfFile(fileURL)
      };

      const handleMouseEnter = (e) => {
        const mousePositionX = e.clientX;
        const mousePositionY = e.clientY;
      }

      const onDocumentLoad = (e) => {
        console.log(e)
      }

  return (
    <>
       {
          <span id="hovering_word" style={{
              color:"white",
              backgroundColor: "black",
              fontSize: "1.1em",
              position:'absolute',
              zIndex:"90"
            }}>
            {currentWord}
          </span>
        }
    <div>
        <input type="file" onChange={handleFileChange} />
        {pdfFile && 
        <div>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">

            <div onMouseMove={handleMouseEnter} id="wrapper_viewer">

              <Viewer fileUrl={pdfFile} 
                defaultLayout="single"
                onDocumentLoad={onDocumentLoad} 
                defaultScale={SpecialZoomLevel.PageWidth}
                plugins={[pageNavigationPluginInstance]}/>

            </div>

          </Worker>
        </div>  
        }
    </div>
    </>
  );
    
};

export default PdfDashboardComponent;