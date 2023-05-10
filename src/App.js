import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import MovieList from './components/MovieList';
import { SkeletonTheme } from 'react-loading-skeleton';
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  return (
    <div className="App">  
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
     <Router>
      <Header/>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path='movie/:movieid' element={<MovieList/>}></Route>
        {/* <Route exact path='movies/:movietype' element={<MovieList/>}></Route> */}
        <Route exact path='/*' element={<h1>Error page</h1>}></Route>
      </Routes>
     </Router>
     </SkeletonTheme> 
    </div>
  
  );
}

export default App;