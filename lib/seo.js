import { project, faqs, amenityList } from "./content";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://forestedge.subishi.com";

export function jsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: project.locality + ", near " + project.nearby,
    addressLocality: project.city,
    addressRegion: project.region,
    postalCode: project.postalCode,
    addressCountry: project.country
  };

  const geo = { "@type": "GeoCoordinates", latitude: project.geo.lat, longitude: project.geo.lng };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": siteUrl + "/#organization",
        name: "Subishi Engineers",
        url: siteUrl,
        email: project.email,
        address: { "@type": "PostalAddress", streetAddress: project.salesOffice, addressLocality: project.city, addressRegion: project.region, postalCode: project.postalCode, addressCountry: project.country },
        areaServed: [
          { "@type": "City", name: "Hyderabad" },
          { "@type": "Place", name: "Kompally" },
          { "@type": "Place", name: "Pudur" }
        ],
        geo: geo
      },
      {
        "@type": "WebSite",
        "@id": siteUrl + "/#website",
        url: siteUrl,
        name: project.name + " \u2014 Luxury Villas in Kompally, Hyderabad",
        inLanguage: "en-IN",
        publisher: { "@id": siteUrl + "/#organization" }
      },
      {
        "@type": ["Residence", "ApartmentComplex"],
        "@id": siteUrl + "/#project",
        name: project.name,
        description: project.tagline,
        url: siteUrl,
        image: [project.hero, project.masterPlan],
        address: address,
        geo: geo,
        numberOfAccommodationUnits: 215,
        amenityFeature: amenityList.map(function (a) {
          return { "@type": "LocationFeatureSpecification", name: a, value: true };
        }),
        additionalProperty: [
          { "@type": "PropertyValue", name: "Land area", value: "43 acres" },
          { "@type": "PropertyValue", name: "Plot size", value: "580 Sq. Yds" },
          { "@type": "PropertyValue", name: "Built-up area", value: "3,425 \u2013 4,620 SFT" },
          { "@type": "PropertyValue", name: "Configuration", value: "4 BHK" },
          { "@type": "PropertyValue", name: "RERA", value: project.rera }
        ],
        hasMap: project.mapsLink,
        containedInPlace: { "@type": "Place", name: "Kompally, Hyderabad" }
      },
      {
        "@type": "FAQPage",
        "@id": siteUrl + "/#faq",
        mainEntity: faqs.map(function (item) {
          return {
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a }
          };
        })
      }
    ]
  };
}
