import React from 'react'

export default function Header(props) {
           
    return (
         
                <div className="col-md-1 col-xl-1" id ={props.url}>
                <span className={"badge badge-pill " +props.className}>{props.count}</span>
                   <a onClick={()=>props.addSelectedBox(props.url,props.count)}>
                     <img src={"https://img.youtube.com/vi/"+props.url+"/hqdefault.jpg"} alt={props.url} height="75" width="100"/>                  
                  </a>
                </div>
          
    )
}
