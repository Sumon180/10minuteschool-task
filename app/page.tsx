import CourseChecklist from "@/components/CourseChecklist";
import CourseDescription from "@/components/CourseDescription";
import CourseDetails from "@/components/CourseDetails";
import Header from "@/components/Header";
import { getIeltsCourseData } from "@/utils/actions";
import { Metadata } from "next";
import Script from "next/script";

const validOgTypes = [
  "website",
  "article",
  "book",
  "profile",
  "music.song",
  "music.album",
  "music.playlist",
  "music.radio_station",
  "video.movie",
  "video.episode",
  "video.tv_show",
  "video.other",
] as const;

type OGType = (typeof validOgTypes)[number];

function isValidOgType(type: string | undefined): type is OGType {
  return type !== undefined && validOgTypes.includes(type as OGType);
}

export async function generateMetadata(): Promise<Metadata> {
  const result = await getIeltsCourseData("bn");

  if (!result.success || !result.data) {
    return {
      title: "IELTS Course",
      description: "Failed to load course data.",
    };
  }

  const findMeta = (key: string) =>
    seo.defaultMeta.find((m) => m.value === key)?.content;

  const seo = result.data.data.data.seo;

  const ogTypeCandidate = findMeta("og:type");
  const ogType: OGType = isValidOgType(ogTypeCandidate)
    ? ogTypeCandidate
    : "website";
  const secureUrl = findMeta("og:image:secure_url");

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.defaultMeta.find((m) => m.value === "og:title")?.content,
      description: seo.defaultMeta.find((m) => m.value === "og:description")
        ?.content,
      url: seo.defaultMeta.find((m) => m.value === "og:url")?.content,
      images: [
        {
          url:
            seo.defaultMeta.find((m) => m.value === "og:image")?.content || "",
          alt: seo.defaultMeta.find((m) => m.value === "og:image:alt")?.content,
          type: seo.defaultMeta.find((m) => m.value === "og:image:type")
            ?.content,
        },
      ],
      type: ogType,

      locale:
        seo.defaultMeta.find((m) => m.value === "og:locale")?.content ||
        "en_US",
    },
    alternates: {
      canonical: seo.defaultMeta.find((m) => m.value === "og:url")?.content,
    },
    other: secureUrl
      ? {
          "og:image:secure_url": secureUrl,
        }
      : undefined,
  };
}

export default async function Home() {
  const result = await getIeltsCourseData("bn"); // or "en"

  if (!result.success || !result.data) {
    return <p className="text-red-500">Failed to load course data.</p>;
  }

  const course = result.data.data.data;

  const checklist = course.checklist;
  const sections = course.sections;

  return (
    <>
      <Header />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: "IELTS Course by Munzereen Shahid",
            image:
              "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
            description: course.seo.description,
            brand: { "@type": "Brand", name: "10 Minute School" },
            sku: "153",
            offers: {
              "@type": "Offer",
              url: "https://10minuteschool.com/product/ielts-course",
              priceCurrency: "BDT",
              price: "5000",
            },
          }),
        }}
      />
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            name: "IELTS Course by Munzereen Shahid",
            description: course.seo.description,
            thumbnailUrl:
              "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
            uploadDate: "2023-06-14",
            duration: "PT1M41S",
            contentUrl: "https://10minuteschool.com/product/ielts-course",
          }),
        }}
      />
      <CourseDescription course={course} />
      <div className="p-5">
        <section className="max-w-7xl mx-auto">
          <div className="md:hidden">
            <CourseChecklist checklist={checklist} />
          </div>
          <CourseDetails sections={sections} checklist={checklist} />
        </section>
      </div>
    </>
  );
}
