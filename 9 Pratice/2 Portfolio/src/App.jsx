import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import Page1 from "./components/Page1";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page5 from "./components/Page5";
import Page4 from "./components/Page4";
export default function App() {
  let box = useRef();
  useGSAP(() => {
    gsap.from(box.current, {
      x: 100,
      duration: .4
    })
  });

  return (
    <div className="overflow-x-hidden m-0 p-0 box-border" >
      <Navbar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      {/* <Slider/> */}
    </div>
  )
}