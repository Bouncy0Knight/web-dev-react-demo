import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Priyanshu Alluri'
  let variable = "";
  if (name === "Camden"){
    variable = (<p>This is camden</p>);
  }
  let nameString = name === "Ben" ?"this i ben!" :"this is not ben";

  const buttonClick = () => {
    console.log("I clicked the button");
  }

  const onInputChange = (event) => {
    console.log(event)
    console.log(event.target.value);
  }

  const list = [1,2,3,4];

  const listPlusOne = list.map(number => {
    return number + 1;

  const siblings = ["Kelsie", "Leland"];

  const siblingsMap = siblings.map((sibling) => {
    return <p> This siblings name is {sibling} </p>
});


})
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hi, my name is {name} </p>
        {nameString}
        {
          console.log(listPlusOne)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> <button onClick = {buttonClick}>Click me</button>
        <input type ="text" onChange = {onInputChange} />
      </header>
    </div>
  );
}

export default App;
