import React, { Component } from 'react';
import logo from '../images/logo.png';
import { withStyles } from '@material-ui/core/styles';
import Email from '@material-ui/icons/Email'
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  font: {
    fontSize: '25px',
  }
});

class Isi extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
        <img src={logo} style={{padding:'8rem'}}  className="App-logo" alt="logo" />
        <p className="font_0">
          UNDER 
          <br></br>
          CONSTRUCTION
        </p>
        <IconButton color="rgb(39, 28, 28)" className={classes.font}>
          <Email />
        </IconButton>
        
        </div>

    );
  }
}

export default withStyles(styles)(Isi);


