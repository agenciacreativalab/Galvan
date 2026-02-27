import { Navbar } from "@/components/Navbar";
import { projects } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    id: p.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black min-h-screen text-white font-sans">
      <Navbar />
      <div className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <Link
          href="/"
          className="text-white/50 hover:text-white transition-colors flex items-center gap-2 mb-8 uppercase text-xs tracking-widest font-bold"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Back to Gallery
        </Link>
        <div className="relative w-full aspect-video rounded-3xl overflow-hidden mb-12">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tighter mb-6">{project.title}</h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-white/80 leading-relaxed text-xl mb-4">{project.description}</p>
          <p className="text-white/60">
            This is a placeholder blog post. You could add more detailed information
            about the technologies used, challenges overcome, and the final outcome
            of the project here. Since the dome gallery showcases 60+ projects,
            this dynamic route handles all of them efficiently!
          </p>
        </div>
      </div>
    </main>
  );
}
