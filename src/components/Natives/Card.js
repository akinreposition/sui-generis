import React from 'react'

const Card = ({ name, username, mobile, email, imgSrc, gitRepo}) => {
    return (
        // <div>
        //     <section className='grid-img'>
        //     <img src={imgSrc} alt='registered vehicle'/>
        //     <h6 className='subInfo_premium-cars'>{name}</h6>
        //     <h4 className='subInfo_name'>{username}</h4>
        //     <h5 className='subInfo_price'>{email}</h5>
        //   </section>
        //   <div className='backdrop-filter'>
        //       <p className='bid_end_time'>{gitRepo} </p>
        //       <h5 className='bid_end_price'>{mobile}</h5>
        //   </div>
        // </div>
        
        <section className="fl w-100 w-50-m w-25-l pv3 pa3-m pa4-l">
            <a className="db center mw5 tc black link dim" href="www.semicolon.africa">
            <img className="db ba b--black-10"
            src={imgSrc} 
            alt="Head container"/>
            <dl className="mt2 f6 lh-copy">
                <dt className="clip">{username}</dt>
                <dd className="m10 name"> {name}</dd>
                <dt className="clip" href={email}> {gitRepo}</dt>
                <dd className="bg-light-purple">{mobile}</dd>
            </dl>
        </a>
        </section>
    )
}

export default Card
