import React, { forwardRef } from 'react';
import './Message.css';
import { Card, CardContent, Typography } from '@material-ui/core';

const Message = forwardRef(({ message, username }, ref) => {
  const isUser =
    (username && username.toLowerCase()) ===
    (message && message.username.toLowerCase());

  return (
    <div ref={ref} className={`message ${isUser && 'message__user'}`}>
      <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
        <CardContent>
          <Typography>
            <span style={{ fontWeight: '700' }}>
              {!isUser && `${message.username} : `}
            </span>{' '}
            {message.text}
            
            <br/>
            <span className="message_time">
            
            {message.timestamp !== null
                ? new Date(message.timestamp.seconds * 1000).toLocaleDateString(
                    'en-US'
                  )
                : null}
                <br/>
              {message.timestamp !== null
                ? new Date(message.timestamp.seconds * 1000).toLocaleTimeString(
                    'en-US'
                  )
                : null}
            
              
            </span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
