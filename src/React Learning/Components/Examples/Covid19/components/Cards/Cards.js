import CountUp from "react-countup";
import cx from "classnames";

import React from "react";
import styles from "./Cards.module.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  console.log(confirmed);
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active cases of Covid19
            </Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=","
              />
            </Typography>
<<<<<<< HEAD
            <Typography color="textSecondary">Real date</Typography>
            <Typography variant="body2">
              Number of recoveries from Covid19
            </Typography>
=======
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of recoveries from Covid19</Typography>
>>>>>>> 978a607443fde9b8a5c16f85e87382ed38ad4896
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=","
              />
            </Typography>
<<<<<<< HEAD
            <Typography color="textSecondary">Real date</Typography>
            <Typography variant="body2">
              Number of deaths caused by Covid19
            </Typography>
=======
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of deaths caused by Covid19</Typography>
>>>>>>> 978a607443fde9b8a5c16f85e87382ed38ad4896
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
