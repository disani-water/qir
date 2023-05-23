 import './App.css'
 import Stack from'react-bootstrap/Stack';
 import { Link } from 'react-router-dom';


 
 export default function Nav () {
    return(
//the 
<nav>
    <Stack direction="horizontal" gap={4} >
         <a href="#qa"><h4 className='underline'> Quaking Aspen</h4> </a>
        <a href="#bs"> <h4 className="underline"> Bald Cypress</h4> </a>
        <a href="#pp"> <h4 className="underline"> Ponderosa Pine</h4> </a>
    </Stack>
</nav>

    );
 };