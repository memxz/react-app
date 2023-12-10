import { useState } from "react";

interface Props{
    items:string[];
    heading:string
}
function ListGroup({items, heading}:Props) {
    
    // let selectedIndex=0;
    const [selectedIndex, setSelectedIndex]=useState(-1);

    heading="";
    //items=[];
    //event handler
    // const handleClick=(event:MouseEvent)=>console.log(event);
    return (
    
    <>
        <h1>{heading}</h1>
        {items.length===0?<p>No Item Found</p>:null}
        {items.length===0 && <p>No Item Found</p>}
        <ul className="list-group">
            {items.map((item,index) => (
                <li
                className={selectedIndex===index 
                    ? "list-group-item active" 
                    : "list-group-item"
                } 
                key={item}
                onClick={()=>{setSelectedIndex(index)}}>
                    {item}
                    </li>
            ))}
        </ul>
    </>
  );
}

export default ListGroup;
