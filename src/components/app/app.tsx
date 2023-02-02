import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../../pages/main-page";

export const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
    </Routes>
  );
};

export default App;
