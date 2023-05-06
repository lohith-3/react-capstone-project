import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";

// import { ProductsProvider } from "./context/products.context";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />}></Route>

          <Route path="shop" element={<Shop />}></Route>

          <Route path="auth" element={<Authentication />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;

// Routes is a folder that will hold all of our route, top level components.

// Components -> folder -> Generic Components

// Because the component inside the routes are related to routes.
// They are not these generic components (components folder) that we
// are building so that we can use in numerous places.
