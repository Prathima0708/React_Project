import {
  Container,
  createTheme,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { AppBar, Toolbar } from "@mui/material";
import React from "react";
const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
const Header = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Crypto Hunter
              </Typography>
              <Select
                variant="outlined"
                style={{ width: 100, height: 40, marginLeft: 15 }}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </>
  );
};

export default Header;
