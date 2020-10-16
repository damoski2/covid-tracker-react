import React, {useEffect} from 'react';
import style from './BodyInfo.module.css';
import img1 from '../../images/body1.jpg';
import img2 from '../../images/body2.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import cx from 'classnames';
import { Grid, Container, CssBaseline, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        marginTop: 30,
        marginBottom: 30,
        boxShadow: '2px 3px 7px 2px #000',
        backgroundColor: '#222',
        color: '#fff',
    },
    contain: {
        flexGrow: 1,
    },
    media: {
        height: 350,
    },
});

const BodyInfo = () => {

    useEffect(()=>{
        Aos.init({
            duration:2000
        });
    })

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={style.intro}>
                <h1>Covid Advices</h1>
            </div>
            <div className={style.border}></div>
            <Grid
                container
                spacing={2}
                direction="row"
                justify="space-evenly"
                alignItems="flex-start"
                className={style.grid}
            >
                <Card className={classes.root} data-aos={'fade-left'}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                            image={img1}
                            title="Wash your Hands"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Wash Your Hands
                    </Typography>
                            <Typography variant="body2" component="p">
                                Washing of Our Hands Helps us to prevent the virus from our onreach, So it is a worldwise advise to frequently wash our hands on regularly to prevent the virus from us, Also Remember to do so in the right  order as it was broadcasted
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={style.button}>
                            Share
                </Button>
                        <Button size="small" color="primary" className={style.button}>
                            Learn More
                </Button>
                    </CardActions>
                </Card>
                <Card className={classes.root} data-aos={'fade-right'}>
                    <CardActionArea>
                        <CardMedia className={classes.media}
                            image={img2}
                            title="Social Distancing"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Social Distancing
                    </Typography>
                            <Typography variant="body2" component="p">
                                Since the Out break of the World-Wide Pandemic Know as the coronavirus or rather Covid 19, it has been advised for all individual to mantain a rule of social distancing of at least 3 feet to Lessen the spread of the virus
                    </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" className={style.button}>
                            Share
                </Button>
                        <Button size="small" color="primary" className={style.button}>
                            Learn More
                </Button>
                    </CardActions>
                </Card>
            </Grid>
        </React.Fragment>

    )
}

export default BodyInfo