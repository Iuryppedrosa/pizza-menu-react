import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaDados from "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaDados;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu!</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choos from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza, index) => (
              <Pizza key={index} myObjeto={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, no pizzas available at the moment.</p>
      )}
    </main>
  );
}
function Pizza({ myObjeto }) {
  return (
    <li className={`pizza ${myObjeto.soldOut ? "sold-out" : ""}`}>
      <img src={myObjeto.photoName} alt={myObjeto.name} />
      <div>
        <h3>{myObjeto.name}</h3>
        <p>{myObjeto.ingredients}</p>
        <span>{myObjeto.soldOut ? "SOULD OUT" : myObjeto.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const date = new Date().getHours();
  const openHour = 9;
  const closeHour = 22;
  const isOpen = date >= openHour && date < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <Order timeClose={closeHour} timeOpen={openHour} />
      ) : (
        <div className="order">
          <p>
            We are closed. We open at {openHour} and close at {closeHour}
          </p>
          <button className="btn">Booked order!</button>
        </div>
      )}
    </footer>
  );
}

function Order({ timeClose, timeOpen }) {
  return (
    <div className="order">
      <p>We are open until {timeClose}.</p>
      <button className="btn">Order Now!</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // StrictMode is a tool for highlighting potential problems in an application.
  //Like Fragment, StrictMode does not render any visible UI.
  //It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
