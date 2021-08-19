import React from 'react'
import Card from './Card'

const Natives = ({ nativesInfo }) => {
    const cardsArray = nativesInfo.map(data => (
        <Card {...data} key={data.id} />
    ));
    return (
        <div>
            <div className="">
                {cardsArray}
            </div>
        </div>
    )
}
export default Natives