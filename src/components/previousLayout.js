/* This component will be called to load the information from previous revues.
It will use the prevRevue.module.css module to format images and data.
Can keep calling this to call all the info. This .js file will also store all the info of prev revues in it. */

import React from "react"
import styles from "../components/previousLayout.module.css"


class previousLayout extends React.Component {

    render () {
        return (
            <>
                <div>
                    <p>The data is: {this.props.myTitle}</p>
                    <p1>Test.</p1>
                </div>
            </>
        )
    }

}


export default previousLayout