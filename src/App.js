import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"PhotoShop",price:'$77' },
    {name:'Illustrator',price:'$55'},
    {name:'Pdf Reader',price:"$4"}
  ]
  return (
    <div className="App">
      <header className="App-header">
       {
         products.map(product=><li> {product.name} </li>)
       }
       {
         products.map(pd=><Product product= {pd} ></Product>)
       }
       <Counter> </Counter>
       <Users></Users>
      </header>
    </div>
  );
  function Counter() {
    const[count,setCount] = useState(0);
    return(
      <div>
        <h1>Count:{count} </h1>
        <button onClick={()=>setCount(count+1)} >Increase</button>
        <button onClick={()=>setCount(count-1)} >Decrease</button>
      </div>
    )
  }
}
function Users() {
  const [users,setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data))
  })
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.name}</li> )
       }
     </ul>
    </div>
  )
}

function Product(props){
  const productStyle = {
    color:'black',
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  const {name,price}=props.product;
  return (
    <div style={productStyle}>
      <h3> {name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
export default App;
