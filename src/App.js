import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Button text="'Cancel'" />
        <Button text="'Sell'" />
        <Button text="'Set Auction'" />
        <Button text="'Delist'" />
        <Button text="'Approve'" />
        <Button text="'Ok'" />
        <Button text="'Create'" />
        {/* 'Cancel','Sell','Set Auction','Delist','Approve','Ok',''Create" */}
      </div>
    </div>
  );
}

export default App;
