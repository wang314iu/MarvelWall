import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Slide from '@material-ui/core/Slide';


const style = {
    centerize: {
        justifyContent: "center"
    }
}

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const CustomDialog = (props) => {
    return (
        <Dialog
            TransitionComponent={Transition}
            open={props.dialogOn}
            onClose={props.handleClose}
            scroll='body'
            aria-labelledby="scroll-dialog-title"
            style={{opacity: 0.8}}
        >
            <DialogTitle id="scroll-dialog-title">{props.title}</DialogTitle>

            <DialogContent dividers={true} style={{ minWidth: 400, textAlign: 'center' }}>
                <List >
                    <h5>Appears in Series:</h5>
                    {
                        props.series.length > 0 ?
                            props.series.map((item, index) => {
                                return (
                                    <ListItem
                                        key={index}
                                        href={item.resourceURI}
                                        style={style.centerize}
                                    >
                                        {item.name}
                                    </ListItem >
                                );
                            }) : <ListItem style={style.centerize}>  Not found. </ListItem >
                    }
                </List>
                <List>
                    <h5>Appears in Stories:</h5>
                    {
                        props.stories.length > 0 ?
                            props.stories.map((item, index) => {
                                return (
                                    <ListItem
                                        key={index}
                                        href={item.resourceURI}
                                        style={style.centerize}
                                    >
                                        {item.name}
                                    </ListItem >
                                )
                            }) : <ListItem style={style.centerize}> Not found. </ListItem>
                    }
                </List>
                <List>
                    <h5>Official Links:</h5>
                    {
                        props.publicUrls.length > 0 ?
                            props.publicUrls.map((item, index) => {
                                return (
                                    <ListItem key={index} style={style.centerize} >
                                        <a href={item.url}> {item.type.toUpperCase()} </a>
                                    </ListItem >
                                );
                            }) : <ListItem style={style.centerize}> Not found. </ListItem>
                    }
                </List>
            </DialogContent>

            <DialogActions>
                <Button onClick={props.handleClose} color="primary"> Close  </Button>
            </DialogActions>
        </Dialog>
    );
}

export default CustomDialog;