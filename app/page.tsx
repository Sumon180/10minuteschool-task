import Header from "@/components/Header";
import { getIeltsCourseData } from "@/utils/actions";

export default async function Home() {
  const result = await getIeltsCourseData("bn"); // or "bn"

  if (!result.success || !result.data) {
    return <p className="text-red-500">Failed to load course data.</p>;
  }

  const course = result.data.data.data;
  console.log(course);

  return (
    <>
      <Header />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: course.description }} />
      </div>
    </>
  );
}
