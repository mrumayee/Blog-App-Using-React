import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/create">
            <Create></Create>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
