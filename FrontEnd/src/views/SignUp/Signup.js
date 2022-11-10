import React, { useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Login from "@material-ui/icons/LockOpen";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomInput from "components/CustomInput/CustomInput.js";
import BasicDatePicker from "components/DatePicker/DatePicker.js";
import Link from '@mui/material/Link';
import Checkbox from '@mui/material/Checkbox';

export default function SignUp() {
    //const link = <a href={this.makeHref('https://www.fifa.com/es/terms-of-service')}>Terms and Conditions</a>;
    const [birthday, setIDate] = useState(null);
    const handleIDateChange = (event) => {
        setIDate(event);
    };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email-address'),
      password: data.get('password'),
    });
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
            Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
            <CustomInput
            labelText="Password"
            type="Password"
            id="password"
            formControlProps={{
                fullWidth: true,
            }}
            />
            <CustomInput
            labelText="First Name"
            type="text"
            id="first-name"
            formControlProps={{
                fullWidth: true,
            }}
            />
            <CustomInput
            labelText="Last Name"
            type="text"
            id="last-name"
            formControlProps={{
                fullWidth: true,
            }}
            />
            <CustomInput
            labelText="Country"
            id="country"
            type="text"
            formControlProps={{
                fullWidth: true,
            }}
            />
            <BasicDatePicker
            labelText="Birthday"
            id="birthday"
            value={birthday}
            onChange={(date) => handleIDateChange(date)}
            formControlProps={{
                fullWidth: true,
            }}
            />
            <Checkbox value="TnC" color="primary"/>
            <Typography
            variant="body2" color="text.secondary" align="center">{"I agree to the "}
                <Link href="https://www.fifa.com/es/terms-of-service">
                    Terms and Conditions
                </Link>
            </Typography>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Sign In
            </Button>
        </Box>
    </Box>
  </Container>
  );
}