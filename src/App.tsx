import { Suspense } from "react";
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technology from "./components/technology/Technology";
import type { Itechnology } from "./types/technologyType";

const techFetch = async(): Promise <Itechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data
}


function App() {
  const techPromise = techFetch();
  return (
    <>
      
    <Nav></Nav>
    <Banner></Banner>
    <Suspense fallback= {<h2> Loading Technologies </h2>}>
      <Technology techPromise = {techPromise}></Technology>
    </Suspense>
    

    <Footer></Footer>
    </>
  )
}

export default App
