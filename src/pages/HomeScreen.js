import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const HomeScreen = () => {
    const [statment1, setStatment1] = useState([
        "welcome to the Native home page",
        "Choose among the stack available",
        "we coding with love"
    ])
    const [ name, setName ] = useState("")
    const [ page, setPage ] = useState(0);

    const nextState = () => {
        setPage(page + 1);
    }

    const preState = () => {
        if( page < 0){
            setPage(statment1.length);
        }else{
            setPage(page -1);
        }
    }
    const addStatment = () => {
        setStatment1([...statment1, name])
    }
    return (
        <div className='tc'>
            <section>
                <BiLeftArrow onClick={preState}/>
            </section>
                <p>{statment1}</p>
            <section>
                <BiRightArrow onClick={nextState}/>
            </section>
        </div>
    )
}

export default HomeScreen
