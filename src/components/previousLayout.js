/* This component will be called to load the information from previous revues.
It will use the prevRevue.module.css module to format images and data.
Can keep calling this to call all the info. This .js file will also store all the info of prev revues in it. */

import React from "react"
import PropTypes from "prop-types"



const previousLayout = ({children}) => {
    
    /* Add text in during the previous.js page*/

    return (
        <>
        <div
            style= {{
                padding: `60px`,
                minHeight: `100vh`,
                display: `flex`,
                flexDirection: `row`
            }}>
            <main style={{ flex: 1, flexDirection: 'row' }}>
                <p> Hello !</p>
                </main>
        </div>
        </>
    )

}

previousLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }


export default previousLayout