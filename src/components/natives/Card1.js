import React from 'react'

const Card = ({ name, username, mobile, email, imgSrc, gitRepo}) => {
    return (
        <section className="fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l">
            <a className="db center mw5 tc black link dim" href="www.semicolon.africa">
            <img className="db ba b--black-10"
            src={imgSrc} 
            alt="semicolon natives"/>
            <dl className="mt2 f6 lh-copy">
                <dt className="clip">{username}</dt>
                <dd className="m10 name"> {name}</dd>
                <p className="clip" href={email}> {gitRepo}</p>
                <dd className="bg-light-purple">{mobile}</dd>
            </dl>
        </a>
        </section>
    )
}

export default Card
