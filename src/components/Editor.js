import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import MarkdownEdit from "./Markdown";
import MarkdownPreview from "./Html";
import placeholder from "../data/placeholder";

function WorkArea() {
  let markdown = localStorage.getItem("markdown") || placeholder;
  const [markDown, setMarkDown] = useState(markdown);
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    let changeOrientation = () => {
      setOrientation(window.innerWidth < 600 ? "vertical" : "horizontal");
    };
    changeOrientation();
    window.onresize = changeOrientation;
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"space-between",  height:"100%", backgroundColor:"gray",  width:"100%", }} className="work-area">
        <div style={{width:"46%",backgroundColor:"white", textAlign:"center", height:"95%",margin:"5px"}}>
        <MarkdownEdit style={{height:"100%"}} content={markDown} changeContent={setMarkDown} />
        </div>
        <div  style={{width:"46%",backgroundColor:"white", height:"95%" ,textAlign:"center", overflow:"scroll", margin:"5px"}}>
        <MarkdownPreview style={{height:"100%"}} content={markDown} />
        </div>
    </div>
  );
}

export default WorkArea;