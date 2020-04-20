import React from "react"

import styles from "./showviewer.module.css"
import data from "./data.js"
import HeroBanner from "./heroBanner"

class ShowViewer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSelected: false,
            year: 'null'
        }
        this.selectShow = this.selectShow.bind(this);
    }

    selectShow(input) {
        this.setState({ year: input, showSelected: true })
    }

    render() {
        const landSection = (this.state.showSelected ? styles.hide : styles.show);
        const showSection = (this.state.showSelected ? styles.show : styles.hide);

        return (
        <>
            <HeroBanner year={this.state.year} />
            <section className={styles.section}>
                <section className={styles.container}>
                    <section className={showSection}> {/* To display specific show information*/}
                        <div className={styles.aboutText}>
                            <div>
                                <p className={styles.catchPhrase}>{data[this.state.year]['catch-phrase']}</p>
                                <h3>ABOUT THE SHOW</h3>
                                <p>{data[this.state.year]['blurb']}</p>
                                <h3>THE CAST</h3>
                                <p>Directed by {data[this.state.year]['director']} <br />
                                    Produced by {data[this.state.year]['producer']} <br /> <br />
                                    For a full cast list and more detals, please view the 
                                    <a href={data[this.state.year]['programme']}> {this.state.year} show programme</a>
                                </p><br />
                                <p>Each year, our lovely cast is made up of around 100 budding engineers from the University 
                                    of Auckland! We are a show run solely by engineering students, for engineering students. No
                                    matter what your level of experience may be, if you're keen to get involved, we want YOU!
                                    Sign ups for 2020 are now on! So navigate to <a href="http://www.engrevue.co.nz/signup">
                                    engrevue.co.nz/signup</a> for more info!
                                </p>
                            </div>
                            <div className={styles.aboutImageContainer}>
                                <img src={data[this.state.year]['poster']} className={styles.aboutImage} />
                            </div>
                        </div>
                    </section>
                    <section className={landSection}> {/* To display all shows */}
                        <button className={styles.imgButton} onClick={() => this.selectShow('2019')}>
                            <img src={data['2019']['poster']} alt={data['2019']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2018')}>
                            <img src={data['2018']['poster']} alt={data['2018']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2017')}>
                            <img src={data['2017']['poster']} alt={data['2017']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2016')}>
                            <img src={data['2016']['poster']} alt={data['2016']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2015')}>
                            <img src={data['2015']['poster']} alt={data['2015']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2014')}>
                            <img src={data['2014']['poster']} alt={data['2014']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2013')}>
                            <img src={data['2013']['poster']} alt={data['2013']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2012')}>
                            <img src={data['2012']['poster']} alt={data['2012']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2011')}>
                            <img src={data['2011']['poster']} alt={data['2011']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2010')}>
                            <img src={data['2010']['poster']} alt={data['2010']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2009')}>
                            <img src={data['2009']['poster']} alt={data['2009']['title']} className={styles.imgView} />
                        </button>
                        <button className={styles.imgButton} onClick={() => this.selectShow('2008')}>
                            <img src={data['2008']['poster']} alt={data['2008']['title']} className={styles.imgView} />
                        </button>
                    </section>
                </section>
            </section>






        </>
        )
    }

}

export default ShowViewer