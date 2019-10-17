import React from 'react';

const style = {
    container: {
        width: '100%',
        height: 50,
        position: 'fixed',
        left: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.9)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
    }
}

const Footer = (props) => {
    return (
        <footer style={style.container}>
            <span style={style.content}> some right reserve text. </span>
        </footer>
    )
}

export default Footer;