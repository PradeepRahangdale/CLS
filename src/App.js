// import logo from './logo.svg';
import "./App.css";
import TopNav from "./Components/TopNav";
import { Routes, Route } from "react-router-dom";
// import Home from'./Components/Home';
import Fetchscore from "./Components/fetchapi/Fetchscore";
// import Products from './Components/Products';
// import Services from './Components/Services';
// import ContactUs from './Components/ContactUs';
import Cards from './Components/Cards';
import Appimg from "./Components/img/Appimg";
import Playerlistfetch from "./Components/fetchapi/Playerlistfetch";
import Countrylistfetch from "./Components/fetchapi/Countrylistfetch";
import Login from "./Components/Login";
import Join from "./Components/Join";
import Search from "./Components/Search";
import Livescore from "./Components/fetchapi/Livescore";
const App = ()=> {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TopNav />}>
          <Route path="" element={<Appimg />} />

          <Route path="/Fetchscore" element={<Fetchscore />} />
          <Route path="/Playerlistfetch" element={<Playerlistfetch />} />
          <Route path="/Countrylistfetch" element={<Countrylistfetch />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Livescore" element={<Livescore />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
