(this["webpackJsonput-access-app"]=this["webpackJsonput-access-app"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"url":"HxsVLKFvrpQ","count":0},{"url":"UFv28Y2rvLI","count":0},{"url":"nXfAZHE7B6Y","count":0},{"url":"VMFLG8oTMhU","count":0},{"url":"CO20o3dkSfU","count":0},{"url":"U91mAodX71Y","count":0},{"url":"FQDUHsv9fnY","count":0},{"url":"aDzre_a0V9k","count":0},{"url":"Cfq5SXYfFKU","count":0},{"url":"p5Aow3EGvPg","count":0},{"url":"dSYGZpf8_mQ","count":0},{"url":"cJ7xx4uMgFo","count":0},{"url":"g8_iYkTftVI","count":0},{"url":"mqWsuhYLNwI","count":0},{"url":"yRHIRyXo9T8","count":0},{"url":"EUPWNOd9y8c","count":0},{"url":"S9VGFjE0rf0","count":0},{"url":"AK7wEj_JImI","count":0},{"url":"Ud7VV2r-cAc","count":0},{"url":"C6ioOQXqy14","count":0},{"url":"WP4Bkd9iJME","count":0},{"url":"2oam8lilC1E","count":0},{"url":"ATVT0F9JYGQ","count":0},{"url":"qGd5F4TJI1k","count":0},{"url":"0MfbBn0YxW0","count":0},{"url":"nQeKI2dZgcY","count":0},{"url":"SCGI9Tbqr6Q","count":0},{"url":"mRKnaDgcbDU","count":0},{"url":"kthi6BvmDN4","count":0},{"url":"Sd0y27p_lpg","count":0},{"url":"5O1ssLOrZ8A","count":0},{"url":"iN3G0SvlJTM","count":0},{"url":"3ayU7pIoKiE","count":0},{"url":"zKUAERtx8ck","count":0},{"url":"Zysht2Wev0E","count":0},{"url":"fb5EmG7sgQU","count":0},{"url":"86ywLzvRB00","count":0},{"url":"AfVIrFjJRwY","count":0},{"url":"hsZxZerDyfQ","count":0},{"url":"VMBOEqfUJ9Q","count":0},{"url":"JS20VmtrSWo","count":0},{"url":"qq9blgzYXjI","count":0},{"url":"ldb2f1VRXbc","count":0},{"url":"ZhowIyhrRfg","count":0},{"url":"T2O-4-AMkAg","count":0},{"url":"lP5Z4JwmjMc","count":0},{"url":"WFC8IoChpqo","count":0},{"url":"zyoPvPBRcb8","count":0},{"url":"G_mXrG6YrAk","count":0},{"url":"ZPWCaRoxYB8","count":0},{"url":"P_ocjlyCN1c","count":0},{"url":"fD9ytdCGJ-c","count":0},{"url":"m-SMuCu3TN0","count":0},{"url":"lEFX4FtzY-M","count":0},{"url":"ps1oeuMMngM","count":0},{"url":"s5yOd5iHnJM","count":0},{"url":"F_CmuJkfzYM","count":0},{"url":"e5fo4xLwI4I","count":0},{"url":"UbqXKI2IWbM","count":0},{"url":"tW7nlAqX6GI","count":0},{"url":"_fFJcBY6tq0","count":0},{"url":"UIB9KwU37Fs","count":0},{"url":"9J6ZEKj9o_w","count":0},{"url":"Duy0KQH7alI","count":0},{"url":"ZLUAhC-3zXY","count":0},{"url":"0n9cWVZLmi4","count":0}]')},,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=(a(14),a(15),a(4)),u=a(5),s=a(1),d=a(8),i=a(7);function m(e){return console.log("cc"),o.a.createElement("div",{className:"col-sm col-md-3 py-3",id:e.id},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("p",{className:"badge badge-pill "+e.className},"Count ",e.count)),o.a.createElement("div",{className:"col-sm col-md-6 py-1"},o.a.createElement("a",{className:"btn btn-dark btn-sm ",onClick:function(){return e.removeBox(e.id)}},"X"))),o.a.createElement("iframe",{width:"250",height:"175",title:e.id,src:"https://www.youtube.com/embed/"+e.url+"?mute=1&vq=tiny"}))}function h(e){return o.a.createElement("div",{className:"col-md-1 col-xl-1",id:e.url},o.a.createElement("span",{className:"badge badge-pill "+e.className},e.count),o.a.createElement("a",{onClick:function(){return e.addSelectedBox(e.url,e.count)}},o.a.createElement("img",{src:"https://img.youtube.com/vi/"+e.url+"/hqdefault.jpg",alt:e.url,height:"75",width:"100"})))}var b=a(6),g=function(e){Object(d.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={data:[],loading:!0,numBox:12,children:[],headerEl:[],arrNum:0,vidNum:0},n.addNewVideoBox=n.addNewVideoBox.bind(Object(s.a)(n)),n.addSelectedBox=n.addSelectedBox.bind(Object(s.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=b,t=new Array(Math.ceil(e.length/33)).fill().map((function(t){return e.splice(0,33)}));console.log("result ",t);var a=Math.floor(Math.random()*t.length);this.setState({data:t[a],loading:!1,arrNum:a})}},{key:"addNewVideoBox",value:function(e){var t=this.state.data;this.setState({numBox:this.state.numBox+1});var a=Math.floor(Math.random()*t.length),n=Math.floor(25*Math.random()),c=t[a];if(c.count<4){var l=e?Math.floor(3*Math.random())+1:1;console.log("counter",l),t[a].count=t[a].count+l,t[a].id=t[a].count+t[a].url;var r="badge-success";1===t[a].count&&(r="badge-success"),2!==t[a].count&&3!==t[a].count||(r="badge-warning"),4===t[a].count&&(r="badge-danger"),this.state.children.push(o.a.createElement(m,{key:c.url+n,number:a,url:c.url,id:t[a].id,count:c.count,className:r,removeBox:this.removeBox.bind(this)})),this.setState({vidNum:this.state.vidNum+1})}}},{key:"addSelectedBox",value:function(e,t){console.log("addSelectedBox",e,t);var a=Math.floor(105*Math.random()),n="badge-success";1===t&&(n="badge-success"),2!==t&&3!==t||(n="badge-warning"),4===t&&(n="badge-danger"),t+=1,this.state.children.push(o.a.createElement(m,{key:e+a,number:a,url:e,count:t,id:e+a,className:n,removeBox:this.removeBox.bind(this)}))}},{key:"removeBox",value:function(e){var t=this.state,a=t.children.findIndex((function(t){return t.props.id===e}));-1!==a&&(t.children.splice(a,1),this.setState(t))}},{key:"populateHeader",value:function(){console.log("in this.populateHeader();");var e=Math.floor(100*Math.random());console.log(this.state.data.length);for(var t=0;t<this.state.data.length;t++){var a=Math.floor(100*Math.random());this.state.headerEl.push(o.a.createElement(h,{key:e+this.state.data[t].url+a,url:this.state.data[t].url,count:this.state.data[t].count,addSelectedBox:this.addSelectedBox,i:t}))}this.state.headerEl.splice(this.state.data.length)}},{key:"render",value:function(){var e=this,t=this.state,a=t.loading,n=t.arrNum,c=t.vidNum;return o.a.createElement("div",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg  navbar-dark bg-dark mb-5"},o.a.createElement("a",{className:"navbar-brand "},o.a.createElement("span",{className:"text-center"},"ut-Access v-1.06 | x",n)),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"}))),o.a.createElement("div",{className:"container-fluid my-5 py-5 mx-3"},o.a.createElement("p",{className:"text-center badge badge-pill badge-danger"},"Current Video Played: ",c),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-dark my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!1)}},"Add Box")),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-info my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!0)}},"Add Random Box"))),o.a.createElement("div",{className:"row"},a?o.a.createElement("p",null,"getting data"):this.state.children),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-dark my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!1)}},"Add Box")),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("a",{className:"text-center btn btn-info my-4 btn-lg btn-block",onClick:function(){return e.addNewVideoBox(!0)}},"Add Random Box"))),o.a.createElement("p",{className:"text-center badge badge-pill badge-danger"},"Current Video Played: ",c)))}}]),a}(n.Component);var v=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.e22dd269.chunk.js.map