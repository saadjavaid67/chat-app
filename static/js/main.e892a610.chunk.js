(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),s=n(42),i=n.n(s),o=(n(50),n(51),n(17)),d=n(43),r=n.n(d),l=n.p+"static/media/audio.af4a25f6.mp3",u=n(3),b=r()("https://chat-app-serverside.herokuapp.com/");var m=function(e){var t=new Audio(l),n=e.user.displayName;function c(e){var t=e.getHours(),n=e.getMinutes(),a=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+a}var s=Object(a.useState)(!1),i=Object(o.a)(s,2),d=i[0],r=i[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),v=p[0],g=p[1],j=function(){var e={message:v,name:n};b.emit("send-message",e),function(e){var t=document.getElementById("chat-box"),n=document.createElement("div");n.className="sender-bubble-wrapper",n.innerHTML='<div class="sender message-bubble"><div class="bubble-name">You</div><div class="bubble-text">'+e+'</div><div class="bubble-time">'+c(new Date)+"</div></div>",t.append(n)}(v),g(""),document.getElementById("message").blur(),f()},f=function(){var e=document.getElementById("chat-box");e.scrollTop=e.scrollHeight,document.getElementById("chat-box").addEventListener("scroll",(function(){document.getElementById("chat-box").scrollTop/document.getElementById("chat-box").scrollHeight>.5?document.getElementById("scrollDown").style.display="none":document.getElementById("scrollDown").style.display="block"}))};return Object(a.useEffect)((function(){b.emit("new-user-joined",n),b.on("user-joined",(function(e){!function(e){var t=document.getElementById("chat-box"),n=document.createElement("div");n.className="sender-bubble-wrapper",n.innerHTML='<div class="sender message-bubble"><div style="font-style:italic;" class="bubble-text">'+e+'</div><div class="bubble-time">'+c(new Date)+"</div></div></div>",t.append(n)}(e+" Joined the Chat.")}))}),[]),Object(a.useEffect)((function(){b.on("recieve-message",(function(e){!function(e,n){t.play();var a=document.getElementById("chat-box"),s=document.createElement("div");s.className="reciever-bubble-wrapper",s.innerHTML='<div class="message-bubble">\n        <div class="bubble-name">'+e+'</div>\n        <div class="bubble-text">'+n+'</div>\n        <div class="bubble-time">'+c(new Date)+"</div>\n        </div>",a.append(s)}(e.name,e.message)}))}),[]),Object(u.jsx)("div",{className:"home-container",children:Object(u.jsxs)("div",{className:"main-chat-container",children:[Object(u.jsxs)("div",{className:"chat-header",children:[Object(u.jsx)("div",{className:"m-10",children:Object(u.jsx)("div",{className:"header-text",children:"Realtime Chat Around the World"})}),Object(u.jsxs)("div",{className:"m-10",children:[Object(u.jsx)("div",{onClick:function(){return r(!d)},children:d?Object(u.jsx)("i",{class:"fas fa-volume-mute"}):Object(u.jsx)("i",{class:"fas fa-volume-up"})}),Object(u.jsx)(h.SignOut,{})]})]}),Object(u.jsx)("div",{id:"chat-box",className:"chat-box"}),Object(u.jsx)("button",{onClick:function(){return f()},id:"scrollDown",children:Object(u.jsx)("i",{className:"fas fa-arrow-alt-circle-down"})}),Object(u.jsxs)("div",{id:"send-message-wrapper",className:"send-message-wrapper",children:[Object(u.jsx)("input",{type:"text",autoComplete:"off",onKeyUp:function(e){return function(e){"Enter"===e.key&&j()}(e)},name:"message",id:"message",onChange:function(e){return g(e.target.value)},value:v,placeholder:"Enter Your Message"}),Object(u.jsx)("button",{id:"message-send-button",onClick:function(){return j()},children:"Send"})]})]})})},p={apiKey:"AIzaSyCyB2Or8Dxmwd8m_iptGEFcqN579BN1dzk",authDomain:"message-app-b2d31.firebaseapp.com",projectId:"message-app-b2d31",storageBucket:"message-app-b2d31.appspot.com",messagingSenderId:"939057848458",appId:"1:939057848458:web:9efb13d3cf5d74bd9d4d73",measurementId:"G-B21M3PZ13F"},v=n(21),g=(n(85),n(82),n(86),n(45));v.a.initializeApp(p);var j=v.a.auth();var h={Login:function(){var e,t=Object(g.a)(j),n=Object(o.a)(t,1)[0];try{n.displayName&&(e=n)}catch(a){console.log(a)}return e?Object(u.jsx)(m,{user:e}):Object(u.jsx)("button",{id:"login",onClick:function(){var e=new v.a.auth.GoogleAuthProvider;j.signInWithPopup(e)},children:"Login"})},SignOut:function(){return j.currentUser&&Object(u.jsx)("button",{id:"signout",onClick:function(){return j.signOut()},children:"Sign Out"})}};var f=function(){var e=.01*window.innerHeight;return document.documentElement.style.setProperty("--vh","".concat(e,"px")),Object(u.jsx)(h.Login,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),x()}},[[84,1,2]]]);
//# sourceMappingURL=main.e892a610.chunk.js.map