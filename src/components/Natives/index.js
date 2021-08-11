import React from 'react'
import { nativesInfo } from './helper'
import Card from './Card'

const index = () => {
    const cardsArray =nativesInfo.map(data => (
        <Card {...data} key={data.id} />
    ));
    return (
        <div>
            <div>
                {cardsArray}
            </div>
        </div>
    )
}

export default index
