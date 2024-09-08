function MyNutritionComponent({ingredients, calories, waight, carbohydrate, cholesterol, energy, totalLipid, sugar }){
    

    return(<div>


    <h2> {ingredients}</h2>
    <h3>Amount Per Serving</h3>
     <p> Calories:{calories.toFixed()}</p>
    <p> Waight: {waight.toFixed()} g</p>
    <p>Carbohydrate: {carbohydrate.toFixed()} g</p>
    <p>Cholesterol: {cholesterol.toFixed()} mg</p>
    <p>Energy: {energy.toFixed()} kcal</p>
    <p>Total lipid: {totalLipid.toFixed() } g</p>
    <p> Sugar: {sugar.toFixed()} g</p>

    
        
    </div>)
}
   

export default MyNutritionComponent;
  