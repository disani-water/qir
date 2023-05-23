import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row"

const tree = {
    title: 'trees',
    deciduous: 'https://www.google.com/search?q=deciduous&rlz=1C1SQJL_enUS919US919&oq=deciduous&aqs=chrome..69i57j0i433i512l5j0i512j0i433i512l2j0i433i457i512.14936j1j7&sourceid=chrome&ie=UTF-8',
    img: 'https://media.istockphoto.com/id/155097073/photo/old-beech-tree-in-summer.jpg?s=612x612&w=0&k=20&c=cTuBEG1nIVC9FAlwSpIAbUxUc_QSUgUzjWDFzYA_8ek=',
    aspen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_WvDIrrb08WQHBqsxr54Zs3BqLphSx6jUikNLItUErYWHLNZAWXQdT8yTZ9F3Av06sRU&usqp=CAU',
    cypress: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuiBIj5MhVxpDJMfCxnYVY6ha777z2us_Nm_u9qR_wtFp7uwci5l5hB4e1Z27PNBU6UXA&usqp=CAU',
    };

export default function Bc () {
return(
<>


<Container fluid style={{ transform:'translateY(100vh)'}}>
    <Row xl={{offset: 1}}>
    <Col></Col>
        
    <Col xs={{offset:"1"}} style={{ direction:'rtl'}}>
    <hr class="featurette-divider"/>
    <h1 id="bs"> Bald cypress</h1>
    <p> The russet-red fall color of its lacy needles is one of its outstanding characteristics. Hardy and tough, this tree will adapt to a wide range of soil types, whether wet, dry, or swampy.
    native to the Midwest, is often found in groupings in parks and larger spaces, along streets, and around lakes.
    they get the name “bald” cypress because they drop their leaves so early in the season. Their fall colors are tan, cinnamon, and fiery orange. The bark is brown or gray with a stringy texture.
    The bald cypress is the state tree of Louisiana.
    Bald cypresses are slow-growing, long-lived trees that regularly reach up to 600 years in age.
    </p>
    </Col>
 
    </Row>
</Container>

 </>
 
);
};