import React from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Login from "@material-ui/icons/LockOpen";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomInput from "components/CustomInput/CustomInput.js";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { useHistory } from "react-router-dom";

export default function SignUp() {
  
  const history = useHistory();
  const handleClick = () => {
    console.log("XD");
    history.push("/admin/dashboard");
  };

  return (
  <Container component="main" maxWidth="xs">
    <Box
      sx={{
        marginTop: "auto",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <Login/>
        </Avatar>
        <Typography component="h1" variant="h5">
            LogIn
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <CustomInput
          labelText="Username"
          id="username"
          type="text"
          formControlProps={{
              fullWidth: true,
          }}
          />
          <CustomInput
          labelText="Email address"
          id="email-address"
          type="email"
          formControlProps={{
              fullWidth: true,
          }}
          />
          <Button
          type="submit"
          fullWidth
          onClick={handleClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}>
          LogIn
          </Button>
        </Box>
        <Grid container>
          <Grid item>
            <Link href="/auth/signup-page" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
    </Box>
  </Container>
  );
}