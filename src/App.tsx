import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
