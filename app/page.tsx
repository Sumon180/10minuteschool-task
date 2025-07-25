import CourseDetails from "@/components/CourseDetails";
import CourseMedium from "@/components/CourseMedium";
import Header from "@/components/Header";
import { Medium } from "@/types";
import { getIeltsCourseData } from "@/utils/actions";

export default async function Home() {
  const result = await getIeltsCourseData("bn"); // or "bn"

  if (!result.success || !result.data) {
    return <p className="text-red-500">Failed to load course data.</p>;
  }

  const course = result.data.data.data;
  console.log(course);

  const medias = course.media;
  const checklist = course.checklist;

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
      <section className="p-5">
        <div className="md:hidden">
          <CourseDetails checklist={checklist} />
        </div>
      </section>
    </>
  );
}
