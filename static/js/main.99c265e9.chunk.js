(this["webpackJsonput-access-app"]=this["webpackJsonput-access-app"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),c=t(3),l=t.n(c),r=(t(13),t(14),t(4)),s=t(5),i=t(1),d=t(7),m=t(6);function u(e){return o.a.createElement("div",{className:"col-sm col-md-3 py-3",id:e.id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("p",{className:"badge "+e.className},"Count ",e.count," ")),o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("button",{className:"btn btn-dark btn-sm btn-round",onClick:function(){return e.removeBox(e.id)}},"X"))),o.a.createElement("iframe",{width:"250",height:"175",src:"https://www.youtube.com/embed/"+e.url,srcDoc:"<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/"+e.url+"?autoplay=1><img src=https://img.youtube.com/vi/"+e.url+"/hqdefault.jpg alt='Video The Dark Knight Rises: What Went Wrong? \u2013 Wisecrack Edition'><span>\u25b6</span></a>",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}var h=function(e){Object(d.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={data:[],loading:!0,numBox:12,children:[]},n.addNewVideoBox=n.addNewVideoBox.bind(Object(i.a)(n)),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/initial.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(a){e.setState({data:a,loading:!1}),console.log("messages",a)}))}},{key:"addNewVideoBox",value:function(){var e=this.state.data;this.setState({numBox:this.state.numBox+1});var a=Math.floor(Math.random()*e.length),t=Math.floor(25*Math.random()),n=e[a];if(n.count<5){e[a].count=e[a].count+1,e[a].id=e[a].count+e[a].url;var c="badge-success";1!=e[a].count&&2!=e[a].count||(c="badge-success"),3!=e[a].count&&4!=e[a].count||(c="badge-warning"),5==e[a].count&&(c="badge-danger"),this.state.children.push(o.a.createElement(u,{key:n.url+t,number:a,url:n.url,id:e[a].id,count:n.count,className:c,removeBox:this.removeBox.bind(this)}))}console.log("c",this.state.children)}},{key:"removeBox",value:function(e){console.log("remove box ",e);var a=this.state,t=a.children.findIndex((function(a){return a.props.id===e}));console.log(t),-1!==t&&(a.children.splice(t,1),this.setState(a))}},{key:"removeLocalStorage",value:function(){}},{key:"render",value:function(){var e=!0;return this.state.loading||(e=!1),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg  navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand",href:"#"},"ut-Access"),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",onClick:this.addNewVideoBox},"Add Box")),o.a.createElement("li",{className:"nav-item active"},o.a.createElement("a",{className:"nav-link",onClick:this.removeLocalStorage},"Clear LS"))))),o.a.createElement("div",{className:"container pt-5"},0==this.state.children.length?o.a.createElement("h1",null,"Click on Add Box"):o.a.createElement(o.a.Fragment,null),o.a.createElement("div",{className:"row"},e?o.a.createElement("p",null,"getting data"):this.state.children)))}}]),t}(n.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.99c265e9.chunk.js.map