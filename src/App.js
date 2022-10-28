import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Articles from './components/Articles';
import Article01 from './components/Article01';
import Article02 from './components/Article02';
import Article03 from './components/Article03';
import Users from './components/Users';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import About from './components/About';

const App = () => {
  return (
    <>
      <ErrorBoundary>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Users />} />
              <Route path='about' element={<About />} />
              <Route path='articles' element={<Articles />}>
                <Route path='article01' element={<Article01 />} />
                <Route path='article02' element={<Article02 />} />
                <Route path='article03' element={<Article03 />} />
              </Route>
              <Route path='users' element={<Users />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </Router>
      </ErrorBoundary>
    </>
  );
};

export default App;
