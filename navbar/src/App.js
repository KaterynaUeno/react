import "./App.css";
// import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./sidebar.css";

function App() {
  return (
    <div>
      {/* <NavBar /> */}
      <Home />
      <Modal />
      <Sidebar />
    </div>
  );
}

export default App;
