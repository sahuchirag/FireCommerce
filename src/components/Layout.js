import React from 'react'
import Headers from './Headers'
import Footer from './Footer'
import Loader from './Loader'

function Layout(props)
{
    return(
        <div>
            {props.loading && (<Loader />)}
            <Headers/>
            <div className = 'content'> 
                {props.children}
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Layout