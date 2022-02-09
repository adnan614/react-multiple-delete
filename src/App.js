import React from "react";
import Menu from "./Components/Header/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About/About";
import Category from "./Components/Category/Category";
import Home from "./Components/Home/Home";
import View from "./Components/CrudOperaton/Table/View";
import Edit from "./Components/CrudOperaton/Table/Edit";

function App() {
  return (
    <>
      <div>
        <Menu />
        <Routes>
          <Route exact path="/" caseSensitive={false} element={<Home />} />
          <Route exact path="/about" caseSensitive={false} element={<About />} />
          <Route exact path="/category" caseSensitive={false} element={<Category />} />
          <Route exact path="/view/:id" caseSensitive={false} element={<View />} />
          <Route exact path="/edit/:id" caseSensitive={false} element={<Edit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
