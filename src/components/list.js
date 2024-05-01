import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  Avatar,
  Typography,
  Box,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 100,
    flexGrow: 1,
  },
  paper: {
    height: 220,
    width: 340,
    backgroundColor: "#ebebeb",
  },
  avatarImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
}));

export default function List({ userAvatar, firstName, lastName }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item className={classes.root} xs={12}>
        <Grid container justify="center" spacing={2}>
          <Grid key={1} item>
            <Paper className={classes.paper} elevation={2}>
              <Grid container justify="center">
                <Avatar
                  alt="User"
                  className={classes.avatarImage}
                  src={userAvatar}
                />
                <Typography variant="p">
                  Name: {firstName} {lastName}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Box className="gg">
          <Typography style={{ fontSize: "40px" }}>User Details:</Typography>
          <Typography> Email: s.anvarov@newuu.uz </Typography>
          <Typography>Nationality: alt+f4 </Typography>
        </Box>
        <Box>
          <Button variant="outlined" style={{background:"red", color:"white"}}>Delete</Button>
          <Button variant="contained" style={{background:"blue" ,color:"white"}}>Send</Button>
        </Box>
      </Grid>
    </Grid>
  );
}
