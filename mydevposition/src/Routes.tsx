import { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Question from "./pages/Question";
import Result from "./pages/Result";

export interface RouteProps {
  path: string;
  element: ReactNode;
}
export const routes: RouteProps[] = [
  { path: "/", element: <Start /> },
  { path: "/question", element: <Question /> },
  { path: "/result", element: <Result /> },
];
const RoutesSetting = () => (
  <Routes>
    {routes.map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
export default RoutesSetting;
