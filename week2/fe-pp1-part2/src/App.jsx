import "./App.css";
import CreditCard from "./CreditCard.jsx";
import BoxColor from "./BoxColor.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h2> Credit Card</h2>
      <div className="CreditCardContainer">
        <CreditCard
          type="src/assets/images/visa.png"
          number="0123456789018875"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="src/assets/images/master.png"
          number="0123456789010993"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="src/assets/images/visa.png"
          number="0123456789016982"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>
      <h2> BoxColor</h2>

      <BoxColor r={255} g={0} b={0} />
      <BoxColor r={128} g={255} b={0} />

    </div>
  );
}

export default App;
