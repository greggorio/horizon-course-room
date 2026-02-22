import { HeroSection } from "@/components/HeroSection";
import { ContinueLearning } from "@/components/ContinueLearning";
import { CourseGrid } from "@/components/CourseGrid";
import { mockCourses } from "@/data/mockCourses";

const Index = () => {
  // Course with highest progress that isn't complete
  const continueCourse = mockCourses
    .filter((c) => c.status === "ativa")
    .sort((a, b) => b.progress - a.progress)[0];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      {continueCourse && <ContinueLearning course={continueCourse} />}
      <CourseGrid courses={mockCourses} />
    </div>
  );
};

export default Index;
