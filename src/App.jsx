import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import ChatEnvio from './component/ChatEnvio'
import ChatRecibido from './component/ChatRecibido'
import axios from "axios";
import quotes from "./quotes.json"
import './App.css'
import useChange from './hooks/useChange';

function App() {
  
  const [users, setUsers] = useState({});
  //const [emojis, setEmojis] = useState({});
  const randomPhrases = (Math.floor(Math.random()* quotes.length));
  const [quoteIndex, setQuoteIndex] = useState(randomPhrases);

  /** 
   *

  useEffect(() => {
    axios
    .get('https://api.emojisworld.fr/v1/random')
    .then((res) => setEmojis(res.data.results[0]))
  }, [])*/ 
 

  useEffect(() =>{
    axios
     .get('https://randomuser.me/api/')
     .then((res) => setUsers(res.data.results[0]))
 }, []);

  const tamaño = quotes[quoteIndex].quote.length;
  console.log(tamaño)

  const changeClick = () =>{

    const randomPhrasesClick = (Math.floor(Math.random()* quotes.length));
   

    axios
    .get('https://randomuser.me/api/')
    .then((res) => setUsers(res.data.results[0]))
    
    if(!tamaño < 200){
      setQuoteIndex(randomPhrasesClick)
    }
      
    
    
   
  }
  //console.log(users)
  //console.log(emojis)
  return (
    <div className="App">
      <div className='box-top'>
        <div className='camara'></div>
      </div>
      <div className='display-box'>
        <div className='top-display'>
          <p>17:00</p>
          <div className='icons-top'>
            <i className="fa-solid fa-wifi"></i>
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-battery-half"></i>
          </div>
        </div>
        <div className='app-box'>
          <div className='app-top'>
            <i className="fa-solid fa-arrow-left"></i>
            <div className='imagen-user'>
              <img src={users.picture?.thumbnail} alt="" className='profile-image'/>
            </div>
            <div className='user'>
              <p><b>{users.name?.first} {" "} {users.name?.last}</b></p>
              <p>últ. vez hoy a las 13:29</p>
            </div>
            <div className='icons-app'>
              <i className="fa-solid fa-video"></i>
              <i className="fa-solid fa-phone"></i>
              <div className='points'>
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
              </div>
            </div>
          </div>
          <div className='chats'>
            <ChatEnvio users={users} quoteIndex={quoteIndex} randomPhrases={randomPhrases} />
            <ChatRecibido users={users}  quoteIndex={quoteIndex} randomPhrases={randomPhrases} />
            <ChatEnvio  users={users}  quoteIndex={quoteIndex} randomPhrases={randomPhrases} />
            <ChatRecibido users={users}  quoteIndex={quoteIndex} randomPhrases={randomPhrases} />
            <ChatEnvio users={users}  quoteIndex={quoteIndex} randomPhrases={randomPhrases} />
            <div className='message-box'>
              <div className='box-chat'>
                <div className='left-chat'>
                  <i className="fa-regular fa-face-surprise"></i>
                  <p>Message</p>
                </div>
                <div className='right-chat'>
                  <i className="fa-solid fa-paperclip"></i>
                  <i className="fa-solid fa-camera"></i>
                  </div>
              </div>
              <div className='arrow-send'>
                <i className="fa-solid fa-circle-arrow-right arrow" onClick={changeClick}></i>
              </div>
              
            </div>

          </div>
          <div className='end-display'>
          <i className="fa-solid fa-square"></i>
          <i className="fa-regular fa-circle"></i>
          <i className="fa-solid fa-caret-left"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
