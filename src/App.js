

import {  useState} from 'react';
import './App.css';
import MyNutritionComponent from './MyNutritionComponent';
import Swal from 'sweetalert2';
import LoaderPage from './Loader/LoaderPage';


function App() {
  const [mySearch, setMySearch] = useState("");
  const [myNutrition, setMyNutrition] = useState([]);
  const[ stateLoader, setStateLoader] = useState(false);
  


  /*useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 10000);
    return () => clearTimeout(timer)
  }, [])*/

  const getAnalysis = async () => {
    try {
      setStateLoader(true);
      const response = await fetch(
        `https://api.edamam.com/api/nutrition-data?app_id=ee774096&app_key=3060c83b97b24940cfe80d7b67653174&nutrition-type=cooking&ingr=${mySearch}`,
        {
          method: 'GET', 
          headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        setMyNutrition([data]);
        setStateLoader(false);
      } else {
        console.error("Error fetching data:", response.status);
        setStateLoader(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setStateLoader(false);
      }
   };

  const handleAlert = () => {
    Swal.fire(
     "Please, indicate the quantity of products");
  };

const handleFormSubmit = (e) => {
    e.preventDefault(); 
   if (mySearch.trim() !== "") {
      getAnalysis (); 
    }
   else {
    handleAlert()
  }
  
  };

  const myNutritionAnalis = (e) => {
    setMySearch(e.target.value);
  

  };

  



  return (
    <div className="App">
      <div className="container">
        <h1>Nutrition Analysis</h1>
      </div>

      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <input className="search" onChange={myNutritionAnalis} value={mySearch} />
        </form>
      </div>

      <div className="container">
        <button className="btn" onClick={handleFormSubmit}>
          <img width="80" height="64" src="https://img.icons8.com/arcade/64/citrus-1.png" alt="citrus-1" />
        </button>
      </div>

      {stateLoader && <LoaderPage />} 

      {myNutrition.length > 0 && myNutrition.map((element, index) => (
        <MyNutritionComponent
        key={index} 
        label={element.ingredients ? element.ingredients[0].text : 'No data' }
        calories={element.calories} 
        waight={element.totalWeight}
        carbohydrate={element.totalNutrients.CHOCDF.quantity} 
        cholesterol = {element.totalNutrients.CHOLE.quantity}
        energy = {element.totalNutrients.ENERC_KCAL.quantity}
        totalLipid = {element.totalNutrients.FAT.quantity}
        sugar = {element.totalNutrients.SUGAR.quantity} />
      ))}
    </div>
  );
}

export default App;









