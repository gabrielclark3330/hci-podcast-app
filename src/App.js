import './App.css';
import { GenreInputField} from './components/SearchBar.js';
import { PodcastApp } from './components/AppVis.js';

function App() {
  return (
    <div className="App">
      <GenreInputField/>
      <PodcastApp/>
    </div>
  );
}

export default App;
