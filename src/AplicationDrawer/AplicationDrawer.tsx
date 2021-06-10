import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Search from "../screens/Search";
  
  const useStyles = makeStyles(() => ({
	pageContainer: {
		minHeight: '100%',
	},
	RoutingElements: {
		overflow: 'auto',
	},
	AplicationBar: {
		position: 'relative',
		marginBottom: '-64px',
		clear: 'both',
	},
}));

const AplicationDrawer = ()  => {
    const classes = useStyles();
    return (
        <Router>
            <div className={classes.pageContainer}>
                <div className={classes.RoutingElements}>
                    <Switch>
                        <Route path='/' exact component={Search} />
                    </Switch>  
                </div>
            </div>
        </Router>
  );
};

export default AplicationDrawer;
