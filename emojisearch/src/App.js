import {useState} from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import EmojiList from './components/EmojiList/EmojiList.js';

function App() {

  const [searchValue, setSearchValue] = useState("sad");

  function clearSearch() {
    setSearchValue("");
  }

  return (
    <div className="App">
      <Header search={searchValue}/>
      <button onClick={clearSearch}>Clear search</button>
      <EmojiList search={searchValue}/>
    </div>
  );
}

export default App;
