import React, { Component } from 'react';
import './card.css';
// materials
import APIs from '../api';
import Dialog from './Dialog';
// import Tooltip from './Tooltip';

class Card extends Component {

    style = {
        cell: {
            alignSelf: 'center',
            // border: 'solid 3px blue'
        },
        wrapper: {
            position: 'relative',
            padding: 0,
            display: 'inline-flex'
        },
        img: {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            boxShadow: '0 9px 12px 0 rgba(0,0,0,0.4)',
            transition: ".5s ease"

        }
    }

    constructor(props) {
        super(props);

        this.state = {
            name: props.item.name,
            id: props.item.id,
            description: props.item.description,
            pic: props.item.thumbnail,
            dialogOn: false,
            series: [],
            stories: [],
            publicUrls: [],
            tooltipOn: false
        }
    }

    render() {
        return (
            <span className="cell" style={this.style.cell}>
                <div
                    style={this.style.wrapper}
                    onClick={this.onClickHero}
                // onMouseEnter={this.openTooltip}
                // onMouseLeave={this.closeTooltip}
                >
                    <img
                        style={this.style.img}
                        src={this.state.pic.path + '.' + this.state.pic.extension}
                        alt=""
                    ></img>

                    <span
                        className="overlay"
                    >
                        <h4> {this.state.name} </h4>
                        <p>{this.state.description}</p> <br />
                        <p>Click for more ...</p>
                    </span>
                </div>

                <Dialog
                    dialogOn={this.state.dialogOn}
                    title={this.props.item.name}
                    handleClose={this.handleClose}
                    series={this.state.series}
                    stories={this.state.stories}
                    publicUrls={this.state.publicUrls}
                />

                {/* { for future tool tip
                    this.state.tooltipOn === true ?
                        <Tooltip title="Click for more..." /> : null
                } */}
            </span>
        )
    }

    componentDidMount() {
        // console.log(this)
    }


    onClickHero = () => {
        APIs.GET_CHARACTER(this.state.id, (response) => {
            this.setState({ series: [...response.series.items] });
            this.setState({ stories: [...response.stories.items] });
            this.setState({ publicUrls: [...response.urls] });
            this.handleClickOpen();
        });
    }

    handleClose = () => {
        this.setState({ dialogOn: false })
    }

    handleClickOpen = () => {
        this.setState({ dialogOn: true });
    };

    // openTooltip = () => {
    //     this.setState({tooltipOn: true});
    // }

    // closeTooltip = () => {
    //     this.setState({tooltipOn: false});
    // }
}

export default Card;