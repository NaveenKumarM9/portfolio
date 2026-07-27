import { IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { experiences } from "../data/portfolio";
import { Timeline } from "./timeline";

const timelineData = experiences.map((experience) => ({
  title: experience.date.split("—")[0].trim().split(" ").at(-1),
  content: (
    <article className="card-static p-5 sm:p-6">
      <p className="font-mono text-[10px] uppercase tracking-wider text-[#7ab2ff]">
        {experience.date}
      </p>
      <h2 className="heading-font mt-2 text-lg font-bold text-[#f4f4f5]">
        {experience.role}
      </h2>
      <p className="mt-1 text-sm font-medium text-[#a1a1aa]">
        {experience.company}
      </p>
      {experience.client && (
        <p className="mt-1 text-xs text-[#71717a]">{experience.client}</p>
      )}
      <p className="mt-4 text-sm leading-relaxed text-[#71717a]">
        {experience.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {experience.tech.slice(0, 6).map((tech) => (
          <span key={tech} className="tag tag-neutral">
            {tech}
          </span>
        ))}
      </div>
    </article>
  ),
}));

const Achievements = () => (
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
      <p className="kicker mb-2 mt-8">career timeline</p>
      <h1 className="heading-font text-3xl font-bold tracking-tight text-[#f4f4f5] sm:text-4xl">
        Enterprise engineering journey
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#71717a]">
        More than six years of software delivery across banking, healthcare,
        insurance, and investment services.
      </p>
      <div className="mt-8">
        <Timeline data={timelineData} />
      </div>
    </div>
  </div>
);

export default Achievements;
