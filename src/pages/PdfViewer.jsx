import React, { useEffect } from "react";
import s from "../styles/pdfViewer.module.scss";
import { Link, useLocation, useParams } from "react-router-dom";
import { useState } from "react";

const PdfViewer = () => {
  console.log("first");
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [browser, setBrowser] = useState("other");
  const location = useLocation();
  const isEnglishPage = location.pathname.startsWith("/en");

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("firefox")) {
      setBrowser("firefox");
    } else if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      setBrowser("safari");
    } else {
      setBrowser("other");
    }
  }, []);

  const { slug } = useParams();
  const htmlFilePath =
    slug === "algemeen"
      ? `/algemene-voorwaarden.txt`
      : slug === "privacy"
      ? `/Rechtsverhouding.txt`
      : slug === "cv"
      ? `/cv.txt`
      : slug === "terms-conditions"
      ? `/terms-conditions.txt`
      : slug === "cv-EN"
      ? `/cv.txt`
      : null;

  console.log(process.env.PUBLIC_URL);

  useEffect(() => {
    // Fetch the HTML file content
    console.log(htmlFilePath);
    fetch(htmlFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load HTML file");
        }
        console.log(response);
        return response.text();
      })
      .then((html) => {
        setHtmlContent(html);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading HTML file:", err);
        setError(true);
        setLoading(false);
      });
  }, [htmlFilePath]);

  return (
    <div className={s.container}>
      {/* HTML Display Container */}
      <div className={s.htmlContainer}>
        {loading && (
          <div className={s.loadingText}>
            <div className={s.spinner}></div>
            <p>{isEnglishPage ? "Loading…" : "Laden…"}</p>
          </div>
        )}

        {error && (
          <div className={s.errorText}>
            <p>
              {" "}
              {isEnglishPage
                ? "Something went wrong, please try again"
                : "Er is iets mis gegaan, graag opnieuw proberen."}
            </p>
          </div>
        )}

        {!loading && !error && (
          <div
            className={
              browser === "safari" ? s.htmlContentSafari : s.htmlContent
            }
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        )}
      </div>
    </div>
  );
};

export default PdfViewer;
