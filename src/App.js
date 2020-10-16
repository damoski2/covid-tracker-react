/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Cards from './components/Cards/Cards.jsx';
//import Charts from './components/Charts/Charts.jsx';
//import CountryPicker from './components/CountryPicker/CountryPicker.jsx';

import { Cards, Charts, CountryPicker, Navbar, Backdrop, Sidedrawer, NigeriaCard, ContactPage, BodyInfo, Commentdrawer, Commentsection, Footer, Comment_sectiondrawer, NigeriaChart } from './components'
import styles from './App.module.css';
import { fetchData } from './api';
import corona from './images/corona.png';
import { fetchNigeria } from './api';


class App extends Component {
    constructor(props) {
        super(props);
        this.main = React.createRef();
    }

    handleScroll = (e) => {
        const main = this.main.current;
        window.scrollTo({
            top: main.offsetTop,
            left: 0,
            behavior: 'instant'
        });
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sidedraweropen: !prevState.sidedraweropen }
        })
    }

    closedrawerState = () => {
        this.setState({ sidedraweropen: false })
    }

    closecommentState = () => {
        this.setState({ commentdraweropen: false })
    }

    commentToggleClickHandler = () => {
        this.setState((prevState) => {
            return { commentdraweropen: !prevState.commentdraweropen }
        })
    }

    state = {
        data: {},
        country: '',
        sidedraweropen: false,
        Nig: {},
        commentdraweropen: false
    }



    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({ data: fetchedData })
    }

    // eslint-disable-next-line no-dupe-class-members
    async componentDidMount() {
        const fetchedNg = await fetchNigeria();

        this.setState({ Nig: fetchedNg })
    }

    handleCountryChange = async (country) => {
        //fetch the data
        const fetchedData = await fetchData(country);

        //set the state
        this.setState({ data: fetchedData, country: country });
    }

    // For the nigeria data
 
    render() {
        const { data, country, Nig, sidedraweropen, commentdraweropen } = this.state;
        let backdrops1;
        let backdrops2;

        if (sidedraweropen) {
            backdrops1 = <Backdrop backclose={this.closedrawerState} />
        }
        if (commentdraweropen) {
            backdrops2 = <Backdrop backclose={this.closecommentState} />
        }
        return (
            <Router>
                <div className={styles.container}>
                    <Route path="/" render={props => (
                        <React.Fragment>
                            <Navbar drawerClickHandler={this.drawerToggleClickHandler} handle={this.handleScroll} />
                            <Sidedrawer show={sidedraweropen} />
                            {backdrops1}
                            <img src={corona} className={styles.image} alt="COVID_19" />
                            <BodyInfo />
                            <Cards data={data} />
                            <CountryPicker handleCountryChange={this.handleCountryChange} />
                            <Charts ref={this.main} data={data} country={country} />
                            <NigeriaCard Nig={Nig} />
                            <NigeriaChart Nig={Nig} />
                            <ContactPage ref={this.main} />
                            <Commentsection ref={this.main} />
                            <Comment_sectiondrawer commenthandler={this.commentToggleClickHandler} />
                            <Commentdrawer show={commentdraweropen} />
                            {backdrops2}
                        </React.Fragment>
                    )} />
                </div>
                <div>
                    <Footer />
                </div>
            </Router>
        )
    }
}


export default App