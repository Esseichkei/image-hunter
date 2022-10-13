import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Header } from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path='/lol' element={(
          <p>
            lol
          </p>)} />
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
