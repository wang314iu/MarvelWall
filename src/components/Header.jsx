import React, { Component } from 'react';

class Header extends Component {
    style = {
        navBar: {
            position: 'fixed',
            width: '100%',
            height: 55,
            zIndex: 100,
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white',
            transition: 'top 0.2s ease-in-out'
        },
        navUp: {
            top: " -55px;",
            background: 'rgba(0, 0, 0, 0.9)',
            color: 'white'
        }
    }

    constructor() {
        super();
        this.state = {
            style: this.style.navBar
        }
    }

    render() {
        return (
            <nav className="navbar" style={this.state.style} >
                <span className="navbar-brand"> <b>Marvel Wall</b></span>
                {/* <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </nav>
        );
    }

    // componentDidMount() {
    //     window.addEventListener('scroll', ev => this.handleScroll(ev));
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('scroll', ev => this.handleScroll(ev));
    // }

    // handleScroll = (event) => {
    //     console.log('scroll')
    //     let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop / 3 - 60);
    //     this.setState({
    //         style: { ...this.style.navUp }
    //     });
    // }
}

export default Header;