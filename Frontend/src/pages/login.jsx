import React, { useEffect } from 'react';
import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  rem,
} from '@mantine/core';
import HeaderComponent from '../components/Header';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(900),
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700280546.jpg)',
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[3]
    }`,
    minHeight: rem(900),
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

function Login() {
  const { classes } = useStyles();

  useEffect(() => {
    // Add this code to hide the scroll bar when the component mounts
    document.body.style.overflow = 'hidden';

    // Clean up the effect to reset the body overflow when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
  <div>
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={30}>
          Welcome back to Essento!
        </Title>
        <div style={{ marginTop: '20px' }} />
        <a href="/home" style={{ textDecoration: 'none' }}>
          <h1>
            <Text ta="center" color="blue">
              Homepage
            </Text>
          </h1>
        </a>
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          size="md"
          />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don't have an account?{' '}
          <a
            href="/form"
            className={classes.link}
            style={{ marginLeft: '1px' }}
            >
            <Button>Register Here</Button>
          </a>
        </Text>
        <div style={{ marginTop: '20px' }} />
        <Text ta="center">
          Forgot Your Password?{' '}
          <a href="/forgotpassword" style={{ marginLeft: '5px' }}>
            <Button>Click Here!</Button>
          </a>
        </Text>
      </Paper>
    </div>
  </div>
  );
}

export default Login;
