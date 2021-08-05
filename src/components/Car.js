import React from 'react'
import cars from '../cars.json'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

// import material ui components here //
// Container, Paper, Chip //

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.2),
      },
    }, paper: {
        marginTop: '150px',
        width: '550px',
        height: '400px',
        paddingLeft: '10%',
        paddingRight: '10%'
    }, type: {
        width: '100%',
        height: '100%',
        paddingTop: '15%'
    }
  }));

const Car = (props) => {
    const classes = useStyles();
    let id = props.match.params.id;
    id--;

    let carDetails = Object.entries(cars[id]);

    carDetails.map((element) => {
        console.log(element[0])
        return (
            <h1>hello</h1>
        )
    })
    
    return (
    <React.Fragment>
    <CssBaseline />
        <Container maxWidth="sm">
            
            <Paper elevation={2} className={classes.paper}>
                <Typography className={classes.type} component="div">
                    <h2>{cars[id].Name}</h2>
                    <div className={classes.root}>
                        {carDetails.map((element) => {
                            return (
                                <Chip label={element[0] + ': ' + element[1]}/>
                            )
                        })}
                    </div>
                </Typography>
            </Paper>
                
            
        </Container>
    </React.Fragment>
    )
}

export default Car