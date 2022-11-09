import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/layout/DefaultLayout";
import { publicRoutes } from "../src/routes/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <DefaultLayout>
                  <Page />
                </DefaultLayout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
