import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    progress: {
        margin: theme.spacing(2)
    },
}));

const Spinner = (props) => {
    const classes = useStyles();

    const style = {
        bottom: {
            width: '100%',
            height: 140,
            paddingBottom: 55,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        full: {
            width: '100%',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        top: {
            width: '100%',
            height: 140,
            paddingTop: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    const setStyleByType = (type) => {
        switch (type) {
            case 'top':
                return style.top;
            case 'bottom':
                return style.bottom;
            case 'full':
                return style.full;
            default:
                return style.top;
        }
    }

    return (
        <div style={setStyleByType(props.type)}>
            <CircularProgress className={classes.progress} />
        </div>
    );



}

export default Spinner;