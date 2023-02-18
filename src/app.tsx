import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { AppHeader } from "./components/app-header";
import { MainPage } from "./pages/main-page";
import { Box } from "./ui";

enum GridAreas {
  SIDEBAR = "sidebar",
  HEADER = "header",
  MAIN = "main",
  FOOTER = "footer",
}

const GridLayout = styled(Box)`
  display: grid;
  grid-template-rows: 3.3125rem 1fr;
  grid-template-areas:
    "${GridAreas.HEADER}"
    "${GridAreas.MAIN}";
  height: 100vh;
`;

const Header = styled(AppHeader)`
  grid-area: ${GridAreas.HEADER};
`;

const Main = styled.main`
  grid-area: ${GridAreas.MAIN};
  overflow: auto;
`;

export const App: FC = () => {
  return (
    <GridLayout>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </Main>
    </GridLayout>
  );
};

export default App;
