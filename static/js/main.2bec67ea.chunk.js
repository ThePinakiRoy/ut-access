(this["webpackJsonput-access-app"]=this["webpackJsonput-access-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"url":"HxsVLKFvrpQ","count":0},{"url":"UFv28Y2rvLI","count":0},{"url":"nXfAZHE7B6Y","count":0},{"url":"VMFLG8oTMhU","count":0},{"url":"CO20o3dkSfU","count":0},{"url":"U91mAodX71Y","count":0},{"url":"FQDUHsv9fnY","count":0},{"url":"aDzre_a0V9k","count":0},{"url":"Cfq5SXYfFKU","count":0},{"url":"p5Aow3EGvPg","count":0},{"url":"dSYGZpf8_mQ","count":0},{"url":"cJ7xx4uMgFo","count":0},{"url":"g8_iYkTftVI","count":0},{"url":"mqWsuhYLNwI","count":0},{"url":"yRHIRyXo9T8","count":0},{"url":"EUPWNOd9y8c","count":0},{"url":"S9VGFjE0rf0","count":0},{"url":"AK7wEj_JImI","count":0},{"url":"Ud7VV2r-cAc","count":0},{"url":"C6ioOQXqy14","count":0},{"url":"WP4Bkd9iJME","count":0},{"url":"2oam8lilC1E","count":0},{"url":"ATVT0F9JYGQ","count":0},{"url":"qGd5F4TJI1k","count":0},{"url":"0MfbBn0YxW0","count":0},{"url":"nQeKI2dZgcY","count":0},{"url":"SCGI9Tbqr6Q","count":0},{"url":"mRKnaDgcbDU","count":0},{"url":"kthi6BvmDN4","count":0},{"url":"Sd0y27p_lpg","count":0},{"url":"5O1ssLOrZ8A","count":0},{"url":"iN3G0SvlJTM","count":0},{"url":"3ayU7pIoKiE","count":0},{"url":"zKUAERtx8ck","count":0},{"url":"Zysht2Wev0E","count":0},{"url":"fb5EmG7sgQU","count":0},{"url":"86ywLzvRB00","count":0},{"url":"AfVIrFjJRwY","count":0},{"url":"hsZxZerDyfQ","count":0},{"url":"VMBOEqfUJ9Q","count":0},{"url":"JS20VmtrSWo","count":0},{"url":"ZLUAhC-3zXY","count":0},{"url":"qq9blgzYXjI","count":0},{"url":"ldb2f1VRXbc","count":0},{"url":"ZhowIyhrRfg","count":0},{"url":"T2O-4-AMkAg","count":0},{"url":"lP5Z4JwmjMc","count":0},{"url":"WFC8IoChpqo","count":0},{"url":"zyoPvPBRcb8","count":0},{"url":"G_mXrG6YrAk","count":0},{"url":"P_ocjlyCN1c","count":0}]')},,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),r=n.n(c),l=(n(14),n(15),n(4)),u=n(5),s=n(1),i=n(8),d=n(7);function m(e){return o.a.createElement("div",{className:"col-sm col-md-3 py-3",id:e.id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("p",{className:"badge badge-pill "+e.className},"Count ",e.count)),o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("a",{className:"btn btn-dark btn-sm ",onClick:function(){return e.removeBox(e.id)}},"X"))),o.a.createElement("iframe",{width:"250",height:"175",title:e.id,src:"https://www.youtube.com/embed/"+e.url+"?mute=1&vq=tiny"}))}var b=n(6),v=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={data:[],loading:!0,numBox:12,children:[]},a.addNewVideoBox=a.addNewVideoBox.bind(Object(s.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({data:b,loading:!1})}},{key:"addNewVideoBox",value:function(e){var t=this.state.data;this.setState({numBox:this.state.numBox+1});var n=Math.floor(Math.random()*t.length),a=Math.floor(25*Math.random()),c=t[n];if(c.count<4){var r=e?Math.floor(3*Math.random()):1;console.log("counter",r),t[n].count=t[n].count+r,t[n].id=t[n].count+t[n].url;var l="badge-success";1===t[n].count&&(l="badge-success"),2!==t[n].count&&3!==t[n].count||(l="badge-warning"),4===t[n].count&&(l="badge-danger"),this.state.children.push(o.a.createElement(m,{key:c.url+a,number:n,url:c.url,id:t[n].id,count:c.count,className:l,removeBox:this.removeBox.bind(this)}))}}},{key:"removeBox",value:function(e){var t=this.state,n=t.children.findIndex((function(t){return t.props.id===e}));-1!==n&&(t.children.splice(n,1),this.setState(t))}},{key:"removeLocalStorage",value:function(){}},{key:"render",value:function(){var e=this,t=!0;return this.state.loading||(t=!1),o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg  navbar-dark bg-dark mb-5"},o.a.createElement("a",{className:"navbar-brand "},o.a.createElement("span",{className:"text-center"},"ut-Access v-1.03")),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"}))),o.a.createElement("div",{className:"container-fluid py-5 mx-3"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-dark my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!1)}},"Add Box")),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-info my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!0)}},"Add Random Box"))),o.a.createElement("div",{className:"row"},t?o.a.createElement("p",null,"getting data"):this.state.children),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-dark my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!1)}},"Add Box")),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-info my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!0)}},"Add Random Box")))))}}]),n}(a.Component);var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.2bec67ea.chunk.js.map