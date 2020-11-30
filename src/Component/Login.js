import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import '../Style/LoginComponent.css';
import { Redirect } from "react-router-dom";

export default class Login extends React.Component {
  constructor() {
    super();
    this.username = '';
    this.password = '';
    this.err = '';
  }

  render() {
    const st = this.props;

    if (st.err === 'err') {
        this.err = 'Username hoặc Password không đúng!!!';
    }
    if (st.token !== ''){
        return <Redirect to="/" />;
    }

    return (
      <div className="loginLayout">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Card className="paper">
            <form className="form" noValidate>
                <h1>LOGIN</h1>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={(event) => {
                  this.username = event.target.value;
                }}
                id="username"
                label="Username"
                name="username"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={(event) => {
                  this.password = event.target.value;
                }}
                name="password"
                label="Password"
                type="password"
                id="password"
              />

              <div className="Error">{this.err}</div>
              <Button
                fullWidth
                variant="contained"
                style={{marginTop: '10px', marginBottom: '10px'}}
                color="secondary"
                onClick={(event) => {
                  event.preventDefault();

                  st.login(this.username, this.password);
                }}
              >
                Sign In
              </Button>
              <Grid className="footer-login" container>
                <Grid item>
                  <Link href="/register" variant="body2">
                    Don&apos;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Container>
      </div>
    );
  }
}
