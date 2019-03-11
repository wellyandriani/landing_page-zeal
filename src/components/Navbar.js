

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Home from '@material-ui/icons/Home';
import Contact from '@material-ui/icons/ContactPhone';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import logo from '../images/logo.png';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  font: {
    fontSize: '13px',
  },
  appbar:{
    top: 0,
    bottom: 'auto',
    
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      marginLeft: '50px',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    const renderMobileMenu = (
      
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
        
      >
        
        <MenuItem onClick={this.handleProfileMenuOpen} >
          <Button color="inherit"  href="#home">
              <Home />
              <p>Home</p>
          </Button>
        </MenuItem>

        <MenuItem onClick={this.handleProfileMenuOpen} >
          <Button color="inherit" href="#contact" >
              <Contact />
              <p>Contact</p>
          </Button>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="inherit" >
          <Toolbar className="container">
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          <img src={logo} alt="logo" style={{width:'48px', marginTop:'7px'}}/>
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Button color="black" className={classes.font} href="#home">
                  <Home /> 
                  <p>Home</p>
              </Button>
              <Button color="black" className={classes.font} href="#contact">
                  <Contact /> 
                  <p>Contact</p>
              </Button>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="black">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default withStyles(styles)(PrimarySearchAppBar);