import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import spinPrizeWheelLogo from '../../assets/game-thumbnails/spin-prize-wheel.gif';
import jackpot777Logo from '../../assets/game-thumbnails/jackpot777.jpg';
import miniGamesLogo from '../../assets/game-thumbnails/minigames-logo.png';
import matchThePairLogo from '../../assets/game-thumbnails/match-the-pair.gif';
import { CardMedia, Typography } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import browserHistory from 'browserHistory';
import CardContent from '@material-ui/core/CardContent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    userLogo: {
        position: 'relative',
        top: '20px',
        left: '20px'
    },
    miniGamesLogo: {
        padding: '20px 20px 20px 0px',
        backgroundColor: 'violet'
    }
}));

const GamesNavBarComponent = () => {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
        >
            <CardActionArea
                onClick={() => browserHistory.push('/')}
            >
                <CardMedia
                    component="img"
                    alt="MiniGames logo"
                    image={miniGamesLogo}
                    title="MiniGames logo"
                    className={classes.miniGamesLogo}
                />
                <CardContent>
                    <Typography variant="caption" color="textSecondary" component="p">
                        Kill time, Win peace, Lose tension.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Divider />
            <List>
                <ListItem onClick={() => browserHistory.push('/spin')}>
                    <ListItemAvatar>
                        <Avatar alt="Spin a wheel to try your luck" src={spinPrizeWheelLogo} />
                    </ListItemAvatar>
                    <ListItemText primary="Spin a wheel" secondary="Try your luck today" />
                </ListItem>
                <ListItem onClick={() => browserHistory.push('/jackpot')}>
                    <ListItemAvatar>
                        <Avatar alt="Win the Jackpot" src={jackpot777Logo} />
                    </ListItemAvatar>
                    <ListItemText primary="Win the Jackpot" secondary="Win the Jackpot today" />
                </ListItem>
                <ListItem onClick={() => browserHistory.push('/match-the-pair')}>
                    <ListItemAvatar>
                        <Avatar alt="Match the pair" src={matchThePairLogo} />
                    </ListItemAvatar>
                    <ListItemText primary="Match the pair" secondary="Let's do match-making" />
                </ListItem>
            </List>
        </Drawer >
    )
}

export default GamesNavBarComponent;