import jokesData from "./jokesData";
import Joke from "./JokeComp";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
  });

  return <div>{jokeElements}</div>;
}

export default App;
