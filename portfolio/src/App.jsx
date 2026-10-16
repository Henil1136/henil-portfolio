import {
  profile,
  projects,
  experience,
  skills,
  education,
  publication,
  certifications,
  languages,
} from "./data.js";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function SectionHeading({ eyebrow, title, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="wrap bar">
          <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
            <span className="brand-mark">H</span>
            <span>Henil<span className="brand-period">.</span></span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let’s talk <span aria-hidden="true">↗</span></a>
        </div>
      </header>

      <main id="main" className="wrap">
        <section id="top" className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Full-stack developer · Ahmedabad, India</p>
            <h1>Building thoughtful <span>digital experiences.</span></h1>
            <p className="hero-intro">
              I’m <strong>Henil Prajapati</strong>, a {profile.title.toLowerCase()} who enjoys turning
              good ideas into useful, polished products for the web.
            </p>
            <div className="actions">
              <a className="btn" href="#projects">Explore my work <span aria-hidden="true">↘</span></a>
              <a className="btn ghost" href={profile.cv} download>Download CV <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href={profile.github} {...ext}>GitHub <span aria-hidden="true">↗</span></a>
              <a href={profile.linkedin} {...ext}>LinkedIn <span aria-hidden="true">↗</span></a>
              <a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="hero-art" aria-label="Henil Prajapati, developer">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-card">
              <span className="art-card-label">Developer / 2026</span>
              <span className="monogram">H<span>P</span></span>
              <span className="art-card-bottom"><span className="status-dot" /> Open to opportunities</span>
            </div>
            <span className="float-chip chip-react">React.js</span>
            <span className="float-chip chip-node">Node.js</span>
            <span className="float-chip chip-db">MongoDB</span>
            <span className="art-index">01 — 03</span>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section id="about" className="content-section about-section">
          <SectionHeading eyebrow="A little about me" title="Curious by nature. Builder by choice." />
          <div className="about-grid">
            <div>
              {profile.summary.map((paragraph) => <p className="body-copy" key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="stat-grid" aria-label="Portfolio overview">
              <div className="stat"><strong>{projects.length.toString().padStart(2, "0")}</strong><span>Projects built</span></div>
              <div className="stat"><strong>{experience.length.toString().padStart(2, "0")}</strong><span>Internships</span></div>
              <div className="stat"><strong>{skills.length.toString().padStart(2, "0")}</strong><span>Skill areas</span></div>
            </div>
          </div>
        </section>

        <section id="projects" className="content-section">
          <SectionHeading eyebrow="Selected work" title="Things I’ve built." />
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span className="project-number">0{index + 1} / SELECTED PROJECT</span>
                  <span className="project-arrow" aria-hidden="true">↗</span>
                </div>
                <h3>{project.name}</h3>
                <p className="project-kind">{project.kind}</p>
                <p className="project-description">{project.points[0]}</p>
                <ul className="project-highlights">
                  {project.points.slice(1).map((point) => <li key={point}>{point}</li>)}
                </ul>
                <ul className="tag-list" aria-label="Technologies">
                  {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} {...ext}>{link.label} <span aria-hidden="true">↗</span></a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="content-section">
          <SectionHeading eyebrow="Where I’ve learned" title="Experience & education." />
          <div className="timeline">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-content">
                  <h3>{item.role}</h3>
                  <p className="meta">{item.org}</p>
                  <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
            <article className="timeline-item">
              <div className="timeline-date">{education.date}</div>
              <div className="timeline-content">
                <h3>{education.degree}</h3>
                <p className="meta">{education.school}</p>
                <p>{education.detail}</p>
              </div>
            </article>
          </div>
        </section>

        <section id="skills" className="content-section">
          <SectionHeading eyebrow="My toolkit" title="Technologies I work with." />
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.group}>
                <h3>{group.group}</h3>
                <ul className="tag-list">
                  {group.items.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="highlights" className="content-section">
          <SectionHeading eyebrow="Beyond the code" title="Research & recognition." />
          <div className="highlight-grid">
            <article className="highlight-card">
              <span className="highlight-icon" aria-hidden="true">✳</span>
              <p className="eyebrow">Publication · {publication.date}</p>
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
            </article>
            {certifications.map((certification) => (
              <article className="highlight-card" key={certification.title}>
                <span className="highlight-icon" aria-hidden="true">↗</span>
                <p className="eyebrow">{certification.org} · {certification.date}</p>
                <h3>{certification.title}</h3>
                {certification.note && <p>{certification.note}</p>}
              </article>
            ))}
          </div>
          <p className="language-note"><span>Languages</span> {languages}</p>
        </section>

        <section id="contact" className="contact-section">
          <p className="eyebrow"><span className="status-dot" /> Have a project in mind?</p>
          <h2>Let’s make something <span>great together.</span></h2>
          <p>I’m looking for junior full-stack and software engineering opportunities. I’d love to hear from you.</p>
          <a className="btn" href={`mailto:${profile.email}`}>Say hello <span aria-hidden="true">↗</span></a>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <span>{profile.location}</span>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <a className="brand" href="#top"><span className="brand-mark">H</span><span>Henil<span className="brand-period">.</span></span></a>
        <p>Designed & built by Henil Prajapati · © {new Date().getFullYear()}</p>
        <a className="back-to-top" href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
