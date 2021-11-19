import React from "react";
import { useGlobalContext } from "./context";

// components
import Navbar from "./components/NavBar";
import CartContainer from "./components/CartContainer";
// items

function App() {
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   )
  // }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
