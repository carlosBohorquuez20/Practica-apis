import React from 'react';
import quotes from '../quotes.json'
import useChange from '../hooks/useChange';
const ChatRecibido = ({users, quoteIndex}) => {
  const {data: emojis} = useChange('https://api.emojisworld.fr/v1/random')
  return (

    <div className='chats-recived'>
      <div className='recived'>
        <div className='box-content-send'>
          <div className='user-chat'>
          <img src={users.picture?.thumbnail}  alt="profile"  className='profile-image'/>
          </div>
          <div className='text'>
            <p>{quotes[quoteIndex]?.quote} {emojis.results?.[0].emoji} {emojis.results?.[0].emoji}</p>
          </div>
        </div>
        <div className='hour-chat'>
          <p>12:20 pm</p>
        </div>
      </div>

    </div>

  );
};

export default ChatRecibido;