import './App.css';
import Stripe from './components/Stripe';
import { useState } from 'react';

function App() {
  

  const [showForm, setShowForm] = useState(false)
  return (
   <>
   <div className="App">
      {showForm ? <Stripe/> : <><h3>$100.00</h3> <img src="https://www.collinsdictionary.com/images/thumb/apple_158989157_250.jpg?version=4.0.322" /> <button onClick={()=>setShowForm(true)}>BUY</button></>}
    </div>
   </>
  );
}

export default App;