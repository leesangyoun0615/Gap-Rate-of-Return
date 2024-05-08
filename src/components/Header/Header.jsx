import logo from "../../assets/calcul.png";
import "../Header/Header.css";

export default function Header({ selectedTopic }) {
  let Description;

  if (selectedTopic === "PBR") {
    Description = (
      <span className="text-container">
        <p id="description">
          Expected rate of return is the 'discount rate' and 'the gap between
          the value applied at that discount rate and the current price' <br />
          <span className="targetValue">
            ex. DiscountRate = 10% , ROE = 15% <br /> Expected sustainability
            period = 7years , <br />
            appropriate P/B ratio =1.37
            <br />{" "}
          </span>
          <span className="theReslut">
            Gap Rate of Return = appropriate P/B ratio - market's P/B ratio
          </span>
        </p>
      </span>
    );
  } else if (selectedTopic === "Annual Yield") {
    Description = (
      <span className="text-container">
        <p id="description">
          Expected rate of return is the 'discount rate' and 'the gap between
          the value applied at that discount rate and the current price' <br />
          <span className="targetValue">
            ex. PBR = 1.05, ROE = 15% <br /> Expected sustainability period =
            7years , <br />
            AnnualYield = 14.2%
            <br />{" "}
          </span>
          <span className="theReslut">
            By inverting PBR, you can find the average annual rate of return.
          </span>
        </p>
      </span>
    );
  }

  return (
    <header id="header">
      <h1>Gap Rate of Return</h1>
      <div className="image-container">
        <img src={logo} alt="logic" />
        {Description}
      </div>
    </header>
  );
}
