(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n.n(a),c=n(42),i=n.n(c),d=(n(50),n(51),n(17)),r=n(43),o=n.n(r),u=n.p+"static/media/audio.af4a25f6.mp3",l=n(3),b=o()("https://chat-app-serverside.herokuapp.com/");var m=function(e){var t=new Audio(u),n=e.user.displayName,s=e.user.photoURL;function c(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+a}var i=Object(a.useState)(!1),r=Object(d.a)(i,2),o=r[0],m=r[1],p=function(){document.getElementById("chat-box").childNodes[document.getElementById("chat-box").childNodes.length-1].scrollIntoView({behavior:"smooth"})},v=Object(a.useState)(""),g=Object(d.a)(v,2),j=g[0],f=g[1],O=function(){if(""!==j){var e={name:n,picture:s,message:j};b.emit("send-message",e),b.emit("typing",{message:"",name:n}),function(e){var t=document.getElementById("chat-box"),n=document.createElement("div");n.className="sender-bubble-wrapper",n.innerHTML='<div class="sender message-bubble"><div class="bubble-name">You</div><div class="bubble-text">'+e+'</div><div class="bubble-time">'+c(new Date)+'</div></div><img class="dp" src='+s+' alt="dp">',t.append(n),p()}(j),f(""),document.getElementById("message").blur()}};return Object(a.useEffect)((function(){b.emit("new-user-joined",n),b.on("user-joined",(function(e){!function(e){var t=document.getElementById("chat-box"),n=document.createElement("div");n.className="sender-bubble-wrapper",n.innerHTML='<div class="sender message-bubble"><div style="font-style:italic;" class="bubble-text">'+e+'</div><div class="bubble-time">'+c(new Date)+"</div></div></div>",t.append(n)}(e+" Joined the Chat.")}))}),[]),Object(a.useEffect)((function(){b.on("recieve-typing",(function(e){for(var t="",a=0;a<Object.keys(e).length;a+=2)Object.keys(e)[a]!==n&&(t+=Object.keys(e)[a]),Object.keys(e).length-2!==a&&""!==t&&(t+=" + ");""!==t&&(t+=" Typing..."),document.getElementById("typing").innerHTML=t})),b.on("recieve-message",(function(e){document.getElementById("chat-box").addEventListener("DOMNodeInserted",(function(){})),function(e,n,a){t.play();var s=document.getElementById("chat-box"),i=document.createElement("div");i.className="reciever-bubble-wrapper",i.innerHTML='<img class="dp" src='+a+' alt="dp"><div class="message-bubble">\n        <div class="bubble-name">'+e+'</div>\n        <div class="bubble-text">'+n+'</div>\n        <div class="bubble-time">'+c(new Date)+"</div>\n        </div>",s.append(i),p()}(e.name,e.message,e.picture)}))}),[]),Object(l.jsx)("div",{className:"home-container",children:Object(l.jsxs)("div",{className:"main-chat-container",children:[Object(l.jsxs)("div",{className:"chat-header",children:[Object(l.jsx)("div",{className:"m-10",children:Object(l.jsx)("div",{className:"header-text",children:"Realtime Chat Around the World"})}),Object(l.jsxs)("div",{className:"m-10",children:[Object(l.jsx)("div",{onClick:function(){return m(!o)},children:o?Object(l.jsx)("i",{className:"fas fa-volume-mute"}):Object(l.jsx)("i",{className:"fas fa-volume-up"})}),Object(l.jsx)(h.SignOut,{})]})]}),Object(l.jsx)("div",{id:"chat-box",className:"chat-box"}),Object(l.jsx)("button",{onClick:function(){return p()},id:"scrollDown",children:Object(l.jsx)("i",{className:"fas fa-arrow-alt-circle-down"})}),Object(l.jsxs)("div",{id:"sending-component",children:[Object(l.jsx)("div",{id:"typing"}),Object(l.jsxs)("form",{onSubmit:function(e){return e.preventDefault()},id:"send-message-wrapper",className:"send-message-wrapper",children:[Object(l.jsx)("input",{type:"text",autoComplete:"off",onKeyUp:function(e){},name:"message",id:"message",onChange:function(e){return function(e){f(e),b.emit("typing",{message:e,name:n})}(e.target.value)},value:j,placeholder:"Enter Your Message"}),Object(l.jsx)("button",{id:"message-send-button",onClick:function(){return O()},children:"Send"})]})]})]})})},p={apiKey:"AIzaSyCyB2Or8Dxmwd8m_iptGEFcqN579BN1dzk",authDomain:"message-app-b2d31.firebaseapp.com",projectId:"message-app-b2d31",storageBucket:"message-app-b2d31.appspot.com",messagingSenderId:"939057848458",appId:"1:939057848458:web:9efb13d3cf5d74bd9d4d73",measurementId:"G-B21M3PZ13F"},v=n(21),g=(n(85),n(82),n(86),n(45));v.a.initializeApp(p);var j=v.a.auth();var h={Login:function(){var e,t=Object(g.a)(j),n=Object(d.a)(t,1)[0];try{n.displayName&&(e=n)}catch(a){}return e?Object(l.jsx)(m,{user:e}):Object(l.jsx)("button",{id:"login",onClick:function(){var e=new v.a.auth.GoogleAuthProvider;j.signInWithPopup(e)},children:"Login"})},SignOut:function(){return j.currentUser&&Object(l.jsx)("button",{id:"signout",onClick:function(){return j.signOut()},children:"Sign Out"})}};var f=function(){var e=.01*window.innerHeight;return document.documentElement.style.setProperty("--vh","".concat(e,"px")),Object(l.jsx)(h.Login,{})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),O()}},[[84,1,2]]]);
//# sourceMappingURL=main.21af6322.chunk.js.map