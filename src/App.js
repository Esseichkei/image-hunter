import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <p>router</p>
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
