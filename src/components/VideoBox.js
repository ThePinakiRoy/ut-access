import React from 'react'

export default function VideoBox(props) {
   
    return (
        
        <div className="col-sm col-md-3 py-3" id={props.id}>
            <div className="row">
                <div className="col-sm col-md-6 py-1">
                     <p className={"badge badge-pill"+props.className}>Count {props.count} </p>
                </div>
                <div className="col-sm col-md-6 py-1">
                     <button className="badge badge-pill" onClick={()=>props.removeBox(props.id)}>X</button>
                </div>
            </div>
            
            {/* <iframe
            width="250"
            height="175"
            src={"https://www.youtube.com/embed/"+props.url+"?mute=1&vq=tiny"}
            // srcDoc={"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/"+props.url+"?mute=1><img src=https://img.youtube.com/vi/"+props.url+"/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? – Wisecrack Edition'><span>▶</span></a>"}
            //  frameBorder="0"            
            //  allowFullScreen 
            >

            </iframe> */}
            <object width="420" height="315"><param name="movie"
            value={"https://www.youtube.com/watch?v="+props.url+"?mute=1&vq=tiny"}></param><param
            name="allowFullScreen" value="true"></param><param name="allowscriptaccess"
            value="always"></param><embed
            src={"https://www.youtube.com/watch?v="+props.url+"?mute=1&vq=tiny"}
            type="application/x-shockwave-flash" width="420" height="315"
            allowscriptaccess="always" allowfullscreen="true"></embed></object>

            
        </div>
    )
}
