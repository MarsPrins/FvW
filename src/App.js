import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "./Layout.js";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import ProjectPage from "./pages/Project.jsx";
import Trees4all from "./pages/Trees4all.jsx";
import Disc from "./pages/Disc.jsx";
import PdfViewer from "./pages/PdfViewer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Logo from "./images/logoWbg.svg";

function App() {
  const structuredData = {
    "@context": "https://schema.org", // Schema.org is de standaard voor gestructureerde data
    "@type": "ConsultingFirm", // Type organisatie: lokaal bedrijf (voor SEO beter dan alleen "Organization")
    name: "van Woeik Consult B.V.", // Naam van jouw bedrijf
    image: { Logo }, // URL naar een bedrijfslogo of representatieve afbeelding
    url: "https://www.vwcon.nl", // Volledige URL van je homepage
    contactPoint: {
      // Contactgegevens
      "@type": "ContactPoint", // Standaardtype voor contact
      telephone: "+31-06-15161395", // Zakelijk telefoonnummer
      contactType: "customer service", // Type contact (bijv. "sales", "technical support", etc.)
      areaServed: "global", // Gebied waarin je diensten levert
      availableLanguage: ["Dutch", "English"], // Talen waarin je klanten te woord staat
    },
    description:
      "van Woesik consult is een adviesbureau dat gespecialiseerd is in technisch-, project en liaison management in de disciplines bouwkunde, civiele techniek, constructies en infra. Onze expertise stelt ons in staat om projecten in ontwerp en uitvoering tot een succes te maken.", // Korte omschrijving van wat je doet
  };
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <title>Adviesbureau voor projectsuccess | van Woesik Consult</title>
        <meta
          name="description"
          content="van Woesik consult is een adviesbureau dat gespecialiseerd is in technisch-, project en liaison management in de disciplines bouwkunde, civiele techniek, constructies en infra. Onze expertise stelt ons in staat om projecten in ontwerp en uitvoering tot een succes te maken. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vwcon.nl" />
        <meta property="og:image" content={Logo} />
        <meta
          name="keywords"
          content="adviesbureau, consult, van woesik, van woesik consult, woesik consult, woesik consult B.V, van woesik consult B.V., proojectmanagement, technisch management, liaison management, management consult, Bouwkunde,
    Civiele techniek,
    Constructies,
    Infrastructuur"
        />
      </Helmet>
      <Routes>
        <Route path="/pdf/:slug" element={<PdfViewer />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="project/:slug" element={<ProjectPage />} />
          <Route path="certificaat" element={<Trees4all />} />
          <Route path="disc" element={<Disc />} />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
