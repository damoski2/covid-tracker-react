import React from 'react';
import {Card, CardContent , Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import Countup from 'react-countup';
import cx from 'classnames';

const Cards =({ data:{confirmed,recovered,deaths,lastUpdate} })=>{

   var arr = [
       [confirmed,styles.infected,'Infected'],
       [recovered ,styles.recovered,'Recovered'],
       [deaths,styles.deaths,'Deaths'],
   ]
    
if(!confirmed){
    return <div className={styles.loader}></div>
}
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                {arr.map(elem=>{
                    return (
                        <Grid  item component={Card} xs={12} md={3} className={cx(styles.card,elem[1])}>
                        <CardContent className={styles.box}>
                            <Typography color="textSecondary" gutterBottom>{elem[2]}</Typography>
                            <Typography variant="h5">
                                <Countup
                                  start={0} 
                                  end={elem[0].value} 
                                  duration={2.5}
                                  separator="," />
                                </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of {elem[2]} cases of covid 19</Typography>
                        </CardContent>
                    </Grid>
                    )
                })}          
            </Grid>
        </div>
    )
}

export default Cards