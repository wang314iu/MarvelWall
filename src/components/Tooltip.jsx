import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';

const style = {
    tootip: {
        position: 'relative',
        float: 'left',
        top: 0,
        right: 0
    },
    button: {
    }
}

const CardTooltip = (props) => {
    return (
        // <Tooltip
        //     title={props.title}
        //     aria-label={props.title}
        //     style={style.tootip}>
        //     <span> {props.title}</span>
        // </Tooltip>

        <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title="Disabled tooltip">
            <button className="btn btn-primary" style={{pointerEvents : 'none'}} type="button" disabled>Disabled button</button>
        </span >
    );
}


export default CardTooltip;