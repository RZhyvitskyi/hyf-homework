import './App.css';
import Search from './components/Search';
import SearchProvider from './components/SearchContext';

function App() {
  return (
    <>
      <SearchProvider>
        <Search />
      </SearchProvider>
    </>
  );
}

export default App;
