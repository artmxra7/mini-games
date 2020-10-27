import React from 'react'
import { GamesNavBar, MatchTheCardPair } from 'components';
import { Grid, Paper } from '@material-ui/core';


const MatchTheCardPairComponent = () => {
    return (
        <Grid container>
            <GamesNavBar />
            <Grid container justify="center" align="center">
                <Paper>
                    <MatchTheCardPair />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default MatchTheCardPairComponent;
