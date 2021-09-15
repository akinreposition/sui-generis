import React, { useState } from 'react'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'

const HomeScreen = () => {
    const [statements, setStatments] = useState([
        "welcome to the Native home page",
        "Choose among the stack available",
        "we coding with love"
    ])
    // const [ name, setName ] = useState("")
    const [ page, setPage ] = useState(0);

    const nextPage = () => {
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
    // const addStatment = () => {
    //     setStatment1([...statment1, name])
    // }
    return (
        <div className='container'>
                <BiLeftArrow onClick={prePage} className="leftArrow"/>
                <span>{statements}</span>
                <BiRightArrow onClick={nextPage} className="rightArrow"/>
        </div>
    )
}

export default HomeScreen
