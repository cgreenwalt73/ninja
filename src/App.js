import './App.css';

class Ninja {

  constructor(name, health) {
    this.name=name;
    this.health=health;
    this.speed=3;
    this.strength=3;
  }

  sayName() {
    console.log(this.name);
  }

  showStats() {
    return(
      <div>
        <h1>Name: {this.name}</h1>
        <p>Strength: {this.strength}</p>
        <p>Speed: {this.speed}</p>
        <p>Health: {this.health}</p>
      </div>
    )
  }

  drinkSake() {
    this.health += 10;
  }
}

const naruto = new Ninja("Naruto", 100) 

function App() {
  return (
    <div className="App">
      {naruto.drinkSake()}
      {naruto.showStats()}
      {naruto.sayName()}
    </div>
  );
}

export default App;
