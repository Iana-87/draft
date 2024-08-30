
import { useEffect, useState } from 'react';
import './App.css';
import MyNutritionComponent from './MyNutritionComponent';


function App() {

const [mySearch, setMySearch] = useState("");
const [myNutrition, setMyNutrition] = useState([]);



useEffect(() => {
  const getAnalys = async () => {
    const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=ee774096&app_key=%203060c83b97b24940cfe80d7b67653174%09&nutrition-type=cooking&ingr=1egg`);
    const data = await response.json();
    setMyNutrition(data);
   console.log(data);
  }
  getAnalys()
},[])

const myNutritionAnalis = (e) => {
 setMySearch(e.target.value)
}


  return (
    <div className="App">
 <div className="container">

<h1>Nutrition Analysis</h1>
</div>

<div className='container'>
  <form>
    <input className='search' onChange={myNutritionAnalis} value={mySearch}/>
  </form>
</div>


<div className='container'>
<button className='btn'>
<img width="80" height="64" src="https://img.icons8.com/arcade/64/citrus-1.png" alt="citrus-1"/>
</button>
</div>

{myNutrition.map (element => (
  <MyNutritionComponent label={element.ingredients.text} />
))}


  </div>
  );
}

export default App;
