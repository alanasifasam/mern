
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';


import MenuAdmin from '../../../componets/menu-admin';
import Footer from '../../../componets/footer-admin';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="javascripty:;">
        Curso Básico MERN
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 35,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  
}));

export default function UsuarioCadastrar() {
  const classes = useStyles();
  return (



    <div className={classes.root}>
      <MenuAdmin/>
       <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
           <Grid item sm ={12}>
           
                   <Paper className={classes.paper}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                          />
                        </Grid>
                     </Grid>
                  </Paper>
                  
                     <Box pt={4}>
                          <Footer/>
                    </Box>

             </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
