import React, {useState, useEffect} from 'react';
import {Card, CardContent , Typography, Grid} from '@material-ui/core';
import styles from './NigeriaCard.module.css';
import Countup from 'react-countup';
import cx from 'classnames';


const NigeriaCard = ({ Nig: {confirmed, recovered, deaths, lastUpdate} })=>{

    if(!confirmed){
        return "Loading...."
    }
    
    return (
        <div className={styles.container}  data-aos={"fade-up"}>
            <div className={styles.header}>
                <p>Updates in Nigeria</p>
            </div>
            <Grid container spacing={3} justify="center">
                <Grid  item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)} >
                    <CardContent className={styles.box}>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <Countup
                              start={0} 
                              end={confirmed.value} 
                              duration={2.5}
                              seperator="," />
                            </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Active cases of covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card}  xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                    <CardContent  className={styles.box}>
                        <Typography color="textSecondary" gutterBottom>recovered</Typography>
                        <Typography variant="h5">
                            <Countup
                              start={0} 
                              end={recovered.value} 
                              duration={2.5}
                              seperator="," />
                            </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from covid 19</Typography>
                    </CardContent>
                </Grid>
                <Grid  item component={Card}  xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                    <CardContent  className={styles.box}>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <Countup
                              start={0} 
                              end={deaths.value} 
                              duration={2.5}
                              seperator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused by covid 19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default NigeriaCard