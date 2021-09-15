import React from 'react'
// import SuiGenerisContext from '../../context/sui-generis/suiGenerisContext'
import Card from './Card'

const Natives = ({ natives }) => {
    // const suiGenerisContext = useContext(SuiGenerisContext)
    // const { natives } = suiGenerisContext;
    return (
        <div style={{marginTop: '3%'}}>
            {natives.map((data, id) =>
                <Card {...data} key={id} />
            )}  
        </div>
    )
}
export default Natives