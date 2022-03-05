import "./Greetings.css";

function Greetings() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 16) {
    greeting = "Good Afternoon";
    cssStyle.color = "Orange";
  } else if (currDate >= 16 && currDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "Blue";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Black";
  }

  return (
    <div className="greet">
      <h1 style={{ alignItems: "center" }}>
        Hello ,<span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  );
}

export default Greetings;
