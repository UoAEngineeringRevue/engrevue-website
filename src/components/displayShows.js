import styles from "./displayShows.module.css"
import React, { Component } from "react"



class DisplayApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showSelected: false,
        }
        this.selectShow = this.selectShow.bind(this);
    }

    selectShow(e) {
        e.preventDefault();
        this.setState({
            showSelected: !this.state.showSelected,
        })
    }

    render () {

        const displayClass = (this.state.showSelected ? styles.hide : styles.show);
        const alternateDisplay = (this.state.showSelected ? styles.show : styles.hide);

        return (
            <>
            <div className={displayClass} onClick={this.selectShow}>
                <p>Not yet clicked.</p>
            </div>

            <div className={alternateDisplay}>
                <p>Clicked now.</p>
            </div>
            </>
        )
    }



}


export default DisplayApp