import { BookOpen, Award, PlayCircle } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
}

const StatCard = ({ icon, value, label }: StatCardProps) => (
  <div className="flex items-center gap-3 rounded-lg bg-card/20 px-5 py-3 backdrop-blur-sm">
    <div className="text-primary">{icon}</div>
    <div>
      <p className="text-2xl font-bold font-heading text-secondary-foreground">{value}</p>
      <p className="text-sm text-secondary-foreground/70">{label}</p>
    </div>
  </div>
);

export const HeroSection = () => {
  return (
    <section className="bg-secondary text-secondary-foreground">
      <div className="container py-10">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-heading">
              Olá, João! 👋
            </h1>
            <p className="mt-1 text-secondary-foreground/70 font-body">
              Continue de onde parou e avance nos seus estudos.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <StatCard
              icon={<BookOpen className="h-5 w-5" />}
              value={3}
              label="Cursos Ativos"
            />
            <StatCard
              icon={<PlayCircle className="h-5 w-5" />}
              value={28}
              label="Aulas Assistidas"
            />
            <StatCard
              icon={<Award className="h-5 w-5" />}
              value={1}
              label="Certificados"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
