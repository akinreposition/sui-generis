import React from 'react'

const Card = ({ name, username, mobile, email, imgSrc, gitRepo}) => {
    return (
        <div className="tc dib br3 pa3 m-1 grow bw2 shadow-5">
            <img src={imgSrc}
             alt='semicolon native'
             width='auto'
             height='300'
             />
            <div >
                <h2 className="purple">{name}</h2>
                <h4 className="dark-red">{mobile}</h4>
                <p className="blue">{email}</p>
            </div>
        </div>
    )
}

export default Card
