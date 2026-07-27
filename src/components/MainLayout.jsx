import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  IconArrowDown,
  IconArrowUpRight,
  IconBriefcase,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChartBar,
  IconCode,
  IconDatabase,
  IconFolder,
  IconHome2,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconSchool,
  IconTool,
  IconX,
} from "@tabler/icons-react";
import {
  caseStudies,
  education,
  experiences,
  industries,
  metrics,
  navItems,
  portfolio,
  projects,
  skillGroups,
} from "../data/portfolio";

const navIcons = {
  home: IconHome2,
  experience: IconBriefcase,
  impact: IconChartBar,
  "case-studies": IconDatabase,
  projects: IconFolder,
  skills: IconTool,
  education: IconSchool,
  contact: IconMail,
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const sectionViewport = { once: true, margin: "-70px" };

const SectionHeading = ({ kicker, children, sub }) => (
  <div className="mb-8">
    <p className="kicker mb-2">{kicker}</p>
    <h2 className="heading-font text-2xl sm:text-3xl font-bold tracking-tight text-[#f4f4f5]">
      {children}
    </h2>
    {sub && (
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#71717a]">
        {sub}
      </p>
    )}
  </div>
);

const SocialLinks = ({ compact = false }) => (
  <div className={`flex items-center ${compact ? "gap-4" : "gap-3"}`}>
    <a
      href={portfolio.links.github}
      target="_blank"
      rel="noreferrer"
      aria-label="Naveen Kumar on GitHub"
      className="text-[#71717a] transition-colors hover:text-[#f4f4f5] focus-ring"
    >
      <IconBrandGithub size={compact ? 18 : 20} />
    </a>
    <a
      href={portfolio.links.linkedin}
      target="_blank"
      rel="noreferrer"
      aria-label="Naveen Kumar on LinkedIn"
      className="text-[#71717a] transition-colors hover:text-[#7ab2ff] focus-ring"
    >
      <IconBrandLinkedin size={compact ? 18 : 20} />
    </a>
  </div>
);

const SidebarContent = ({
  activeSection,
  onNavigate,
  onClose,
  isMobile = false,
}) => (
  <div className="flex h-full flex-col px-5 py-7">
    {isMobile && (
      <div className="mb-4 flex justify-end">
        <button
          onClick={onClose}
          className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-[#1a1a1a] focus-ring"
          aria-label="Close navigation menu"
        >
          <IconX size={18} />
        </button>
      </div>
    )}

    <div className="mb-7 flex flex-col items-center text-center">
      <img
        src={portfolio.image}
        alt={`${portfolio.name} profile`}
        className="mb-3 h-24 w-24 rounded-full object-cover ring-2 ring-[#2563eb]/25 ring-offset-2 ring-offset-[#0a0a0a]"
      />
      <h2 className="heading-font text-base font-bold">{portfolio.name}</h2>
      <p className="mt-0.5 text-xs font-medium text-[#a1a1aa]">
        {portfolio.shortTitle}
      </p>
      <div className="mt-1.5 flex items-center gap-1 text-[10px] text-[#5c5c66]">
        <IconMapPin size={11} />
        <span>{portfolio.location}</span>
      </div>
    </div>

    <nav className="flex-1" aria-label="Portfolio navigation">
      <ul className="flex flex-col gap-0.5">
        {navItems.map(({ id, label }) => {
          const Icon = navIcons[id];
          return (
            <li key={id}>
              <button
                onClick={() => onNavigate(id)}
                className={`sidebar-nav-link w-full ${
                  activeSection === id ? "active" : ""
                }`}
                aria-current={activeSection === id ? "page" : undefined}
              >
                <span className="nav-indicator" />
                <Icon size={15} className="shrink-0" />
                <span>{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>

    <a
      href={portfolio.links.linkedin}
      target="_blank"
      rel="noreferrer"
      className="btn-primary mb-5 mt-6 w-full text-xs uppercase tracking-wide"
    >
      <IconBrandLinkedin size={15} />
      Connect on LinkedIn
    </a>

    <div className="flex items-center justify-between border-t border-[#1e1e1e] pt-4">
      <SocialLinks compact />
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#3f3f46]">
        Enterprise engineer
      </span>
    </div>
  </div>
);

const HeroSection = ({ onNavigate }) => (
  <section id="home" className="flex min-h-[92vh] items-center py-16 sm:py-20">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="w-full"
    >
      <motion.div
        variants={fadeUp}
        className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2563eb]/20 bg-[#2563eb]/10 px-3 py-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#60a5fa]" />
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#7ab2ff]">
          {portfolio.experience} · enterprise software delivery
        </span>
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="heading-font text-lg font-semibold text-[#7ab2ff] sm:text-xl"
      >
        Hi, I’m {portfolio.name}.
      </motion.p>
      <motion.h1
        variants={fadeUp}
        className="heading-font mt-3 max-w-4xl text-4xl font-bold leading-[1.06] tracking-[-0.04em] text-[#f4f4f5] sm:text-6xl lg:text-7xl"
      >
        I build secure systems that{" "}
        <span className="gradient-text">perform at enterprise scale.</span>
      </motion.h1>
      <motion.p
        variants={fadeUp}
        className="mt-6 max-w-3xl text-base leading-relaxed text-[#a1a1aa] sm:text-lg"
      >
        {portfolio.headline}
      </motion.p>
      <motion.p
        variants={fadeUp}
        className="mt-3 max-w-3xl text-sm leading-relaxed text-[#71717a] sm:text-base"
      >
        {portfolio.summary}
      </motion.p>

      <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-2">
        {portfolio.coreStack.map((item) => (
          <span key={item} className="stack-chip">
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
        <button
          onClick={() => onNavigate("projects")}
          className="btn-primary"
        >
          Explore my work
          <IconArrowDown size={15} />
        </button>
        <a
          href={portfolio.links.github}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          <IconBrandGithub size={16} />
          GitHub profile
        </a>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-12 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#1e1e1e] bg-[#1e1e1e] sm:grid-cols-4"
      >
        {[
          ["6+", "years"],
          ["4", "industries"],
          ["22", "secure APIs"],
          ["1.2M+", "records / batch"],
        ].map(([value, label]) => (
          <div key={label} className="bg-[#0e0e0e] px-4 py-4">
            <p className="heading-font text-xl font-bold text-[#f4f4f5]">
              {value}
            </p>
            <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-[#5c5c66]">
              {label}
            </p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="experience"
          sub="Enterprise delivery across banking, healthcare, insurance, and investment services."
        >
          Where I’ve made an impact
        </SectionHeading>
      </motion.div>

      <div className="flex flex-col gap-3">
        {experiences.map((experience, index) => (
          <motion.article
            key={`${experience.company}-${experience.date}`}
            variants={fadeUp}
            custom={index}
            className="card-static p-5 sm:p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="heading-font text-base font-bold text-[#f4f4f5]">
                  {experience.role}
                </h3>
                <p className="mt-0.5 text-sm font-medium text-[#7ab2ff]">
                  {experience.company}
                </p>
                {experience.client && (
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wide text-[#71717a]">
                    {experience.client}
                  </p>
                )}
              </div>
              <div className="shrink-0 text-left sm:text-right">
                <p className="font-mono text-xs text-[#71717a]">
                  {experience.date}
                </p>
                {experience.location && (
                  <p className="mt-1 text-[10px] text-[#5c5c66]">
                    {experience.location}
                  </p>
                )}
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
              {experience.summary}
            </p>
            <ul className="mt-4 grid gap-2">
              {experience.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-2 text-sm leading-relaxed text-[#71717a]"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#2563eb]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {experience.tech.map((tech) => (
                <span key={tech} className="tag tag-neutral">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div variants={fadeUp} className="mt-7">
        <Link
          to="/archive/achievements"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#a1a1aa] transition-colors hover:text-[#7ab2ff] focus-ring"
        >
          View career timeline
          <IconArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

const ImpactSection = () => (
  <section id="impact" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="measurable impact"
          sub="Selected scale and delivery signals from production engineering engagements."
        >
          Outcomes, not just output
        </SectionHeading>
      </motion.div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            variants={fadeUp}
            custom={index}
            className="card-static min-h-36 p-5"
          >
            <p className="heading-font text-3xl font-bold text-[#f4f4f5] sm:text-4xl">
              {metric.value}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#71717a]">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-2">
        {industries.map((industry) => (
          <span key={industry} className="tag tag-accent">
            {industry}
          </span>
        ))}
      </motion.div>
    </motion.div>
  </section>
);

const CaseStudiesSection = () => (
  <section id="case-studies" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="professional case studies"
          sub="High-level, résumé-approved views of enterprise initiatives. Proprietary implementation details remain private."
        >
          Complex systems, simplified
        </SectionHeading>
      </motion.div>
      <div className="grid gap-3 lg:grid-cols-3">
        {caseStudies.map((study, index) => (
          <motion.article
            key={study.title}
            variants={fadeUp}
            custom={index}
            className="card-static flex h-full flex-col p-5"
          >
            <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-[#7ab2ff]">
              {study.eyebrow}
            </p>
            <h3 className="heading-font mt-3 text-lg font-bold leading-snug text-[#f4f4f5]">
              {study.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#71717a]">
              {study.description}
            </p>
            <div className="mt-5 grid gap-2">
              {study.metrics.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[#1e1e1e] bg-[#0d0d0d] px-3 py-2 text-xs font-medium text-[#a1a1aa]"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
              {study.tech.map((tech) => (
                <span key={tech} className="tag tag-neutral">
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

const ProjectCard = ({ project, index }) => (
  <motion.article
    variants={fadeUp}
    custom={index}
    className="card-static group flex h-full flex-col overflow-hidden"
  >
    <div className="project-media">
      <div
        className="heading-font flex h-20 w-20 items-center justify-center rounded-2xl border border-[#2563eb]/25 bg-[#2563eb]/10 text-2xl font-bold tracking-tight text-[#7ab2ff] transition-transform duration-300 group-hover:scale-105"
        aria-hidden="true"
      >
        {project.mark}
      </div>
      <span className="media-status">{project.type}</span>
    </div>
    <div className="flex flex-1 flex-col p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="heading-font text-lg font-bold text-[#f4f4f5]">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs font-medium text-[#7ab2ff]">
            {project.subtitle}
          </p>
        </div>
        <span className="shrink-0 font-mono text-[10px] text-[#5c5c66]">
          {project.year}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#a1a1aa]">
        {project.description}
      </p>
      <p className="mt-3 text-xs leading-relaxed text-[#71717a]">
        <span className="font-mono text-[9px] uppercase tracking-wider text-[#7ab2ff]">
          Outcome
        </span>{" "}
        {project.impact}
      </p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <span key={tech} className="tag tag-neutral">
            {tech}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="group/link mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-[#7ab2ff] focus-ring"
        >
          <IconBrandGithub size={15} />
          {project.linkLabel}
          <IconArrowUpRight
            size={14}
            className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
          />
        </a>
      )}
    </div>
  </motion.article>
);

const ProjectsSection = () => (
  <section id="projects" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="personal projects"
          sub="Selected independent work across application engineering, data analytics, and secure multi-tier architecture."
        >
          Built beyond the day job
        </SectionHeading>
      </motion.div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <motion.p
        variants={fadeUp}
        className="mt-5 text-xs leading-relaxed text-[#5c5c66]"
      >
        Source is linked only where a public repository is confirmed.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-5">
        <Link
          to="/archive/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#a1a1aa] transition-colors hover:text-[#7ab2ff] focus-ring"
        >
          View project archive
          <IconArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      </motion.div>
    </motion.div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading
          kicker="technical skills"
          sub="A production-focused toolkit spanning application layers, cloud delivery, quality engineering, and operations."
        >
          Enterprise engineering toolkit
        </SectionHeading>
      </motion.div>
      <div className="grid gap-3 sm:grid-cols-2">
        {skillGroups.map((group, index) => (
          <motion.article
            key={group.title}
            variants={fadeUp}
            custom={index}
            className="card-static p-5"
          >
            <div className="mb-4 flex items-center gap-2">
              <IconCode size={16} className="text-[#7ab2ff]" />
              <h3 className="heading-font text-sm font-bold text-[#f4f4f5]">
                {group.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`tag ${
                    group.core.includes(skill) ? "tag-core" : "tag-neutral"
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  </section>
);

const EducationSection = () => (
  <section id="education" className="py-14">
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={sectionViewport}
    >
      <motion.div variants={fadeUp}>
        <SectionHeading kicker="education">Academic foundation</SectionHeading>
      </motion.div>
      {education.map((item, index) => (
        <motion.article
          key={item.degree}
          variants={fadeUp}
          custom={index}
          className="card-static p-5 sm:p-6"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10">
                <IconSchool size={19} className="text-[#7ab2ff]" />
              </div>
              <div>
                <h3 className="heading-font text-base font-bold text-[#f4f4f5]">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#7ab2ff]">
                  {item.school}
                </p>
                <p className="mt-1 flex items-center gap-1 text-xs text-[#71717a]">
                  <IconMapPin size={12} />
                  {item.location}
                </p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#5c5c66]">
              {item.date}
            </span>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </section>
);

const ContactCard = ({ href, icon: Icon, label, detail, external = false }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noreferrer" : undefined}
    className="group flex items-center gap-4 rounded-xl border border-[#1e1e1e] p-5 transition-all hover:border-[#2563eb]/30 hover:bg-[#111] focus-ring"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2563eb]/10 transition-colors group-hover:bg-[#2563eb]/15">
      <Icon size={18} className="text-[#7ab2ff]" />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-[#f4f4f5]">{label}</p>
      <p className="truncate text-xs text-[#71717a]">{detail}</p>
    </div>
    <IconArrowUpRight
      size={14}
      className="ml-auto text-[#5c5c66] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </a>
);

const ContactSection = () => {
  const contactMethods = [
    {
      href: portfolio.links.linkedin,
      icon: IconBrandLinkedin,
      label: "LinkedIn",
      detail: "Connect professionally",
      external: true,
    },
    {
      href: portfolio.links.github,
      icon: IconBrandGithub,
      label: "GitHub",
      detail: "Explore public work",
      external: true,
    },
    ...(portfolio.links.email
      ? [
          {
            href: `mailto:${portfolio.links.email}`,
            icon: IconMail,
            label: "Email",
            detail: portfolio.links.email,
          },
        ]
      : []),
    ...(portfolio.links.phone
      ? [
          {
            href: `tel:${portfolio.links.phone.replace(/[^\d+]/g, "")}`,
            icon: IconPhone,
            label: "Phone",
            detail: portfolio.links.phone,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" className="py-14">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
      >
        <motion.div variants={fadeUp}>
          <SectionHeading
            kicker="contact"
            sub="For engineering opportunities, enterprise platform work, or professional collaboration, connect through one of the channels below."
          >
            Let’s start a conversation
          </SectionHeading>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="grid gap-3 sm:grid-cols-2"
        >
          {contactMethods.map((method) => (
            <ContactCard key={method.label} {...method} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const MainLayout = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const observedIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    observedIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [observedIds]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f4f4f5]">
      <a href="#home" className="skip-link">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1e1e1e] bg-[#0a0a0a]/95 backdrop-blur-lg lg:hidden">
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <img
              src={portfolio.image}
              alt=""
              className="h-8 w-8 rounded-full object-cover"
            />
            <div>
              <p className="heading-font text-sm font-semibold">
                {portfolio.name}
              </p>
              <p className="text-[9px] text-[#71717a]">{portfolio.shortTitle}</p>
            </div>
          </div>
          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-[#1a1a1a] focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <IconX size={20} /> : <IconMenu2 size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/65 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed bottom-0 left-0 top-0 z-50 w-[285px] overflow-y-auto border-r border-[#1e1e1e] bg-[#0a0a0a] lg:hidden"
            >
              <SidebarContent
                activeSection={activeSection}
                onNavigate={scrollToSection}
                onClose={() => setMobileMenuOpen(false)}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <aside className="fixed bottom-0 left-0 top-0 z-30 hidden w-[270px] flex-col border-r border-[#1e1e1e]/70 bg-[#0a0a0a] lg:flex">
        <SidebarContent
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
      </aside>

      <main className="min-h-screen pt-14 lg:ml-[270px] lg:pt-0">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 xl:px-16">
          <HeroSection onNavigate={scrollToSection} />
          <div className="section-divider" />
          <ExperienceSection />
          <div className="section-divider" />
          <ImpactSection />
          <div className="section-divider" />
          <CaseStudiesSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <EducationSection />
          <div className="section-divider" />
          <ContactSection />
        </div>

        <footer className="mt-20 border-t border-[#1e1e1e]">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-9 sm:flex-row sm:px-8 lg:px-12 xl:px-16">
            <p className="text-xs text-[#5c5c66]">
              © {new Date().getFullYear()} {portfolio.name}
            </p>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#3f3f46]">
                Java · Cloud · Enterprise systems
              </span>
              <SocialLinks compact />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MainLayout;
