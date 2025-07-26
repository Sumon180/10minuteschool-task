import CourseDetails from "@/components/CourseDetails";
import CourseInstructor from "@/components/CourseInstructor";
import CourseMedium from "@/components/CourseMedium";
import CoursePointers from "@/components/CoursePointers";
import FeatureExplanations from "@/components/FeatureExplanations";
import Features from "@/components/Features";
import GroupJoinEngagement from "@/components/GroupJoinEngagement";
import Header from "@/components/Header";
import { getIeltsCourseData } from "@/utils/actions";
import Image from "next/image";

export default async function Home() {
  const result = await getIeltsCourseData("bn"); // or "en"

  if (!result.success || !result.data) {
    return <p className="text-red-500">Failed to load course data.</p>;
  }

  const course = result.data.data.data;

  const medias = course.media;
  const checklist = course.checklist;
  const sections = course.sections;

  return (
    <>
      <Header />
      <section className="p-3 py-20 bg-gradient-to-br from-[#03020f] via-[#03020f] to-[#035870] text-white">
        <div className="relative max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-4">
          <div className="md:max-w-[61%]">
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: course.description }}
              className="text-lg text-gray-400 font-medium"
            />
          </div>
          <div className="md:absolute right-0 top-0  w-full md:max-w-[330px] lg:max-w-[440px] p-1 bg-white border border-gray-300">
            <CourseMedium medias={medias} checklist={checklist} />
          </div>
        </div>
      </section>
      <div className="p-5">
        <section className="max-w-7xl mx-auto">
          <div className="md:hidden">
            <CourseDetails checklist={checklist} />
          </div>
          <div className="md:w-7/12 space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <p className="text-3xl font-semibold mb-3">{section.name}</p>
                {section.type === "instructors" && (
                  <CourseInstructor values={section.values} />
                )}
                {section.type === "features" && (
                  <Features values={section.values} />
                )}
                {section.type === "group_join_engagement" && (
                  <GroupJoinEngagement values={section.values} />
                )}
                {section.type === "pointers" && (
                  <CoursePointers values={section.values} />
                )}
                {section.type === "feature_explanations" && (
                  <FeatureExplanations values={section.values} />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
