function Food() {
  return <img src="./public/hamegg.jpg" className="hamEgg" alt="Ham and eggs"></img>
}

function Maths() {
  let randomNum = Math.floor(Math.random() * 10);
  return <p>Your random number of the load is: {randomNum}</p>
}

export { Food, Maths };