import React from 'react'
import { GamesNavBar, FlipACoin } from 'components';
import { Grid, Paper } from '@material-ui/core';


const FlipACoinPageComponent = () => {
    return (
        <Grid container>
            <GamesNavBar />
            <Grid container justify="center" align="center">
                <Paper>
                    <FlipACoin />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default FlipACoinPageComponent;
