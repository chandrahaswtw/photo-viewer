(this["webpackJsonpphoto-viewer"]=this["webpackJsonpphoto-viewer"]||[]).push([[0],{10:function(e,a,t){e.exports={wrapStyles:"Wrap_wrapStyles__1sbsE",blue:"Wrap_blue__1k24j",white:"Wrap_white__3TrKj",yellow:"Wrap_yellow__ox3MZ",green:"Wrap_green__3tD3a",red:"Wrap_red__28PO6",transparent:"Wrap_transparent__11jwE"}},11:function(e,a,t){e.exports={wrapper:"Footer_wrapper__9BcPH",internalWrapper:"Footer_internalWrapper__2GrTb",footerStyles:"Footer_footerStyles__IUOON",internalSpan:"Footer_internalSpan__Oq5tl"}},13:function(e,a,t){e.exports={wrapper:"Photos_wrapper__1ZNM_",imageArray:"Photos_imageArray__3jL4J",imageBox:"Photos_imageBox__1GqR7",hoverSection:"Photos_hoverSection__2_Vm2",imageTitle:"Photos_imageTitle__VgVb5"}},14:function(e,a,t){e.exports={modalStyles:"Modal_modalStyles__3jVQL",whiteBackground:"Modal_whiteBackground__3aGOm",iconStyles:"Modal_iconStyles__QibV7",spin:"Modal_spin__33J1m",modalOpenStyles:"Modal_modalOpenStyles__3V51r",moveIn:"Modal_moveIn__2bRWg",modalCloseStyles:"Modal_modalCloseStyles__3sqTo",moveOut:"Modal_moveOut__17k6-"}},16:function(e,a,t){e.exports={wrapper:"Albums_wrapper__3q0nh",albumStyles:"Albums_albumStyles__1KJok",section1:"Albums_section1__ydlxf",section2:"Albums_section2__1vFAQ"}},21:function(e,a,t){e.exports={gridContainer:"MainForm_gridContainer__1YKkw",MainForm:"MainForm_MainForm__1bRc5",albumPhoto:"MainForm_albumPhoto__NVGsW"}},38:function(e,a,t){e.exports={gridContainer:"Home_gridContainer__1mDvJ"}},39:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__Ncqjz"}},43:function(e,a,t){e.exports={buttonStyles:"Button_buttonStyles__1xjs4"}},44:function(e,a,t){e.exports={loaderDiv:"Loader_loaderDiv__2uONU"}},46:function(e,a,t){e.exports={underline:"Underline_underline__3WDpP"}},47:function(e,a,t){e.exports=t(97)},52:function(e,a,t){},53:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),o=t.n(l),c=(t(52),t(53),t(38)),s=t.n(c),i=t(39),u=t.n(i),m=function(e){return r.a.createElement("header",{className:u.a.NavBar},r.a.createElement("p",null,"ALBUM PHOTO VIEWER"))},d=t(8),p=t(21),_=t.n(p),E=t(40),h=t.n(E),b={data:"",error:"",loading:!1},f=function(e,a){switch(a.type){case"START":return{data:"",error:"",loading:!0};case"SUCCESS":return{data:a.value,error:"",loading:!1};case"ERROR":return{data:"",error:a.value,loading:!1}}},v=function(){var e=Object(n.useReducer)(f,b),a=Object(d.a)(e,2),t=a[0],r=a[1];return[t,Object(n.useCallback)((function(e){r({type:"START"});var a=e.map((function(e,a){return h.a.get(e)}));Promise.all(a).then((function(e){r({type:"SUCCESS",value:e})})).catch((function(e){r({type:"ERROR",value:e})}))}),[])]},y=t(16),S=t.n(y),O=t(10),g=t.n(O),N=function(e){var a=[g.a.wrapStyles];switch(e.type){case"green":a.push(g.a.green);break;case"blue":a.push(g.a.blue);break;case"yellow":a.push(g.a.yellow);break;case"white":a.push(g.a.white);break;case"red":a.push(g.a.red);break;case"transparent":a.push(g.a.transparent)}return r.a.createElement("span",{className:a.join(" ")},e.children)},w=t(9),C=Object(w.g)((function(e){var a=e.albumState.data,t=e.history,l=Object(n.useCallback)((function(){var e=[];return a?e=a[0].data.map((function(e,n){var l="",o=!0,c=!1,s=void 0;try{for(var i,u=a[1].data[Symbol.iterator]();!(o=(i=u.next()).done);o=!0){var m=i.value;if(e.userId===m.id){l=m.name;break}}}catch(d){c=!0,s=d}finally{try{o||null==u.return||u.return()}finally{if(c)throw s}}return r.a.createElement("div",{className:S.a.albumStyles,key:n,onClick:function(){t.push("/Albums/Photos/".concat(e.id))}},r.a.createElement("section",{className:S.a.section1},r.a.createElement(N,null,"USERNAME : ",l)),r.a.createElement("section",{className:S.a.section2},r.a.createElement(N,{type:"white"},"ALBUM TITLE")," ",r.a.createElement("br",null),r.a.createElement("span",{style:{textAlign:"center"}},e.title)))})):e.push(r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N,{type:"red"},"NO RECORDS TO DISPLAY"))),e}),[a,t]);return r.a.createElement("div",{className:S.a.wrapper},l())})),A=t(13),k=t.n(A),j=t(43),x=t.n(j),T=function(e){return r.a.createElement("button",{onClick:e.onClickHandler,className:x.a.buttonStyles},e.children)},B=t(44),M=t.n(B),P=t(45),R=t.n(P),D=function(e){return r.a.createElement("div",{className:M.a.loaderDiv},r.a.createElement(R.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))},H=t(46),I=t.n(H),W=function(e){return r.a.createElement("hr",{className:I.a.underline})},F=t(14),L=t.n(F),V=t(19),U=t(20),G=function(e){var a=[L.a.modalStyles];return"SHOW"===e.modalState?a.push(L.a.modalOpenStyles):a.push(L.a.modalCloseStyles),r.a.createElement("div",{className:a.join(" ")},r.a.createElement("span",{className:L.a.iconStyles,onClick:function(){e.modalCloseHandler()}},r.a.createElement(V.a,{icon:U.b,size:"4x"})),r.a.createElement("img",{src:e.url,alt:""}),r.a.createElement("div",{className:L.a.whiteBackground,onClick:function(){e.modalCloseHandler()}}))},J=Object(w.g)((function(e){var a=v(),t=Object(d.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)("HIDE"),s=Object(d.a)(c,2),i=s[0],u=s[1],m=Object(n.useState)(""),p=Object(d.a)(m,2),_=p[0],E=p[1],h=Object(n.useCallback)((function(e){u("SHOW"),E(e)}),[u,E]),b=Object(n.useCallback)((function(){u("HIDE"),setTimeout((function(){E("")}),200)}),[u]);Object(n.useEffect)((function(){o(["https://jsonplaceholder.typicode.com/photos"])}),[o]);var f=l.data,y=e.match.params.id,S=Object(n.useCallback)((function(){var e=[];return f&&(e=f[0].data.map((function(e,a){if(e.albumId==y)return r.a.createElement("div",{className:k.a.imageBox},r.a.createElement("img",{src:e.thumbnailUrl,alt:"NO_IMAGE"}),r.a.createElement("div",{className:k.a.imageTitle},r.a.createElement("span",null," ",e.title,"  ")),r.a.createElement("div",{className:k.a.hoverSection},r.a.createElement(T,{onClickHandler:function(){h(e.url)}},"VIEW")))}))),e}),[f,y,h]);return r.a.createElement("div",{className:k.a.wrapper},l.loading?r.a.createElement(D,null):null,r.a.createElement(G,{modalState:i,url:_,modalCloseHandler:b}),r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement(N,{type:"yellow"},"PHOTOS FOR ALBUM ID : ",e.match.params.id)),r.a.createElement(W,null),r.a.createElement("div",{className:k.a.imageArray},S()))})),q=t(22),K=(t(96),Object(w.g)((function(e){var a=v(),t=Object(d.a)(a,2),l=t[0],o=t[1],c=function(){o(["https://jsonplaceholder.typicode.com/albums","https://jsonplaceholder.typicode.com/users"])};return Object(n.useEffect)((function(){l.data&&(q.a.configure({autoClose:1200,draggable:!0}),q.a.success("RECORDS FETCHED !!",{position:q.a.POSITION.TOP_RIGHT}))}),[l]),r.a.createElement("div",null,l.loading?r.a.createElement(D,null):null,r.a.createElement("div",{className:_.a.gridContainer},r.a.createElement("div",{className:_.a.MainForm},r.a.createElement(w.d,null,r.a.createElement(w.b,{path:e.match.url,exact:!0,render:function(){return r.a.createElement(T,{onClickHandler:c},"FETCH THE DATA")}}),r.a.createElement(w.b,{path:"".concat(e.match.url,"/Photos/:id"),exact:!0,render:function(){return r.a.createElement(T,{onClickHandler:function(){e.history.push("/Albums")}},"GO BACK \xa0 ",r.a.createElement(V.a,{icon:U.a}),"  ")}}))),r.a.createElement("div",{className:_.a.albumPhoto},r.a.createElement(w.d,null,r.a.createElement(w.b,{path:e.match.url,exact:!0,render:function(){return r.a.createElement(C,{albumState:l})}}),r.a.createElement(w.b,{path:"".concat(e.match.url,"/Photos/:id"),exact:!0,render:function(){return r.a.createElement(J,null)}}),r.a.createElement(w.a,{from:"".concat(e.match.url,"/Photos/"),to:e.match.url})))))}))),Q=t(11),Y=t.n(Q),Z=function(){return r.a.createElement("footer",{className:Y.a.wrapper},r.a.createElement("div",{className:Y.a.internalWrapper},r.a.createElement("span",{className:Y.a.internalSpan},r.a.createElement("p",{className:Y.a.footerStyles}," \xa9 DESIGNED AND DEVELOPED BY ",r.a.createElement("span",{className:Y.a.footerStyles,style:{color:"black"}},"CHANDRAHAS BALLEDA")),r.a.createElement("p",{className:Y.a.footerStyles}," BEST VIEWED ON CHROME, MOZILLA & BRAVE"))))};var z=function(){return r.a.createElement("div",{className:s.a.gridContainer},r.a.createElement(m,null),r.a.createElement(K,null),r.a.createElement(Z,null))},$=t(15);var X=function(){return r.a.createElement($.a,null,r.a.createElement(w.d,null,r.a.createElement(w.b,{path:"/Albums",component:z}),r.a.createElement(w.a,{from:"/",to:"/Albums"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.8a2bf21b.chunk.js.map