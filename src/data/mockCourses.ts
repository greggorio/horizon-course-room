import courseEnglish from "@/assets/course-english.jpg";
import courseManicure from "@/assets/course-manicure.jpg";
import courseBusiness from "@/assets/course-business.jpg";
import courseConversation from "@/assets/course-conversation.jpg";

export interface Course {
  id: string;
  title: string;
  turma: string;
  image: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  nextLesson?: string;
  nextLessonDate?: string;
  status: "ativa" | "concluída";
  periodo: string;
}

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "English Course - Basic Level",
    turma: "Turma Básico - Manhã 2026",
    image: courseEnglish,
    progress: 65,
    totalLessons: 24,
    completedLessons: 16,
    nextLesson: "Chapter 3: Shopping & Money",
    nextLessonDate: "25/02/2026, 09:00",
    status: "ativa",
    periodo: "20/02/2026 — 30/06/2026",
  },
  {
    id: "2",
    title: "Curso de Manicure",
    turma: "Turma de Inglês - Manhã",
    image: courseManicure,
    progress: 30,
    totalLessons: 18,
    completedLessons: 5,
    nextLesson: "Técnicas de Esmaltação",
    nextLessonDate: "26/02/2026, 14:00",
    status: "ativa",
    periodo: "01/01/2026 — 31/12/2026",
  },
  {
    id: "3",
    title: "Business English",
    turma: "Turma Avançado - Noite",
    image: courseBusiness,
    progress: 100,
    totalLessons: 20,
    completedLessons: 20,
    status: "concluída",
    periodo: "01/06/2025 — 30/11/2025",
  },
  {
    id: "4",
    title: "Conversation Practice",
    turma: "Turma Intermediário - Tarde",
    image: courseConversation,
    progress: 45,
    totalLessons: 16,
    completedLessons: 7,
    nextLesson: "Travel & Directions",
    nextLessonDate: "27/02/2026, 15:30",
    status: "ativa",
    periodo: "15/01/2026 — 15/07/2026",
  },
];
