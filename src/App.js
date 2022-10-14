import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/header/Header';
import { Tabs } from './components/tabs/Tabs';
import { MainDiv } from './style/Style';
import { Search } from './pages/Search';
import { Collection } from './pages/Collection';

function App() {
  return (
    <Router>
      <Header />
      <MainDiv>
        <Tabs />
        <Routes>
          <Route path='/collection' element={(
            <Collection />
            )} />
          <Route path='/*' element={(
              <Search />
            )} />
        </Routes>
      </MainDiv>
    </Router>
  );
}

export default App;
