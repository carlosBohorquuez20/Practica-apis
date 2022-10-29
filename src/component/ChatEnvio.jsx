import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';
import useChange from '../hooks/useChange';

const ChatEnvio = ({users, quoteIndex}) => {
  const {data: emojis} = useChange('https://api.emojisworld.fr/v1/random')
  return (

    <div className='chats-send'>
      <div className='send'>
        <div className='box-content-send'>
          <div className='text'>
          <p>{quotes[quoteIndex]?.quote} {emojis.emoji} {emojis.emoji}</p>
          </div>

          <div className='user-chat'>
            <img src={users.picture?.thumbnail}  alt="profile"  className='profile-image'/>
          </div>
        </div>
        <div className='hour-chat'>
          <p>12:20 pm</p>
        </div>
      </div>
    </div>

  );
};

export default ChatEnvio;