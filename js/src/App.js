import React from "react";
import "./App.css";
import { useState, useEffect } from "react";
import Loading from "./componentsProjects/Loading";
import Tours from "./componentsProjects/Tours";

// import data from "./data";
// import List from "./componentsProjects/List";
// import AlertDialog from "./componentsProjects/AlertDialog";
// import ErrorExample from "./components/ErrorExample";
// import Use StateCounter from "./components/UseStateCounter";
// import UseStateObject from "./components/UseStateObject";
const url = "https://course-api.com/react-tours-project";
function App() {
  // const [people, setPeople] = useState(data);
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }

    console.log(tours);
  };
  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left..</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

{
  /* <section className="container"> */
}
{
  /* <ErrorExample /> */
}
{
  /* <UseStateObject /> */
}
{
  /* <UseStateCounter /> */
}
{
  /* <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section> */
}
{
  /* <AlertDialog /> */
}
