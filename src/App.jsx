import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout";

import routes from "./route";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          {routes.map((route, index) => {
            const Element = route.component;
            return (
              <Route
                path={route.href}
                element={<Element route={route} />}
                key={index}
              />
            );
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
