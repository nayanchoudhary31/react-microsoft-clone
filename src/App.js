import "./App.css";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import IconsLink from "./components/IconsLink";
import Cards from "./components/Cards";
import Banner from "./components/Banner";




function App() {
  return (
    <div className="App">
        <Navigation />
        <Carousel />
        <IconsLink />  
        <Cards />
        <Banner />
    </div>
  );
}

export default App;
