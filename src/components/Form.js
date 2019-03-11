import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Email from '../images/email.png'
import Instagram from '../images/instagram.png';
import Whatsapp from '../images/whatsapp.png';
import Grid from '@material-ui/core/Grid';
import styled, { ThemeProvider } from 'styled-components';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme } from '@material-ui/core/styles';
import { palette, spacing, typography} from '@material-ui/system'

const Box = styled.div`${palette}${spacing}${typography}`;

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const styles = theme => ({
   
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      color: 'white',
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
  });
  
class Form extends Component {
    state = {
        name: '',
        age: '',
        multiline: '',
        currency: '',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
  render() {
    const { classes } = this.props;
    return (
        <div>
           <Grid container justify="center" alignItems="center" id="contact">
            <Button href="mailto:zealclub1@gmail.com" target='blank'>
              <img src={Email} alt="icon instagram" style={{width:'44px'}}/>    
            </Button>
            <Button href="https://www.instagram.com/zeal.co.id/?utm_source=ig_profile_share&igshid=830zrl7dsipt" target='blank'>
              <img src={Instagram} alt="icon instagram" style={{width:'65px'}}/>
            </Button>
            <Button href="https://api.whatsapp.com/send?phone=6281363788777" target='blank'>
            <img src={Whatsapp} alt="icon instagram" style={{width:'50px'}}/>
            </Button>
          </Grid>
          
          <NoSsr >
          <ThemeProvider theme={theme}>
          <Box
               color="primary.main"
               bgcolor="background.paper"
               width="100%"
               fontFamily="h6.fontFamily"
               fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' }}
               p={{ xs: 2, sm: 3, md: 4 }}
               marginTop={'50px'}
               marginButtom={'50px'}
             >
              <form className={classes.container} noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />
              </form>
              <Button variant="contained" color="default">
                Subcribe
                </Button>
          </Box>
          </ThemeProvider>
          </NoSsr>
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);


