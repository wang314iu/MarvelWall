import React, { Component } from 'react';
import APIs from '../api';
import Card from './Card';
import Spinner from './Spinner';
var _ = require('lodash');

// import * as data from './data.json';

export default class CardList extends Component {
    // browserHeight = 0;

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            offset: 0,
            totalItems: 0,
            isInit: true,
            isShowFullSpinner: true,
            isShowTopSpinner: false,
            isShowBottomSpinner: false,
            loadDirection: 'next'
        }

    }

    render() {
        return (
            <div>
                {this.showFullSpinner()}
                {this.showTopSpinner()}

                <div className="grid">
                    {this.state.data.map(item =>
                        <Card
                            key={item.id}
                            id={item.id}
                            item={item}
                        />
                    )}
                </div>

                {this.showBottomSpinner()}
            </div>
        );


    }

    componentDidMount() {
        console.log('did mount');
        // this.addScrollHandler();
        APIs.GET_CHARACTERS((body, err) => {
            if (err != null) {
                console.log(err);
                this.componentDidMount();
            } else {
                this.setState({ data: body.data.results, totalItems: body.data.total, isShowFullSpinner: false });
            }
        }, this.state.offset);
    }


    componentWillUpdate(nextProps, nextState) {
        console.log('will update raised');
    }

    componentDidUpdate(prevProps, prevState, info) {

        if (prevState.offset !== this.state.offset) {
            console.log('updated data')
            APIs.GET_CHARACTERS((body, err) => {
                if (err != null) {
                    debugger
                    this.componentDidUpdate(prevProps, prevState, info);
                } else {
                    this.setState({
                        data: body.data.results,
                        totalItems: body.data.total,
                        isShowBottomSpinner: false,
                        isShowTopSpinner: false,
                        isShowFullSpinner: false
                    });
                }
            }, this.state.offset);
        }


        if (JSON.stringify(this.state.data) !== JSON.stringify(prevState.data)) {

            console.log('scroll top')
            this.checkIfDomReadyForScroll();
        }

    
    }

    componentWillUnmount() {
        this.removeScrollHandler();
    }

    // ----------- spinner ----------------------------------
    showFullSpinner = () => {
        return this.state.isShowFullSpinner ? <Spinner type="full" /> : null;
    }

    showTopSpinner = () => {
        return this.state.isShowTopSpinner ? <Spinner type="top" /> : null;
    }

    showBottomSpinner = () => {
        return this.state.isShowBottomSpinner ? <Spinner type="bottom" /> : null;
    }
    // ----------- spinner ------------------------------------------

    // ------------------- scroll event -------------------------------
    checkIfDomReadyForScroll = () => {
        setTimeout(() => requestAnimationFrame(this.addScrollHandler), 0);
    }


    handleScroll = _.throttle(() => {

        console.log(window.scrollY, window.innerHeight, document.body.scrollHeight)
        if (window.scrollY === 0 && this.state.offset >= 20) {

            this.removeScrollHandler();  // temparally remove scroll listener
            console.log('loadPrev');
            this.setState({
                offset: this.state.offset - 20
                , isShowTopSpinner: true, loadDirection: 'prev'
            });

            return;
        }

        if (window.scrollY >= document.body.scrollHeight - window.innerHeight - 1
            && this.state.offset < this.state.totalItems) {
            // console.log('loadNext');
            this.removeScrollHandler();  // temparally remove scroll listener
            this.setState({
                offset: this.state.offset + 20
                , isShowBottomSpinner: true, loadDirection: 'next'
            });
        }
    }, 300);


    addScrollHandler = (scroll) => {
        console.log('add scroll handler');
        this.log('load direction : ', this.state.loadDirection)

        if (this.state.loadDirection === 'next') {
            this.log('onNext')
            window.scrollTo(0, 60);
        }

        if (this.state.loadDirection === 'prev') {
            this.log('onPrev')
            window.scrollTo(0, document.body.scrollHeight - window.innerHeight - 60);
        }

        window.addEventListener('scroll', this.handleScroll);
    }

    removeScrollHandler = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    // ------------------- window resize listener -----------------

    // addWindowResizeLisener = () => {
    //     window.addEventListener('resize', this.windowResizeHandler);
    // }

    // removeWindowResizeLisener = () => {
    //     window.removeEventListener('resize', this.windowResizeHandler);
    // }

    // windowResizeHandler = _.debounce(() => {
    //     this.getBrowserHeight();
    // });

    // getBrowserHeight = () => {
    //     this.browserHeight = window.innerHeight;
    // }

    // ------------------- scroll event -------------------------------
    log(str1, str2 = '') {
        console.log(str1, str2);
    }
}
