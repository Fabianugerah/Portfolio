import { notFound } from "next/navigation";
import Link from "next/link";
import { projectItems } from "@/data/portfolio";
import Image from "next/image";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const project = projectItems.find((p) => p.id === parseInt(resolvedParams.id));

  if (!project) {
    notFound();
  }

  // Get other projects for recommendations
  const recommendations = projectItems
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-black text-white min-h-screen pt-20 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Back Link */}
        <Link 
          href="/project" 
          className="inline-flex items-center text-white/50 hover:text-white transition-colors mb-10 no-underline text-sm font-medium"
        >
          <i className="bi bi-arrow-left mr-2" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center text-white/50">
            <i className="bi bi-calendar mr-2" />
            <span>{project.year || "2024"}</span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="rounded-2xl overflow-hidden bg-white/5 mb-16 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-auto object-cover max-h-150"
          />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
          
          {/* Left Column - Overview */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="text-white/70 leading-relaxed space-y-4 whitespace-pre-wrap">
              {project.overview}
            </div>
          </div>

          {/* Right Column - Tech Stack */}
          <div className="lg:col-span-1">
            <div className="border border-white/10 bg-[#0a0a0a] rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Tech Stack</h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack?.map((tech, i) => (
                  <span 
                    key={i} 
                    className="bg-white/5 border border-white/10 text-white/80 px-3 py-1.5 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white text-black text-center font-bold py-3 rounded-xl hover:bg-white/90 transition-colors no-underline"
              >
                Visit Project <i className="bi bi-box-arrow-up-right ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Explore More Projects */}
        <div className="pt-16 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-8">Explore More Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {recommendations.map((item) => (
              <Link
                key={item.id}
                href={`/project/${item.id}`}
                className="group border border-white/10 rounded-xl overflow-hidden bg-[#0a0a0a] hover:-translate-y-1.5 hover:border-white/20 transition-all duration-300 no-underline block"
              >
                <div className="overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-white font-bold text-lg mb-1">{item.title}</h5>
                  <p className="text-white/40 text-sm mb-4 line-clamp-2">{item.description}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-white/40 text-sm">
                      <i className="bi bi-calendar mr-2" />
                      <span>{item.year || "2024"}</span>
                    </div>
                    <div className="text-white/40 group-hover:text-white transition-colors">
                      <i className="bi bi-arrow-up-right text-lg" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
