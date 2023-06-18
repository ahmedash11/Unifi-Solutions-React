import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { createUser } from "../services/userServices";

const useStyles = makeStyles({
  card: {
    display: "flex",
    gap: "10px",
  },
  title: {
    marginBottom: 16,
    fontSize: 20,
  },
  textField: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});

function CreateUser({ fetchUsers }) {
  const classes = useStyles();
  const defaultUserData = {
    name: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(defaultUserData);

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser(userData)
      .then(() => {
        fetchUsers();
        setUserData(defaultUserData);
      })
      .catch((err) => console.error(err));
    // submit the form data to the server or perform any other action
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} variant="h5">
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            className={classes.textField}
            name="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            className={classes.textField}
            name="email"
            value={userData.email}
            type="email"
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            className={classes.textField}
            name="password"
            value={userData.password}
            type="password"
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Create
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default CreateUser;
