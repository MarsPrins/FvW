import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/Project.jsx";
import Trees4all from "./pages/Trees4all.jsx";
import Disc from "./pages/Disc.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="/pdf/:slug" element={<PdfViewer />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="project/:slug" element={<ProjectPage />} />
          <Route path="certificaat" element={<Trees4all />} />
          <Route path="disc" element={<Disc />} />
        </Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
