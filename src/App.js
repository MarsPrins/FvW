import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./Layout.js";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/Project.jsx";
import Trees4all from "./pages/Trees4all.jsx";
import Disc from "./pages/Disc.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
  const [data, setData] = useState(null);
  const [dataEnglish, setDataEnglish] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllData() {
      try {
        const [nlResponse, enResponse] = await Promise.all([
          fetch("/tekstenNL.json"),
          fetch("/tekstenEN.json"),
        ]);

        if (!nlResponse.ok || !enResponse.ok) {
          throw new Error("Network error when fetching texts");
        }

        const [nlData, enData] = await Promise.all([
          nlResponse.json(),
          enResponse.json(),
        ]);

        setData(nlData);
        setDataEnglish(enData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAllData();
  }, []);

  if (loading)
    return (
      <div
        style={{
          width: "100%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "100px",
        }}
      >
        <svg
          id="animated-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 379 451"
          fill="none"
          style={{
            padding: "2em",
            boxShadow: "0 0 40px 0 #00000047",
            borderRadius: "50%",
            transition: "0.2s ease",
          }}
        >
          <path
            d="M75.5 287.5L1 219L11.5 208L74 265.5L178 140.5L295.5 257L368 192L378 203L295 277.5L179 162.5L75.5 287.5Z"
            fill="black"
            stroke="black"
          />
          <path
            d="M76 372L88 381.5L179.5 271L354.5 450L365.5 440L178 248.5L76 372Z"
            fill="#0097FE"
            stroke="#0097FE"
          />
          <path
            d="M276 42L261 38L260.5 38.5C203.5 121 130 98.5 128 4.5L113 1C109.5 110.5 208.5 147 276 42Z"
            fill="#FF6821"
            stroke="#FF6821"
          />
        </svg>

        <span
          style={{
            fontFamily: "sans-serif",
            fontWeight: 300,
            fontSize: "25px",
          }}
        >
          Laden...
        </span>
      </div>
    );
  if (error) return <div>Error: {error}</div>;
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Routes>
        <Route path="pdf/:slug" element={<PdfViewer />} />
        <Route path="en/pdf/:slug" element={<PdfViewer />} />
        <Route
          path="/"
          element={<Layout tekstenNL={data} tekstenEN={dataEnglish} />}
        >
          <Route index element={<Main teksten={data} />} />
          <Route path="project/:slug" element={<ProjectPage />} />
          <Route path="certificaat" element={<Trees4all />} />
          <Route path="disc" element={<Disc teksten={data} />} />
          <Route path="/en/">
            <Route
              index
              element={<Main english={true} teksten={dataEnglish} />}
            />
            <Route
              path="project/:slug"
              element={<ProjectPage english={true} />}
            />
            <Route path="certificate" element={<Trees4all english={true} />} />
            <Route
              path="disc"
              element={<Disc english={true} teksten={dataEnglish} />}
            />
          </Route>
        </Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
