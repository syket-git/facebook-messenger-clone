import React, { useState, useEffect } from 'react';
import './App.css';
import { TextField, Button } from '@material-ui/core';
import img from './images/messenger.png';
import SendIcon from '@material-ui/icons/Send';
import Message from './components/Message/Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [message, setMessage] = useState([]);
  const [input, setInput] = useState('');
  const [userName, setUsername] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      username: userName.toLowerCase(),
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessage(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    const user = prompt('Write your username');
    if (user === null) {
      alert('Sorry! You have to first put you username. Reload again!');
    }
    setUsername(user);
  }, []);

  return (
    <div className="App">
      <div style={{ marginTop: '30px' }} className="header">
        <img src={img} style={{ width: '100px' }} alt="" />
        <h2>Facebook Messenger App</h2>
        <h3>
          Welcome{' '}
          <span style={{ textTransform: 'capitalize' }}>{userName}</span>
        </h3>
      </div>
      <div className="send-message-container">
        <div className="input-button-container">
          <form className="input-form ">
            <TextField
              value={input}
              disabled={userName === null}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter a message..."
            />
            <Button
              disabled={!input}
              type="submit"
              style={{ marginLeft: '-16px', marginTop:'-15px' }}
              onClick={sendMessage}
            >
              <SendIcon
                style={{
                  color: !input ? 'gray' : 'blue',
                  cursor: 'pointer',
                  marginTop: '20px',
                }}
              />
            </Button>
          </form>
        </div>

        <div className="message-container">
          {
            message === [] 

            ? 

            <h1>Something went wrong</h1>


            :

            <FlipMove>
            {message.map(({ id, message }) => (
              <Message key={id} username={userName} message={message} />
            ))}
          </FlipMove>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
