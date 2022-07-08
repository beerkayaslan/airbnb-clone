import { useState, useEffect } from "react";
import Categories from "./components/home/categories/Categories";
import Header from "./components/layout/header/Header";
import Main from "./components/layout/main/Main";
import Footer from "./components/layout/footer/Footer";
import { MainContext } from "./context";
import Card from "./components/home/card/Card";

function App() {

  const [loading, setLoading] = useState(1);
  const [cardLoading, setcardLoading] = useState(1);
  const [selectCategory, setSelectCategory] = useState(1);
  const [offset, setOffset] = useState(0);
  const [headerShadow, setHeaderShadow] = useState("");

  useEffect((e) => {
    window.addEventListener('scroll', function(e){
      if(window.pageYOffset > 10){
        setHeaderShadow("drop-shadow-sm border-b ");
      }else{
        setHeaderShadow("");
      }
    });
  }, []);

 

  useEffect(() => {
    setTimeout(() => {
      setLoading(0);
      setcardLoading(0);
    }, 1000);
  }, [loading]);

  const data = {
    headerShadow,
    loading,
    selectCategory,
    setSelectCategory,
    cardLoading,
    setcardLoading
  }

  return (
    <MainContext.Provider value={data}>
      <Header />
      <Main>
        <Categories />
        <Card />
      </Main>
      <Footer />
    </MainContext.Provider>
  );
}

export default App;
