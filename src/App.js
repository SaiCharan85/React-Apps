import Navbar1 from './Navbar1';
import  { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './TextBox';
import './Alert';
import './About';
import './App.css';
import TextBox from './TextBox';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
function App() {
  const [mode1, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [text2, setText2] = useState("Enable Dark Mode");

  const showAlert = (message, type) => {
        setAlert({msg: message,
          type: type})
          setTimeout(()=>{setAlert(null);},1500);

          
  }
   const toggleMode = ()=>{
    if(mode1==='light'){
      setMode('dark');
      document.body.style.background = 'linear-gradient(to right,#000428,#004E92) fixed';
      setText2("Enable Light Mode")
      showAlert(': Dark Mode has been enabled', 'Success');
    }
    else{
    setMode('light');
    document.body.style.background = 'linear-gradient(to left,#FFFFFF,#FFFFFF) fixed';
    setText2("Enable Dark Mode")
    showAlert(': Light Mode has been enabled', 'Success')
    }
   }
  return (
   <>
   <Router>

        <Navbar1 title="TEXTUTILS" aboutText="About Us" contactText="Contacts" mode1={mode1} toggleMode={toggleMode} text2 ={text2}/>
        <Alert alert={alert}/>

        <Switch>
          
           <Route exact path="/about"><About key="about"/></Route>
           <Route exact path="/"><TextBox key="text-box" showAlert={showAlert} mode1={mode1}/></Route>

        </Switch>
        </Router>
        </>
  );
}

export default App;
