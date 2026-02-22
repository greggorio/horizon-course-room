import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CourseCard } from "@/components/CourseCard";
import type { Course } from "@/data/mockCourses";

interface CourseGridProps {
  courses: Course[];
}

export const CourseGrid = ({ courses }: CourseGridProps) => {
  const [filter, setFilter] = useState("todos");

  const filtered = courses.filter((c) => {
    if (filter === "andamento") return c.status === "ativa";
    if (filter === "concluidos") return c.status === "concluída";
    return true;
  });

  return (
    <section className="container py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-2xl font-heading text-foreground">Meus Cursos</h2>
        <Tabs value={filter} onValueChange={setFilter}>
          <TabsList className="bg-muted">
            <TabsTrigger value="todos" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Todos
            </TabsTrigger>
            <TabsTrigger value="andamento" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Em Andamento
            </TabsTrigger>
            <TabsTrigger value="concluidos" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground">
              Concluídos
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-12 text-center text-muted-foreground">
          Nenhum curso encontrado nesta categoria.
        </p>
      )}
    </section>
  );
};
