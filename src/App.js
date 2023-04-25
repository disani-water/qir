import './App.css';
import {Quaking} from "./test.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const tree = {
title: 'trees',
deciduous: 'https://www.google.com/search?q=deciduous&rlz=1C1SQJL_enUS919US919&oq=deciduous&aqs=chrome..69i57j0i433i512l5j0i512j0i433i512l2j0i433i457i512.14936j1j7&sourceid=chrome&ie=UTF-8',
img: 'https://media.istockphoto.com/id/155097073/photo/old-beech-tree-in-summer.jpg?s=612x612&w=0&k=20&c=cTuBEG1nIVC9FAlwSpIAbUxUc_QSUgUzjWDFzYA_8ek=',
};

function App() {
  return (
 <>

  <body> 
 <div>
 <Container className='c'>
      <Row> 
       <Col> <h1> trees! </h1> </Col>
      </Row>
      <Row>
      <p > I like trees so I make website to tell about trees</p>
      </Row>
 </Container>
</div>

 
    <img src= {tree.img}/>
    <h1> Quaking Aspen </h1>
    <p> Populus tremuloides also know as the Quaking Aspen is an <a href={tree.deciduous}>deciduous</a> tree native to North America. 
    The Quaking Aspen, could also be called the trembling aspens, get their name from their leaves.
    Flat leaves attach to branches with lengthy stalks called petioles, which quake or tremble in light breezes.
    The bark layer of quaking aspens carries out photosynthesis, a task usually reserved for tree leaves.
    n terms of height, quaking aspens are relatively small. They are usually less than 50 feet (15 meters) tall.
    Quaking aspens can reproduce via pollen and eggs that are contained in hanging flowers called catkins. However, it’s much more common for them to reproduce asexually by sending up new stems from a single root system. 
    A grove of quaking aspens in Utah is the largest known living thing on Earth. Nearly 50,000 stems protrude from a single root system. The entire organism covers over 100 acres and weighs 6,000 tons.
    </p>

    <h1> Bald cypress</h1>
    <p> The russet-red fall color of its lacy needles is one of its outstanding characteristics. Hardy and tough, this tree will adapt to a wide range of soil types, whether wet, dry, or swampy.
    native to the Midwest, is often found in groupings in parks and larger spaces, along streets, and around lakes.
    they get the name “bald” cypress because they drop their leaves so early in the season. Their fall colors are tan, cinnamon, and fiery orange. The bark is brown or gray with a stringy texture.
    The bald cypress is the state tree of Louisiana.
    Bald cypresses are slow-growing, long-lived trees that regularly reach up to 600 years in age.
    </p>
    <h1> Ponderosa pine </h1>
    <p> Pinus ponderosa is one of the Southwest's tallest trees in many parts of its range, growing to incredible heights of over 200 feet, with huge trunks 3-4 feet
    s. Ponderosa Pines are easily recognized by their tall, straight, thick trunks, clad in scaled, rusty-orange bark that has split into big plates. One can easily identify some trees by smelling their bark. Ponderosa Pine bark smells like vanilla or butterscotch.
    The 4-8 inch long evergreen needles, thick and flexible, three to a bundle, droop gracefully from their branches. Large trees live for 500 or more years.
    Native Americans ate the seeds of this tree either raw or made into a bread and used the pitch as adhesive and waterproofing agent for canoes, baskets and tents. Ponderosa Pine lumber is highly valued for constructing cabinets, Southwestern-style furniture and house trim.
    feefaf</p>
 </body>   
 </>
  )
};

export default App;
