import React, { useState } from "react";
import "./App.css";
import "./componentsProjects/ColorGenerator.css";
// import { useState, useEffect } from "react";
// import Review from "./componentsProjects/Review";
import Values from "values.js";
import SingleColor from "./componentsProjects/SingleColor";

// import Loading from "./componentsProjects/Loading";
// import Tours from "./componentsProjects/Tours";

// import data from "./data";
// import List from "./componentsProjects/List";
// import AlertDialog from "./componentsProjects/AlertDialog";
// import ErrorExample from "./components/ErrorExample";
// import Use StateCounter from "./components/UseStateCounter";
// import UseStateObject from "./components/UseStateObject";
// const url = "https://course-api.com/react-tours-project";
function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#eee3e7").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hi");
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }

    // console.log(colors);
  };

  // const [people, setPeople] = useState(data);
  // const [loading, setLoading] = useState(true);
  // const [tours, setTours] = useState([]);
  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#eee3e7"
            className={`${error ? "error" : null}`}
          ></input>
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} />;
        })}
      </section>
    </>
  );
}

//  <main>
//     <section className="container">
//       <div className="title">
//         <h2> our reviews</h2>
//         <div className="underline"></div>
//       </div>
//       <Review />
//     </section>
//   </main>
//   const removeTour = (id) => {
//     const newTours = tours.filter((tour) => tour.id !== id);
//     setTours(newTours);
//   };
//   const fetchTours = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(url);
//       const tours = await response.json();
//       setLoading(false);
//       setTours(tours);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }

//     console.log(tours);
//   };
//   useEffect(() => {
//     fetchTours();
//   }, []);
//   if (loading) {
//     return (
//       <main>
//         <Loading />
//       </main>
//     );
//   }
//   if (tours.length === 0) {
//     return (
//       <main>
//         <div className="title">
//           <h2>No tours left..</h2>
//           <button className="btn" onClick={fetchTours}>
//             Refresh
//           </button>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <main>
//       <Tours tours={tours} removeTour={removeTour} />
//     </main>
//   );
// }

export default App;

/* <section className="container"> */

/* <ErrorExample /> */

/* <UseStateObject /> */

/* <UseStateCounter /> */

/* <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section> */

/* <AlertDialog /> */
