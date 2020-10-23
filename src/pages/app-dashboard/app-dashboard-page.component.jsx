import React from 'react'
import { GamesNavBar } from 'components';
import { Grid, Typography, Paper } from '@material-ui/core';

const AppDashboardPageComponent = () => {
    return (
        <Grid container>
            <GamesNavBar />
            <Grid container justify="center" align="center">
                <Paper>
                    <Typography>In progress</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default AppDashboardPageComponent;
