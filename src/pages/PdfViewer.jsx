import React, { useEffect } from "react";
import s from "../styles/pdfViewer.module.scss";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const PdfViewer = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [browser, setBrowser] = useState("other");

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
      ? "/algemene-voorwaarden.html"
      : slug === "privacy"
      ? "/Rechtsverhouding.html"
      : slug === "cv" && "/cv.html";

  useEffect(() => {
    // Fetch the HTML file content
    fetch(htmlFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load HTML file");
        }
        return response.text();
      })
      .then((html) => {
        setHtmlContent(html + <div>credits</div>);
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
            <p>Laden...</p>
          </div>
        )}

        {error && (
          <div className={s.errorText}>
            <p>Er is iets mis gegaan, graag opnieuw proberen.</p>
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
