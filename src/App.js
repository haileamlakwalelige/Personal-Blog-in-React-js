import React,{useState} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog';
import Pages from './components/pages/Pages';
import About from './components/pages/About';
import Detail from './components/pages/detail/Detail';
import Header from './components/header/Header';
import Login from './components/account/Login';
import Register from './components/account/Register';



function App() {
  const [user, setUser]=useState(false);
  return (
    < >
    <Header user={user} setUser={setUser} />
      <Switch>
      <Route exact path="/detail/:id"  component={Detail} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/blog"  component={Blog} />
        <Route exact path="/contact"  component={Contact} />
        <Route exact path="/pages"  component={Pages} />
        <Route exact path="/login"  component={Login} ><Login setUser={setUser}/></Route>
        <Route exact path="/register" component={Register} ><Register setUser={setUser}/></Route>
      </Switch>  
   </>
  );
}

export default App;
