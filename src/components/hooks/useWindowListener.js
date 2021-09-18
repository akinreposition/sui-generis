import { useState, useEffect } from 'react'

export const useWindowListener = () => {
    const [ width, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => { updateDimensions();
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    } 
    return [ width ]
}
