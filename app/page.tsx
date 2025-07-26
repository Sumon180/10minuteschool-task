import CourseChecklist from "@/components/CourseChecklist";
import CourseDescription from "@/components/CourseDescription";
import CourseDetails from "@/components/CourseDetails";
import Header from "@/components/Header";
import { getIeltsCourseData } from "@/utils/actions";

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
