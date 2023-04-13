import React from "react";
import { Routes, Route } from "react-router-dom";

// import Directory from "./components/directory/directory.component";
import Home from "./routes/home/home.component";

const Shop = () => {
  return (
    <>
      <h1>I am the shop page</h1>
    </>
  );
};

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="shop" element={<Shop />}></Route>
          {/* /shop -> (parentPath/childPath) */}
          {/* /home/shop -> (parentPath/childPath) */}
        </Route>
      </Routes>
    </>
  );
};

export default App;

// Routes is a folder that will hold all of our route, top level components.

// Components -> folder -> Generic Components

// Because the component inside the routes are realted to routes.
//  They are not these generic components (components folder) that we
// are building so that we can use in numerous places.
