import React from 'react'

export default function VideoBox(props) {
   
    return (
        
        <div className="col-sm col-md-3 py-3" id={props.id}>
            <div className="row">
                <div className="col-sm col-md-6 py-1">
                     <p className={"badge "+props.className}>Count {props.count} </p>
                </div>
                <div className="col-sm col-md-6 py-1">
                     <button className="btn btn-dark btn-sm btn-round" onClick={()=>props.removeBox(props.id)}>X</button>
                </div>
            </div>
            
            <iframe
            width="250"
            height="175"
            src={"https://www.youtube.com/embed/"+props.url}
            srcDoc={"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/"+props.url+"?autoplay=1><img src=https://img.youtube.com/vi/"+props.url+"/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen 
            >

            </iframe>
        </div>
    )
}
