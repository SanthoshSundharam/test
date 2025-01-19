import Car from "./Car";

function Garage() {
  const color = 'red'
  return (
    <>
      <h1>Who lives inside me?</h1>
      <Car color = {color}/>
    </>
  );
}

export default Garage;
