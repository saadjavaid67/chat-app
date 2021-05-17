import React, { useEffect, useState } from "react";
import Session from "./Login";
import io from "socket.io-client";
import audio from "../audio/audio.mp3";


const socket = io.connect("https://chat-app-serverside.herokuapp.com/", {
    "sync disconnect on unload": true,
});
function Home(_user) {

    //app testing and debugging
    useEffect(() => {
        socket.off('setData')
        socket.on('setData', data => {
            // console.log(data);
        })
    }, [])



    window.addEventListener("beforeunload", function (e) {
        (e || window.event).returnValue = null;
        return null;
    });
    let _audio = new Audio(audio);
    let _name = _user.user.displayName;
    let _dp = _user.user.photoURL;
    function formatAMPM(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? "0" + minutes : minutes;
        var strTime = hours + ":" + minutes + " " + ampm;
        return strTime;
    }
    const appendJoin = (message) => {
        let chatBox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        messageElement.className = "sender-bubble-wrapper";
        messageElement.innerHTML =
            `<div class="sender message-bubble"><div style="font-style:italic;" class="bubble-text">` +
            message +
            `</div><div class="bubble-time">` +
            formatAMPM(new Date()) +
            `</div></div></div>`;
        chatBox.append(messageElement);
    };
    const sentMessage = (message, reply) => {
        let chatBox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        messageElement.className = "sender-bubble-wrapper";
        messageElement.onclick = ((e) => addReply(e.currentTarget))
        const messageBubble = document.createElement("div");
        messageBubble.className = "sender message-bubble";
        messageBubble.innerHTML = (reply) ? (reply) : ('');
        messageBubble.innerHTML += `<div class="bubble-name">You</div><div class="bubble-text">` +
            message +
            `</div><div class="bubble-time">` +
            formatAMPM(new Date()) +
            `</div>`;
        messageElement.append(messageBubble)
        const messageImg = document.createElement("img");
        messageImg.className = "dp";
        messageImg.src = _dp;
        messageElement.append(messageImg)
        chatBox.append(messageElement);
        scrollDown();
        socket.emit('getData');

    };

    const [mute, setMute] = useState(false);
    const addReply = (replyto) => {
        let replyClone = replyto.cloneNode(true);
        if (replyClone.getElementsByClassName('message-bubble')[0].getElementsByClassName('sender-bubble-wrapper')[0])
            replyClone.getElementsByClassName('message-bubble')[0].removeChild(replyClone.getElementsByClassName('sender-bubble-wrapper')[0])
        if (replyClone.getElementsByClassName('message-bubble')[0].getElementsByClassName('reciever-bubble-wrapper')[0])
            replyClone.getElementsByClassName('message-bubble')[0].removeChild(replyClone.getElementsByClassName('reciever-bubble-wrapper')[0])
        let replyContainer = document.getElementById('reply-message-container');
        let replyWrapper = document.getElementById('reply-message-wrapper');
        replyContainer.innerHTML = '';
        replyWrapper.style.display = 'block';
        replyWrapper.style.height = '130px';
        replyContainer.append(replyClone);
        document.getElementById("message").focus();
    }
    const removeReply = () => {
        document.getElementById('reply-message-wrapper').style.display = 'none';
        document.getElementById('reply-message-container').innerHTML = '';
    }

    const recieveMessage = (name, message, dp, reply) => {
        // let chatBox = document.getElementById("chat-box");
        // const messageElement = document.createElement("div");
        // messageElement.className = "reciever-bubble-wrapper";
        // messageElement.onclick = ((e) => addReply(e.currentTarget))
        // messageElement.innerHTML =
        //     `<img class= "dp" src = ` +
        //     dp +
        //     ` alt = "dp" /> <div class="message-bubble">
        //     <div class="bubble-name">` +
        //     name +
        //     `</div>
        //     <div class="bubble-text">` +
        //     message +
        //     `</div>
        //     <div class="bubble-time">` +
        //     formatAMPM(new Date()) +
        //     `</div>
        // </div>`;
        // chatBox.append(messageElement);
        // scrollDown();
        let chatBox = document.getElementById("chat-box");
        const messageElement = document.createElement("div");
        messageElement.className = "reciever-bubble-wrapper";
        messageElement.onclick = ((e) => addReply(e.currentTarget))
        const messageBubble = document.createElement("div");
        messageBubble.className = "message-bubble";
        messageBubble.innerHTML = (reply) ? (reply) : ('');
        messageBubble.innerHTML += `<div class="bubble-name">` + name + `</div><div class="bubble-text">` +
            message +
            `</div><div class="bubble-time">` +
            formatAMPM(new Date()) +
            `</div>`;
        const messageImg = document.createElement("img");
        messageImg.className = "dp";
        messageImg.src = dp;
        messageElement.append(messageImg)
        messageElement.append(messageBubble)
        chatBox.append(messageElement);
        scrollDown();
    };
    const scrollDown = () => {
        document
            .getElementById("chat-box")
            .childNodes[
            document.getElementById("chat-box").childNodes.length - 1
        ].scrollIntoView({ behaviour: "smooth" });
        // if (document.getElementById('chat-box').scrollTop / document.getElementById('chat-box').scrollHeight <= 0.70)
        //     document.getElementById('scrollDown').style.display = 'none';
        // else
        //     document.getElementById('scrollDown').style.display = 'block'
    };

    const updateOnline = (online) => {
        document.getElementById("online-users").innerHTML = online.length;
        let result = "";
        online.forEach((user) => {
            result += "<li>" + user + "</li>";
        });
        document.getElementById("online-users-list").innerHTML = result;
    };
    const [message, setMessage] = useState("");
    const sendMessage = () => {
        if (message !== "") {
            let data = {
                name: _name,
                message: message,
                reply: ''
            };

            let reply = document.getElementById('reply-message-container').cloneNode(true);
            socket.emit("typing", { message: "", name: _name });
            if (reply.innerHTML === '') {
                socket.emit("send-message", data);
                sentMessage(message);
            } else {
                if (reply.getElementsByClassName('bubble-name')[0].innerText == 'You')
                    reply.getElementsByClassName('bubble-name')[0].innerText = _name;
                data.reply = reply.innerHTML;
                socket.emit("send-message-with-reply", data);
                sentMessage(message, reply.innerHTML);
                removeReply();
            }
            setMessage("");
            document.getElementById("message").focus();
        }
    };
    useEffect(() => {
        let _data = {
            name: _name,
            picture: _dp
        }
        socket.emit("new-user-joined", _data);
        socket.off("user-joined")
        socket.on("user-joined", (data) => {
            appendJoin(data.name + " Joined the Chat.");
            updateOnline(Object.keys(data.online));
        });
        socket.off("user-left")
        socket.on("user-left", (data) => {
            appendJoin(data.name + " Left the Chat.");
            updateOnline(Object.keys(data.online));
        });
        socket.off("recieve-typing")
        socket.on("recieve-typing", (data) => {
            let typers = "";
            for (let i = 0; i < Object.keys(data).length; i += 2) {
                if (Object.keys(data)[i] !== _name) typers += Object.keys(data)[i];
                if (Object.keys(data).length - 2 !== i && typers !== "")
                    typers += " + ";
            }
            if (typers !== "") typers = typers + " Typing...";
            document.getElementById("typing").innerHTML = typers;
        });
        socket.off("update-online")
        socket.on("update-online", (online) => {
            updateOnline(Object.keys(online));
        });


    }, []);
    useEffect(() => {
        socket.off("recieve-message")
        socket.off("recieve-message-with-reply")
        socket.on("recieve-message", (data) => {
            document.getElementById("chat-box").addEventListener("DOMNodeInserted", () => {
                // document.getElementById('scrollDown').style.display = 'block'
            });
            if (!mute)
                _audio.play();
            recieveMessage(data.name, data.message, data.picture);
        });
        socket.on("recieve-message-with-reply", (data) => {
            if (!mute)
                _audio.play();
            recieveMessage(data.name, data.message, data.picture, data.reply);
        });
    }, [mute])
    const onTyping = (message) => {
        setMessage(message);
        socket.emit("typing", { message: message, name: _name });
    };
    // console.log(socket.id)
    return (
        <div className="home-container">
            <div className="main-chat-container">
                <div className="chat-header">
                    <div className="m-10">
                        <div className="header-text">Realtime Chat Around the World</div>
                        <div
                            id="online-wrapper"
                            onClick={() => {
                                let d = document.getElementById("online-users-list").style
                                    .display;
                                d === ""
                                    ? (document.getElementById(
                                        "online-users-list"
                                    ).style.display = "block")
                                    : (document.getElementById(
                                        "online-users-list"
                                    ).style.display = "");
                            }}
                        >
                            (<i className="fas fa-globe"></i> Online{" "}
                            <span id="online-users"></span>) <ul id="online-users-list"></ul>
                        </div>
                    </div>
                    <div className="m-10">
                        <div onClick={() => setMute(!mute)}>
                            {mute ? (
                                <i className="fas fa-volume-mute"></i>
                            ) : (
                                <i className="fas fa-volume-up"></i>
                            )}
                        </div>
                        <Session.SignOut />
                    </div>
                </div>
                <div id="chat-box" className="chat-box"></div>
                <button onClick={() => scrollDown()} id="scrollDown">
                    <i className="fas fa-arrow-alt-circle-down"></i>
                </button>
                <div id="reply-message-wrapper">
                    <div id="reply-header-wrapper">
                        <span id="reply-header">reply to</span>
                        <i onClick={() => { removeReply() }} className="fas fa-times-circle"></i>
                    </div>
                    <div id="reply-message-container">

                    </div>
                </div>
                <div id="sending-component">
                    <div id="typing"></div>
                    <form
                        onSubmit={(e) => { e.preventDefault(); }}
                        id="send-message-wrapper"
                        className="send-message-wrapper"
                    >
                        <input
                            type="text"
                            autoComplete="off"
                            name="message"
                            id="message"
                            onChange={(e) => onTyping(e.target.value)}
                            value={message}
                            placeholder="Enter Your Message"
                        />
                        <button type="submit" id="message-send-button" onClick={() => { sendMessage() }}>
                            Send
            </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
