import "./Clock.css";
import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Clock = (props) => {
  const [timerDays, setTimerDays] = useState(); //timer
  const [timerHours, settimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerSeconds, settimerSeconds] = useState();

  let interval;

  const startTimer = () => {
    const countDownDate = new Date("Mar 9,2022").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));

      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        settimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <Fragment>
      <section className="timer-container">
        <h1 style={{ color: "white" }}>CountDown Timer</h1>
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};
Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;
