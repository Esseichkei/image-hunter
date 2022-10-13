import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/header/Header';
import { Tabs } from './components/tabs/Tabs';

function App() {
  return (
    <Router>
      <Header />
      <Tabs />
      <Routes>
      <Route path='/lol' element={(
          <p>lol</p>)} />
        <Route path='/lmao' element={(
          <p>
            lmao, even
          </p>)} />
        <Route path='/' element={(
          <p>
            basepath
          </p>)} />
      </Routes>
    </Router>
  );
}

export default App;
