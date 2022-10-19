import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './slices/Store';
import { Header } from './components/header/Header';
import { Tabs } from './components/tabs/Tabs';
import { MainDiv } from './style/Style';
import { Search } from './pages/Search';
import { Collection } from './pages/Collection';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <MainDiv>
          <Tabs />
          <Routes>
            <Route path='/collection' element={(
              <Collection />
              )} />
            <Route path='/' element={(
                <Search />
              )} />
            <Route path='/search/:query' element={(
                <Search />
              )} />
          </Routes>
        </MainDiv>
      </Router>
    </Provider>
  );
}

export default App;
