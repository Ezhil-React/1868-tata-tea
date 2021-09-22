
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Banner from "./components/Banner";
import MainSection from "./components/MainSection";
import ProductListSlider from "./components/ProductListSlider";
import Flavour from "./components/Flavour";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";
import { Helmet } from 'react-helmet';
import "./App.css";



function App() {
  return (
    <>
      <Helmet>
        <title>1868 by Tata Tea
          &ndash; Tatatea1868</title>
      </Helmet>
      <Header />
      <Navbar />
      <Banner />
      <MainSection />
      <ProductListSlider />
      <Flavour />
      <FollowUs />
      <Footer />
    </>
  );
}

export default App;
