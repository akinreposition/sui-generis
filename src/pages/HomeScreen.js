import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const HomeScreen = () => {
    const [statements] = useState([
        "welcome to the Native home page",
        "Choose among the stack available",
        "we coding with love"
    ])
    
    const [ page, setPage ] = useState(0);

    const nextPage = (e) => {
        setPage(page + 1);
        console.log("Pressed next page.");
    }

    const prePage = (e) => {
        if( page < 0){
            setPage(statements.length);
        }else{
            setPage(page - 1);
        }
        console.log("Pressed previous page.");
    }

    return (
        <div className='container'>
                <BiLeftArrow onClick={prePage} className="leftArrow"/>
                <span>{statements}</span>
                <BiRightArrow onClick={nextPage} className="rightArrow"/>
        </div>
    )
}

export default HomeScreen
