import './App.css';

const tree = {
title: 'trees',
imgUrl: 'https://media.istockphoto.com/id/155097073/photo/old-beech-tree-in-summer.jpg?s=612x612&w=0&k=20&c=cTuBEG1nIVC9FAlwSpIAbUxUc_QSUgUzjWDFzYA_8ek=',

};


function App() {
  return (
 <><h1 className='c'>{tree.title}</h1>
 <p className='c'> I like trees so I make website to tell about trees</p>
 <img src={tree.imgUrl}/>
 </>
  )
};

export default App;
