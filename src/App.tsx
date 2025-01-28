import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeContainer from "./components/Home_container";
import { SectionProvider } from "./context/section_context";

function App(): JSX.Element {
  return (
    <SectionProvider>
      <Routes>
        <Route path="/" element={<HomeContainer />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </SectionProvider>
  );
}

export default App;
