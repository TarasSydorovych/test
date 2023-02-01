import {useEffect}from 'react'

function App() {
  const first = document.getElementsByClassName('first');
  const second = document.getElementsByClassName('second');
  const third = document.getElementsByClassName('third');
  const easy = new RegExp('((?=.*[a-zA-Z])(?=.{8,}))|((?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[0-9])(?=.{8,}))')
  const medium = new RegExp('((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,}))|((?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,}))')
  const strong = new RegExp('((?=.*[a-zA-Z])(?=.*[^A-Za-z0-9])(?=.*[0-9])(?=.{8,}))')
  const changeValue = (e) => {
    let val = Array.from(e.target.value);
    if(val.length === 0 ){
      first[0].style.background = 'grey';
      second[0].style.background = 'grey';
      third[0].style.background = 'grey';
    }else if(val.length < 8 ){
      first[0].style.background = 'red';
      second[0].style.background = 'red';
      third[0].style.background = 'red';
    }else if(strong.test(e.target.value)) {
      first[0].style.background = 'green';
      second[0].style.background = 'green';
      third[0].style.background = 'green';
    }else if(medium.test(e.target.value)){
      first[0].style.background = 'yellow';
      second[0].style.background = 'yellow';
      third[0].style.background = 'grey';
    }else if(easy.test(e.target.value)){
      first[0].style.background = 'red';
      second[0].style.background = 'grey';
      third[0].style.background = 'grey';
    }

  }

  return (
  <div className='container'>
   <input type="text" name="input" className='inp' onChange={changeValue}/>
   <div className='first'></div>
   <div className='second'></div>
   <div className='third'></div>

  </div>
  );
}

export default App;
