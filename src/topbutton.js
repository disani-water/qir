import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';


export default function Top1 (){

    const [ topbutton, settopbutton] = useState(false);

    useEffect(() => {  
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100) {
                settopbutton(true)
            } else {
                settopbutton(false)
            }
        })
    }, [])

    const scrollup = () => {
        window.scrollTo({
            top: 0, behavior:"smooth"
        })
    }
    return(
    <div>
       {topbutton && (
        <Button style={{position:'fixed', bottom:"50px", right:'50px', height:'50px', width:'50px', fontSize:"50px"}}
        onClick={scrollup}>
              ^
             </Button>
        
       )}
    </div>
    )
};