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

class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health=200;
    this.speed=10;
    this.strength=10;
    this.wisdom=10;
  }

  speakWisdom() {
    this.drinkSake();
    console.log('While it is always best to believe in oneself, a little help from others can be a great blessing.')
  }
}

const naruto = new Ninja("Naruto", 100) 
const kakashi = new Sensei("Kakashi") 

function App() {
  return (
    <div className="App">
      {naruto.drinkSake()}
      {naruto.showStats()}
      {kakashi.showStats()}
      {kakashi.drinkSake()}
      {kakashi.showStats()}
    </div>
  );
}

export default App;
