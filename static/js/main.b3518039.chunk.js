(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/Abstract.25161f1b.jpg"},30:function(e,a,t){e.exports=t(38)},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),i=t(23),s=t(11),o=t(12),m=t(14),d=t(13),u=t(15),p=t(46),v=t(49),g=t(48),h=t(40),E=t(41),b=t(50),f=t(42),y=t(43),H=t(44),N=t(45),w=t(4),k=t.n(w),x=function(e){return l.a.createElement("div",null,l.a.createElement("input",{className:"d-block",placeholder:"Page Section Heading",type:"text",name:"bannerHeading",onChange:e.addPSHeading}))},T=function(e){return l.a.createElement("div",null,l.a.createElement("input",{className:"d-block",placeholder:"Banner Heading",type:"text",name:"bannerHeading",onChange:e.addBannerHeading}),"    ")},j=function(e){return l.a.createElement("div",null,l.a.createElement("input",{className:"d-block",placeholder:"Testimonial",type:"text",name:"bannerHeading",onChange:e.addTestPara}))},P=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={activeTab:"1"},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(h.a,{tabs:!0,className:"h5 text-primary container-fluid"},l.a.createElement(E.a,null,l.a.createElement(b.a,{className:k()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},"Navbar")),l.a.createElement(E.a,null,l.a.createElement(b.a,{className:k()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},"Banner")),l.a.createElement(E.a,null,l.a.createElement(b.a,{className:k()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},"Page Section")),l.a.createElement(E.a,null,l.a.createElement(b.a,{className:k()({active:"4"===this.state.activeTab}),onClick:function(){e.toggle("4")}},"Testimonial"))),l.a.createElement(f.a,{className:"container-fluid",activeTab:this.state.activeTab},l.a.createElement(y.a,{tabId:"1"},l.a.createElement(H.a,null,l.a.createElement(N.a,{sm:"12"},l.a.createElement("div",null,this.props.navInputs.map(function(a,t){return l.a.createElement("input",{className:"d-block",placeholder:e.props.navInputs[t],type:"text",key:"n"+t+1,name:"n"+(t+1),onChange:e.props.addNav})}))))),l.a.createElement(y.a,{tabId:"2"},l.a.createElement(H.a,null,l.a.createElement(N.a,{sm:"12"},l.a.createElement(T,{addBannerHeading:this.props.addBannerH.bind(this)}),console.log(this.props.addBannerH)))),l.a.createElement(y.a,{tabId:"3"},l.a.createElement(H.a,null,l.a.createElement(N.a,{sm:"12"},l.a.createElement(x,{addPSHeading:this.props.addPSH})))),l.a.createElement(y.a,{tabId:"4"},l.a.createElement(H.a,null,l.a.createElement(N.a,{sm:"12"},l.a.createElement(j,{addTestPara:this.props.addTestP}))))))}}]),a}(l.a.Component),S=function(e){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark text-light"},l.a.createElement("span",null,l.a.createElement("img",{src:"#",alt:"Logo"})),l.a.createElement("ul",{className:"navbar-nav ml-auto text-light "},l.a.createElement("li",{className:"m-3 nav-item active"},e.newState.n1),l.a.createElement("li",{className:"m-3 nav-item"},e.newState.n2),l.a.createElement("li",{className:"m-3 nav-item"},e.newState.n3))))},O=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return l.a.createElement("div",{className:"jumbotron"},l.a.createElement("h1",{className:"display-4"},a[0].newHead),console.log(a[0].newHead),l.a.createElement("p",{className:"lead"},"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."),l.a.createElement("p",null,"It uses utility classes for typography and spacing to space content out within the larger container."))},I=t(27),C=t.n(I),B=function(e){return l.a.createElement("div",{className:"container-fluid bg-dark"},l.a.createElement("div",{className:"row m-5  text-light"},l.a.createElement("div",{className:"col"},l.a.createElement("img",{style:{height:"300px"},src:C.a,alt:"..."})),l.a.createElement("div",{className:"col"},l.a.createElement("h2",null,e.psHead.psHead),l.a.createElement("p",{className:{textAlign:"justify"}},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."))))},A=function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"media container-fluid"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h5",{className:"mt-0 text-center"},"Testimonials"),l.a.createElement("p",null," ",e.para.testPara),l.a.createElement("span",{className:"text-center d-block"},l.a.createElement("em",null,"~Author Name")))))},L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{newState:this.props.data}),l.a.createElement(O,{newHead:this.props.bannerHead}),l.a.createElement(B,{psHead:this.props.data}),l.a.createElement(A,{para:this.props.data}))}}]),a}(n.Component),W=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(l)))).state={n1:"Home",n2:"About",n3:"Contact",bannerHeading:"Hello World",psHead:"Page Section Heading",testPara:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."},t.navText=["nav1","nav2","nav3"],t.addLinks=function(e){t.setState(Object(i.a)({},e.target.getAttribute("name"),e.target.value))},t.addTestimonial=function(e){t.setState({psHead:e.target.value})},t.addPageSectionHeading=function(e){t.setState({testPara:e.target.value})},t.addBannerHead=function(e){console.log(e.target.value),t.setState({bannerHeading:e.target.value}),console.log(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("div",{className:"text-center "},l.a.createElement("span",{className:"m-3"},l.a.createElement(p.a,{to:"/"},"Preview ")),l.a.createElement("span",{className:"m-3"},l.a.createElement(p.a,{to:"/dashboard"},"Dashboard  "))),l.a.createElement(v.a,null,l.a.createElement(g.a,{exact:!0,path:"/",render:function(){return l.a.createElement(L,{data:e.state,bannerHead:e.state.bannerHeading})}}),l.a.createElement(g.a,{exact:!0,path:"/dashboard",render:function(){return l.a.createElement(P,{addPSH:e.addPageSectionHeading,addTestP:e.addTestimonial,addBannerH:e.addBannerHead,navInputs:e.navText,addNav:e.addLinks,bannerHead:e.state.bannerHeading})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(47);c.a.render(l.a.createElement(D.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.b3518039.chunk.js.map