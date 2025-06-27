import React from 'react'
import { format } from 'date-fns'

const Footer = () =>{
    const today = new Date();
    return(
        <footer className='Footer'>
           <h3> Daily Posts &copy; {today.getFullYear()} </h3> 
           {/* {today.getFullYear()} */}
        </footer> 
    )
}

export default Footer