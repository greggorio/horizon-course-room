import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import type { Course } from "@/data/mockCourses";

interface CourseCardProps {
  course: Course;
}

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="group overflow-hidden rounded-lg bg-card border border-border shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg leading-tight text-foreground">{course.title}</h3>
          <Badge
            variant={course.status === "ativa" ? "default" : "secondary"}
            className={
              course.status === "ativa"
                ? "bg-secondary text-secondary-foreground shrink-0"
                : "bg-muted text-muted-foreground shrink-0"
            }
          >
            {course.status === "ativa" ? "Ativa" : "Concluída"}
          </Badge>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{course.turma}</p>

        <div className="mt-3">
          <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
            <span>{course.completedLessons}/{course.totalLessons} aulas</span>
            <span className="font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="h-1.5 bg-muted [&>div]:bg-primary" />
        </div>

        {course.nextLessonDate && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="h-3.5 w-3.5" />
            <span>Próxima aula: {course.nextLessonDate}</span>
          </div>
        )}

        <Button
          className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          size="sm"
        >
          {course.status === "ativa" ? "Acessar" : "Ver Certificado"}
        </Button>
      </div>
    </div>
  );
};
