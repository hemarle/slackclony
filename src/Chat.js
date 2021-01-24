import "./Chat.css";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "./firebase";
import firebase from "firebase";
import Message from "./Message";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => {
          setRoomDetails(snapshot.data());
        });

      db.collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshots) => {
          setMessages(snapshots.docs.map((doc) => doc.data()));
        });
    }
  }, [roomId]);

  const addMessage = (e) => {
    e.preventDefault();

    if (newMessage) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        message: newMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

    setNewMessage("");
  };

  return (
    <div className="chat">
      <div className="chat__body">
        <h3> {roomDetails.name} </h3>

        <div className="chat__header">
          {messages.map((message) => (
            <Message
              message={message.message}
              user={message.user}
              timestamp={message.timestamp}
            />
          ))}
        </div>
      </div>

      <div className="chat__form">
        <input
          type="text"
          placeholder={`Message-${roomDetails.name}`}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
        />
        <Button onClick={addMessage} className="chat__button">
          Send
        </Button>
      </div>
    </div>
  );
}

export default Chat;
