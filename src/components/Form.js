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
      justify: 'center',
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
            <Button href="mailto:zealclub1@gmail.com" target='_blank'>
              <img src={Email} alt="icon email" style={{width:'44px'}}/>    
            </Button>
            <Button href="https://www.instagram.com/zealindonesia/" target='_blank'>
              <img src={Instagram} alt="icon instagram" style={{width:'65px'}}/>
            </Button>
            <Button href="https://api.whatsapp.com/send?phone=6281363788777" target='_blank'>
            <img src={Whatsapp} alt="icon whatsapp" style={{width:'50px'}}/>
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
              <form method="POST" action="https://formspree.io/zealclub1@gmail.com" className={classes.container} noValidate autoComplete="off" style={{justifyContent:'center'}}>
                  <TextField type="text"
                    id="name"
                    label="Name"
                    className={classes.textField}
                    name="name"
                    margin="normal"
                    variant="outlined"
                  />

                  <TextField type="email"
                    id="email"
                    label="Email"
                    className={classes.textField}
                    
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                  />
                <br></br>
                  <Button type="submit" variant="contained" color="default" style={{width:'80%'}}>
                  Subcribe
                  </Button>
                </form>
               
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


