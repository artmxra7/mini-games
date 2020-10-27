import React from 'react'
import { GamesNavBar, Jackpot } from 'components';
import { Grid, Paper } from '@material-ui/core';


const JackpotPageComponent = () => {
    return (
        <Grid container>
            <GamesNavBar />
            <Grid container justify="center" align="center">
                <Paper>
                    <Jackpot />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default JackpotPageComponent;
