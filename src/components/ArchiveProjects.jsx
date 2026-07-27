import { IconArrowUpRight, IconBrandGithub } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio";

const ProjectRow = ({ project }) => (
  <tr className="group border-b border-[#1e1e1e]/70 last:border-none hover:bg-[#111]/50">
    <td className="px-5 py-5 align-top font-mono text-xs text-[#5c5c66]">
      {project.year}
    </td>
    <td className="py-5 pr-5 align-top">
      <p className="heading-font font-bold text-[#f4f4f5]">{project.title}</p>
      <p className="mt-1 text-xs text-[#7ab2ff]">{project.subtitle}</p>
    </td>
    <td className="hidden py-5 pr-5 align-top text-sm leading-relaxed text-[#71717a] md:table-cell">
      {project.description}
    </td>
    <td className="hidden py-5 pr-5 align-top lg:table-cell">
      <div className="flex max-w-sm flex-wrap gap-1">
        {project.tech.map((tech) => (
          <span key={tech} className="tag tag-neutral">
            {tech}
          </span>
        ))}
      </div>
    </td>
    <td className="py-5 pr-5 align-top">
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7ab2ff] focus-ring"
          aria-label={`View source for ${project.title}`}
        >
          <IconBrandGithub size={15} />
          <span className="hidden sm:inline">Source</span>
          <IconArrowUpRight size={13} />
        </a>
      ) : (
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#3f3f46]">
          Private
        </span>
      )}
    </td>
  </tr>
);

export default function ArchiveProjects() {
  return (
    <div className="px-2 sm:px-4">
      <div className="py-12">
        <Link
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#7ab2ff] focus-ring"
          to="/"
        >
          <IconArrowUpRight
            size={14}
            className="rotate-[-135deg] transition-transform group-hover:-translate-x-0.5"
          />
          Back to portfolio
        </Link>
        <p className="kicker mb-2 mt-8">project archive</p>
        <h1 className="heading-font text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl">
          Selected personal projects
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#71717a]">
          Independent work across full-stack engineering, cloud analytics, and
          secure multi-tier applications. Public source is linked only where a
          repository is confirmed.
        </p>
        <div className="mt-8 overflow-x-auto rounded-xl border border-[#1e1e1e] bg-[#0e0e0e]/50">
          <table className="min-w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#1e1e1e] bg-[#111]/80">
                {["Year", "Project", "Overview", "Built with", "Link"].map(
                  (heading, index) => (
                    <th
                      key={heading}
                      className={`px-5 py-4 font-mono text-[10px] uppercase tracking-wider text-[#5c5c66] ${
                        index === 2 ? "hidden md:table-cell" : ""
                      } ${index === 3 ? "hidden lg:table-cell" : ""}`}
                    >
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <ProjectRow key={project.title} project={project} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
