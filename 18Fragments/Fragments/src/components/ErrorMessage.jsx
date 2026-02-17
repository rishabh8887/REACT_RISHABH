function ErrorMessgage(){
  let fooditems = ["Dal", "Roti", "GreenVegetable", "Milk", "Ghee"];
  return <>
  
  {fooditems.length === 0 ? <h3>i am hungry</h3> : null}</>
}
export default ErrorMessgage;