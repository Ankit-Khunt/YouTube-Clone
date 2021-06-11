
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Video from './Video';
import Searchbar from './Searchbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    //BEM naming convertion 
    <div className="app">
      <Router>
      <Header/>
        <Switch>
        <Route path="/search/:searchTerm">
          <div className="app__page">
      
           <Sidebar />
           <Searchbar/>
            

          </div>
            
        
           

          </Route>
          <Route path="/search">
          <div className="app__page">
      
           <Sidebar />
           <Searchbar/>
            

          </div>
            
        
           

          </Route>
          <Route path="/">
            
            <div className="app__page">
      
             <Sidebar />
             <Video />

            </div>
    
            

          </Route>
          
        </Switch>
      </Router>
     
     
     


     
      
    </div>
  );
}

export default App;
