import { Suspense } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import type { TecType } from "./components/type";
import Techno from "./components/Techno";

function App() {

  const technologiesPromise = async (): Promise<TecType[]>=>{
    const res= await fetch('/data.json');
    const data = await res.json();
    return data;
  }
  return (
    <>
      
    <Nav></Nav>
    <Banner></Banner>
   <Suspense fallback={<div>LOADING</div>}>
    <Techno technologiesPromise={technologiesPromise()}></Techno>
   </Suspense>
    
    <Footer></Footer>
    </>
  )
};

export default App
