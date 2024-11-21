import React from 'react'
import game from  '../assets/game.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img src={game} id='user-img' alt="love" />
        <p id='user-desc'>Description of love babbar</p>
    </div>
  )
}

export default UserCard