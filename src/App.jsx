import React from "react";
import "./App.css";
import AllRoutes from "./components/AllRoutes";


import Navbar from "./components/Navbar";
// import AnimatedCursor from 'react-animated-cursor';

// const DarkTheme = {
//   backgroundColor: "#15161b", //021f34//#1f2022
//   fontColorHeader: "#ffd479", ///fff
//   fontColorHeaderHover: "#25265e", //25265e
//   fontColorPrimary: "#b3b9c5", //fff
//   fontColorSecondary: "#b3b9c5", //98c0c6
//   socialIconColor: "#e14eca", //e14eca
//   cardColor: "#212129", //01162a
//   // commonBorder: '#00aaf2', //00aaf2
// };
// const LightTheme = {
//   backgroundColor: "#f0edf6", //f9fafc/#fff
//   fontColorHeader: "#343a40", ///25265e
//   fontColorHeaderHover: "#fff", //fff
//   fontColorPrimary: "#495057", //25265e
//   fontColorSecondary: "#495057", //25265eb3
//   cardColor: "#fbfbfd", //fff
//   socialIconColor: "rgba(37, 38, 94, 0.7)", //rgba(37, 38, 94, 0.7)
//   commonBorder: "#15161b", //0556f3
// };
// const themes = {
//   light: LightTheme,
//   dark: DarkTheme,
// };

const App = () => {
  // const [currentTheme, setCurrentTheme] = React.useState("light");
  // const themeToggler = () => {
  //   currentTheme === "light"
  //     ? setCurrentTheme("dark")
  //     : setCurrentTheme("light");
  // };
  return (
    
      <div className="app">
        <Navbar/>
        {/* <AnimatedCursor
                    innerSize={10}
                    outerSize={30}
                    color='255, 46, 99'
                    outerAlpha={0.4}
                    innerScale={0.6}
                    outerScale={0}
                /> */}
      <AllRoutes/>
       
      </div>
   
  );
};

export default App;
