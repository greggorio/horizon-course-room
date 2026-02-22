import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import type { Course } from "@/data/mockCourses";

interface ContinueLearningProps {
  course: Course;
}

export const ContinueLearning = ({ course }: ContinueLearningProps) => {
  return (
    <section className="container py-8">
      <h2 className="mb-4 text-2xl font-heading text-foreground">Continuar Aprendendo</h2>
      <div className="overflow-hidden rounded-lg bg-card shadow-sm border border-border">
        <div className="flex flex-col md:flex-row">
          <div className="aspect-video w-full md:w-96 flex-shrink-0">
            <img
              src={course.image}
              alt={course.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between p-6">
            <div>
              <h3 className="text-xl font-heading text-foreground">{course.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{course.turma}</p>
              {course.nextLesson && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Próxima aula: <span className="font-medium text-foreground">{course.nextLesson}</span>
                </p>
              )}
            </div>
            <div className="mt-4">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {course.completedLessons}/{course.totalLessons} aulas
                </span>
                <span className="font-medium text-foreground">{course.progress}%</span>
              </div>
              <Progress value={course.progress} className="h-2 bg-muted [&>div]:bg-primary" />
              <Button className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                <PlayCircle className="mr-2 h-5 w-5" />
                Continuar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
