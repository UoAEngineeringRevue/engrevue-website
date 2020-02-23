import React, {Component} from "react"
import styles from "../components/history.module.css"
import { Link } from "gatsby"
import { RevueData } from "../components/database.js"

/* This component is going to handle the dynamic displaying of information. Starts as just the picture, on click expands. */
/* On click; expands, but also makes visible the bottom bar of all other revues. On click, does the same thing. */

class HistoryComponent extends Component {
    constructor(props) {
        super(props);
    }

    render () {

        var dataStorage = new RevueData(this.props.year);
        
        /* The visible part. */
        return (
            <div>
                <img src={dataStorage.coverPicture} />    
                <p> Hello! </p>    
                <p> Year is: {this.props.year}</p>
                <p> Data is: {dataStorage.coverPicture}</p>
                <p> Blurb is: {dataStorage.blurb}</p>
            </div>

            
        );
    }

}

export default HistoryComponent;