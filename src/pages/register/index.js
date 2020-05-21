import React from 'react';
import Button from '@material-ui/core/Button';
import useStyle from './styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom';

function Register() {
    const clasess = useStyle();
    return <Container maxWidth='xs'>
        <Paper className={clasess.paper}>
            <Typography variant="h5" component="h1" className={clasess.title}>Create New Account</Typography>
            <form>
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    margin="normal"
                    label="Email Address"
                    fullWidth
                    required
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    margin="normal"
                    label="Password"
                    fullWidth
                    required
                />
                <TextField
                    id="password2"
                    name="password2"
                    type="password"
                    margin="normal"
                    label="Comfirm Password"
                    fullWidth
                    required
                />
                <Grid container className={clasess.buttons}>
                    <Grid item xs>
                        <Button type="submit" variant="contained"
                            color="primary" size="large">Register</Button>
                    </Grid>
                    <Grid item>
                        <Button component={Link} size="large" variant="contained" color="primary" to="/login">Login</Button>
                    </Grid>
                </Grid>
            </form>
        </Paper>
    </Container>
}

export default Register;