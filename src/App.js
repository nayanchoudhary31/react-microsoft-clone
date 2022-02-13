import "./App.css";
import Carousel from "./components/Carousel";
import Navigation from "./components/Navigation";
import IconsLink from "./components/IconsLink";
import Cards from "./components/Cards";
import Card1 from "./components/Card1";
import Banner from "./components/Banner";
import card1 from "./assets/card1.jpeg";
import card2 from "./assets/card2.jpeg";
import card3 from "./assets/card3.jpeg";
import card4 from "./assets/card4.jpeg";
import card5 from "./assets/card5.jpeg";
import card6 from "./assets/card6.jpeg";
import card7 from "./assets/card7.jpeg";
import card8 from "./assets/card8.jpeg";
import Footer from "./components/Footer";





function App() {
  return (
    <div className="App">
        <Navigation />
        <Carousel />     
        <IconsLink />
        <Cards card1={card1} card2={card2} card3={card3} card4={card4} />
        <Banner />
        <Card1 card5={card5} card6={card6} card7={card7} card8={card8} />
        <Footer />
    </div>
  );
}

export default App;
