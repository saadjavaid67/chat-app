(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[0],{50:function(e,n,t){},51:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var s=t(4),a=t.n(s),i=t(42),c=t.n(i),r=(t(50),t(51),t(17)),l=t(43),o=t.n(l),d=t.p+"static/media/audio.af4a25f6.mp3",m=t(3),u=o.a.connect("https://chat-app-serverside.herokuapp.com/",{"sync disconnect on unload":!0});var b=function(e){Object(s.useEffect)((function(){u.off("setData"),u.on("setData",(function(e){}))}),[]),window.addEventListener("beforeunload",(function(e){return(e||window.event).returnValue=null,null}));var n=new Audio(d),t=e.user.displayName,a=e.user.photoURL;function i(e){var n=e.getHours(),t=e.getMinutes(),s=n>=12?"pm":"am";return(n=(n%=12)||12)+":"+(t=t<10?"0"+t:t)+" "+s}var c=function(e){var n=document.getElementById("chat-box"),t=document.createElement("div");t.className="sender-bubble-wrapper",t.innerHTML='<div class="sender message-bubble"><div style="font-style:italic;" class="bubble-text">'+e+'</div><div class="bubble-time">'+i(new Date)+"</div></div></div>",n.append(t)},l=function(e,n){var t=document.getElementById("chat-box"),s=document.createElement("div");s.className="sender-bubble-wrapper",s.onclick=function(e){return f(e.currentTarget)};var c=document.createElement("div");c.className="sender message-bubble",c.innerHTML=n||"",c.innerHTML+='<div class="bubble-name">You</div><div class="bubble-text">'+e+'</div><div class="bubble-time">'+i(new Date)+"</div>",s.append(c);var r=document.createElement("img");r.className="dp",r.src=a,s.append(r),t.append(s),h(),u.emit("getData")},o=Object(s.useState)(!1),b=Object(r.a)(o,2),p=b[0],g=b[1],f=function(e){var n=e.cloneNode(!0);n.getElementsByClassName("message-bubble")[0].getElementsByClassName("sender-bubble-wrapper")[0]&&n.getElementsByClassName("message-bubble")[0].removeChild(n.getElementsByClassName("sender-bubble-wrapper")[0]),n.getElementsByClassName("message-bubble")[0].getElementsByClassName("reciever-bubble-wrapper")[0]&&n.getElementsByClassName("message-bubble")[0].removeChild(n.getElementsByClassName("reciever-bubble-wrapper")[0]);var t=document.getElementById("reply-message-container"),s=document.getElementById("reply-message-wrapper");t.innerHTML="",s.style.display="block",s.style.height="130px",t.append(n),document.getElementById("message").focus()},j=function(){document.getElementById("reply-message-wrapper").style.display="none",document.getElementById("reply-message-container").innerHTML=""},v=function(e,n,t,s){var a=document.getElementById("chat-box"),c=document.createElement("div");c.className="reciever-bubble-wrapper",c.onclick=function(e){return f(e.currentTarget)};var r=document.createElement("div");r.className="message-bubble",r.innerHTML=s||"",r.innerHTML+='<div class="bubble-name">'+e+'</div><div class="bubble-text">'+n+'</div><div class="bubble-time">'+i(new Date)+"</div>";var l=document.createElement("img");l.className="dp",l.src=t,c.append(l),c.append(r),a.append(c),h()},h=function(){document.getElementById("chat-box").childNodes[document.getElementById("chat-box").childNodes.length-1].scrollIntoView({behaviour:"smooth"})},O=function(e){document.getElementById("online-users").innerHTML=e.length;var n="";e.forEach((function(e){n+="<li>"+e+"</li>"})),document.getElementById("online-users-list").innerHTML=n},x=Object(s.useState)(""),E=Object(r.a)(x,2),N=E[0],w=E[1];return Object(s.useEffect)((function(){var e={name:t,picture:a};u.emit("new-user-joined",e),u.off("user-joined"),u.on("user-joined",(function(e){c(e.name+" Joined the Chat."),O(Object.keys(e.online))})),u.off("user-left"),u.on("user-left",(function(e){c(e.name+" Left the Chat."),O(Object.keys(e.online))})),u.off("recieve-typing"),u.on("recieve-typing",(function(e){for(var n="",s=0;s<Object.keys(e).length;s+=2)Object.keys(e)[s]!==t&&(n+=Object.keys(e)[s]),Object.keys(e).length-2!==s&&""!==n&&(n+=" + ");""!==n&&(n+=" Typing..."),document.getElementById("typing").innerHTML=n})),u.off("update-online"),u.on("update-online",(function(e){O(Object.keys(e))}))}),[]),Object(s.useEffect)((function(){u.off("recieve-message"),u.off("recieve-message-with-reply"),u.on("recieve-message",(function(e){document.getElementById("chat-box").addEventListener("DOMNodeInserted",(function(){})),p||n.play(),v(e.name,e.message,e.picture)})),u.on("recieve-message-with-reply",(function(e){p||n.play(),v(e.name,e.message,e.picture,e.reply)}))}),[p]),Object(m.jsx)("div",{className:"home-container",children:Object(m.jsxs)("div",{className:"main-chat-container",children:[Object(m.jsxs)("div",{className:"chat-header",children:[Object(m.jsxs)("div",{className:"m-10",children:[Object(m.jsx)("div",{className:"header-text",children:"Realtime Chat Around the World"}),Object(m.jsxs)("div",{id:"online-wrapper",onClick:function(){var e=document.getElementById("online-users-list").style.display;document.getElementById("online-users-list").style.display=""===e?"block":""},children:["(",Object(m.jsx)("i",{className:"fas fa-globe"})," Online"," ",Object(m.jsx)("span",{id:"online-users"}),") ",Object(m.jsx)("ul",{id:"online-users-list"})]})]}),Object(m.jsxs)("div",{className:"m-10",children:[Object(m.jsx)("div",{onClick:function(){return g(!p)},children:p?Object(m.jsx)("i",{className:"fas fa-volume-mute"}):Object(m.jsx)("i",{className:"fas fa-volume-up"})}),Object(m.jsx)(y.SignOut,{})]})]}),Object(m.jsx)("div",{id:"chat-box",className:"chat-box"}),Object(m.jsx)("button",{onClick:function(){return h()},id:"scrollDown",children:Object(m.jsx)("i",{className:"fas fa-arrow-alt-circle-down"})}),Object(m.jsxs)("div",{id:"reply-message-wrapper",children:[Object(m.jsxs)("div",{id:"reply-header-wrapper",children:[Object(m.jsx)("span",{id:"reply-header",children:"reply to"}),Object(m.jsx)("i",{onClick:function(){j()},className:"fas fa-times-circle"})]}),Object(m.jsx)("div",{id:"reply-message-container"})]}),Object(m.jsxs)("div",{id:"sending-component",children:[Object(m.jsx)("div",{id:"typing"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},id:"send-message-wrapper",className:"send-message-wrapper",children:[Object(m.jsx)("input",{type:"text",autoComplete:"off",name:"message",id:"message",onChange:function(e){return function(e){w(e),u.emit("typing",{message:e,name:t})}(e.target.value)},value:N,placeholder:"Enter Your Message"}),Object(m.jsx)("button",{type:"submit",id:"message-send-button",onClick:function(){!function(){if(""!==N){var e={name:t,message:N,reply:""},n=document.getElementById("reply-message-container").cloneNode(!0);u.emit("typing",{message:"",name:t}),""===n.innerHTML?(u.emit("send-message",e),l(N)):("You"==n.getElementsByClassName("bubble-name")[0].innerText&&(n.getElementsByClassName("bubble-name")[0].innerText=t),e.reply=n.innerHTML,u.emit("send-message-with-reply",e),l(N,n.innerHTML),j()),w(""),document.getElementById("message").focus()}}()},children:"Send"})]})]})]})})},p={apiKey:"AIzaSyCyB2Or8Dxmwd8m_iptGEFcqN579BN1dzk",authDomain:"message-app-b2d31.firebaseapp.com",projectId:"message-app-b2d31",storageBucket:"message-app-b2d31.appspot.com",messagingSenderId:"939057848458",appId:"1:939057848458:web:9efb13d3cf5d74bd9d4d73",measurementId:"G-B21M3PZ13F"},g=t(21),f=t.p+"static/media/google-logo.4088374a.png",j=(t(85),t(82),t(86),t(45));g.a.initializeApp(p);var v=g.a.auth();var y={Login:function(){var e,n=Object(j.a)(v),t=Object(r.a)(n,1)[0];try{t.displayName&&(e=t)}catch(s){}return e?Object(m.jsx)(b,{user:e}):Object(m.jsxs)("div",{id:"login-bg",children:[" ",Object(m.jsxs)("button",{id:"login",onClick:function(){var e=new g.a.auth.GoogleAuthProvider;v.signInWithPopup(e)},children:[Object(m.jsx)("img",{src:f}),"Sign-in with Google"]})]})},SignOut:function(){return v.currentUser&&Object(m.jsx)("button",{id:"signout",onClick:function(){return v.signOut()},children:"Sign Out"})}};var h=function(){var e=.01*window.innerHeight;return document.documentElement.style.setProperty("--vh","".concat(e,"px")),Object(m.jsx)(y.Login,{})},O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,87)).then((function(n){var t=n.getCLS,s=n.getFID,a=n.getFCP,i=n.getLCP,c=n.getTTFB;t(e),s(e),a(e),i(e),c(e)}))};c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h,{})}),document.getElementById("root")),O()}},[[84,1,2]]]);
//# sourceMappingURL=main.2d363448.chunk.js.map