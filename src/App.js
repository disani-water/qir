import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topbutton from './topbutton';
import Nav from'./navbar';
import Bc from './bc'
import Landing from './landingpage';
import Main from './main';
import Oi from './carousel';



function App() {
  return (
    <>
    <Nav/>
    <Landing/>
    <Bc/>
    <Main/>
    <Topbutton/>

    
  
 </>
  )
};

export default App;
