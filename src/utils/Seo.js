import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Logo from "../images/logoWbg.svg";

export default function Seo() {
  const location = useLocation();

  const isEnglishPage = location.pathname.startsWith("/en");

  const structuredDataNL = {
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
    <>
      {!isEnglishPage ? (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify(structuredDataNL)}
          </script>
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
          <title>Adviesbureau voor projectsucces | van Woesik Consult</title>
        </Helmet>
      ) : (
        isEnglishPage && (
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: "English Page",
                url: `https://example.com${location.pathname}`,
              })}
            </script>
            <title>Consult for success | van Woesik Consult</title>
          </Helmet>
        )
      )}
    </>
  );
}
