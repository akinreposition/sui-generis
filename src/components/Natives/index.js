import React from 'react'
import Card from './Card'

const Index = ({ nativesInfo }) => {
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
export default Index