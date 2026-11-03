import { useState } from 'react'
import './App.css'

const EMAIL = 'taylor_june@hotmail.com'

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy my email address:', EMAIL)
    }
  }

  return (
    <button className="copy-email" onClick={copy} type="button">
      {copied ? 'Copied to clipboard ✓' : `${EMAIL} · copy`}
    </button>
  )
}

const skillGroups = [
  {
    label: 'Languages',
    skills: ['Python', 'C#', 'TypeScript', 'SQL'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', '.NET', 'Node.js', 'REST APIs', 'Microservices', 'Async jobs'],
  },
  {
    label: 'Data',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cosmos DB'],
  },
  {
    label: 'Cloud & delivery',
    skills: [
      'Azure',
      'GCP',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'Azure DevOps',
    ],
  },
  {
    label: 'Applied AI',
    skills: [
      'LLM agents',
      'RAG',
      'Azure OpenAI',
      'Vertex AI',
      'LangChain',
      'CrewAI',
      'LiteLLM',
      'Langfuse',
      'Vector databases',
    ],
  },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path d="M3.5 12.5 12 4m0 0H5m7 0v7" />
    </svg>
  )
}

function App() {
  return (
    <>
      <header className="site-header">
        <a aria-label="Taylor Roberts, home" className="wordmark" href="#home">
          <span className="wordmark-mark">TR</span>
          <span>Taylor Roberts</span>
        </a>
        <nav aria-label="Main navigation" className="main-nav">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Selected work</a>
        </nav>
        <a className="header-contact" href="mailto:taylor_june@hotmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              SOFTWARE DEVELOPER · ESPOO, FINLAND
            </p>
            <h1 id="hero-title">
              Thoughtful
              <br />
              software.
              <br />
              <span>Real-world</span>
              <br />
              impact.
            </h1>
            <div className="hero-bottom">
              <p>
                I&apos;m a full-stack developer building dependable APIs,
                React interfaces, cloud services and practical AI features
                for complex, highly regulated work.
              </p>
              <a className="button button-lime" href="#experience">
                Explore my work <ArrowIcon />
              </a>
            </div>
          </div>

          <div aria-label="A snapshot of my work" className="hero-visual">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-sun" />
            <div className="visual-caption">
              <span>ENGINEERING AT THE INTERSECTION OF</span>
              <strong>People, platforms &amp; possibility.</strong>
            </div>
            <div className="visual-index">60° 12&apos; N&nbsp; / &nbsp;24° 57&apos; E</div>
            <div className="visual-stamp">
              <span>BUILDING</span>
              <span>WHAT&apos;S</span>
              <span>NEXT <b>↗</b></span>
            </div>
          </div>
        </section>

        <div aria-label="Core technologies" className="tech-strip">
          <span className="strip-label">MY EVERYDAY TOOLKIT</span>
          <span>TypeScript</span>
          <span className="strip-separator">✳</span>
          <span>React</span>
          <span className="strip-separator">✳</span>
          <span>Python / FastAPI</span>
          <span className="strip-separator">✳</span>
          <span>C# / .NET</span>
          <span className="strip-separator">✳</span>
          <span>PostgreSQL</span>
          <span className="strip-separator">✳</span>
          <span>Azure + GCP</span>
          <span className="strip-separator">✳</span>
          <span>LLMs &amp; RAG</span>
        </div>

        <section aria-labelledby="about-title" className="section about-section" id="about">
          <div className="section-label">
            <span>01</span>
            <span>THE SHORT VERSION</span>
          </div>
          <div className="about-content">
            <h2 id="about-title">
              I make complicated
              <br />
              things <span className="text-accent">work better.</span>
            </h2>
            <div className="about-details">
              <p>
                I&apos;m a full-stack developer with nearly five years of
                experience building production software in tax, legal and
                audit. I work across TypeScript and React on the front end,
                Python, FastAPI and C# on the back end, and the cloud
                infrastructure that runs it all. I also build LLM-powered
                features, with guardrails, benchmarking and observability, and
                I&apos;m the AI enabler for my team, choosing AI when it&apos;s
                the right fit.
              </p>
              <p>
                At PwC Finland, I&apos;ve helped teams ship reliable internal
                platforms. I care about asking the right questions early,
                clear architecture, dependable delivery and making good
                engineering practices easier for the people around me.
              </p>
              <a className="text-link" href="mailto:taylor_june@hotmail.com">
                More about working together <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="approach">
            <div className="approach-intro">
              <p className="eyebrow">HOW I WORK</p>
              <h3>
                Question first,
                <br />
                <span className="text-accent">build second.</span>
              </h3>
              <p>
                I like to ask whether we&apos;re solving the right problem
                before choosing how to solve it. That applies to every
                technology choice, AI included: it&apos;s powerful, but not the
                answer to every use case, and sometimes a simpler approach is
                better.
              </p>
            </div>
            <ul className="approach-list">
              <li>
                <strong>Understand the problem</strong>
                <span>What are we trying to achieve, and for whom?</span>
              </li>
              <li>
                <strong>Interrogate the data</strong>
                <span>Is it good, complete and reliable enough to build on?</span>
              </li>
              <li>
                <strong>Choose the right tool</strong>
                <span>Pick what fits, and use AI only where it adds value.</span>
              </li>
              <li>
                <strong>Measure the result</strong>
                <span>Tests, benchmarks and observability show whether it works.</span>
              </li>
            </ul>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>~5</strong>
              <span>years building software</span>
            </div>
            <div className="stat">
              <strong>UI → API</strong>
              <span>to cloud, plus AI where it fits</span>
            </div>
            <div className="stat">
              <strong>FI <span className="stat-star">✳</span></strong>
              <span>based in Espoo, Finland</span>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="experience-title"
          className="section experience-section"
          id="experience"
        >
          <div className="section-label">
            <span>02</span>
            <span>WHERE I&apos;VE MADE A DIFFERENCE</span>
          </div>
          <div className="section-heading-row">
            <h2 id="experience-title">Experience</h2>
            <a
              className="button button-outline"
              href={`${import.meta.env.BASE_URL}taylor-roberts-resume.pdf`}
              rel="noreferrer"
              target="_blank"
            >
              View full résumé <ArrowIcon />
            </a>
          </div>

          <article className="experience-card">
            <div className="company-heading">
              <div>
                <p className="eyebrow">MAY 2022 — PRESENT · HELSINKI, FINLAND</p>
                <h3>PricewaterhouseCoopers</h3>
              </div>
              <span className="company-tag">PwC</span>
            </div>
            <div className="role-list">
              <div className="role">
                <div className="role-meta">
                  <h4>Senior Developer</h4>
                  <span>SEP 2025 — PRESENT</span>
                </div>
                <ul>
                  <li>
                    Designed a C# service for document-management integrations,
                    with an extensible architecture for new providers.
                  </li>
                  <li>
                    Provision Azure and GCP services with Terraform and Docker,
                    and standardised team CI/CD, review practices and automated
                    testing.
                  </li>
                  <li>
                    Built reusable integrations with Harvey AI, M-Files,
                    Salesforce and SharePoint.
                  </li>
                  <li>
                    Operate production LLM services on Azure OpenAI and Vertex
                    AI, using guardrails, Langfuse tracing and benchmarks to
                    measure quality and catch regressions.
                  </li>
                </ul>
              </div>
              <div className="role">
                <div className="role-meta">
                  <h4>Developer</h4>
                  <span>JUN 2024 — SEP 2025</span>
                </div>
                <ul>
                  <li>
                    Led architecture and delivery for high-impact internal
                    projects, translating business needs into technical plans.
                  </li>
                  <li>
                    Built CI/CD pipelines with GitHub Actions and Azure DevOps,
                    and a shared Langfuse package for standardised tracing.
                  </li>
                  <li>
                    Built AI agents for sensitive-data redaction, document
                    retrieval and trial-balance mapping, with guardrails and
                    output benchmarking.
                  </li>
                </ul>
              </div>
              <div className="role">
                <div className="role-meta">
                  <h4>Trainee Developer</h4>
                  <span>MAY 2022 — JUN 2024</span>
                </div>
                <ul>
                  <li>
                    Built full-stack tax and legal analytics tools, FastAPI
                    services and AI-assisted document workflows over real
                    client material.
                  </li>
                  <li>
                    Worked directly with consultants to shape requirements,
                    deliver features and improve tools through feedback.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="previous-role">
            <div>
              <p className="eyebrow">AUG 2020 — MAY 2022 · DUBLIN, IRELAND</p>
              <h3>Olus Education</h3>
            </div>
            <div>
              <h4>Tech Educator</h4>
              <p>
                Taught coding to students aged 8–18, designing interactive
                lessons in Python, JavaScript, HTML, CSS and more.
              </p>
            </div>
          </article>
        </section>

        <section aria-labelledby="work-title" className="section work-section" id="work">
          <div className="section-label">
            <span>03</span>
            <span>PROJECTS THAT MATTER</span>
          </div>
          <div className="work-card">
            <div className="work-copy">
              <p className="eyebrow">M.SC. THESIS · PWC FINLAND · 2024</p>
              <h2 id="work-title">
                Generative AI
                <br />
                for tax &amp; legal
                <br />
                consultancy.
              </h2>
              <p className="work-description">
                How can consultants find the right precedent across thousands
                of court cases? I researched and built a proof of concept that
                lets them ask questions of past client cases—and get grounded
                insights back.
              </p>
              <div className="work-tags">
                <span>Python</span>
                <span>FastAPI</span>
                <span>React</span>
                <span>PostgreSQL</span>
                <span>RAG</span>
                <span>M-Files</span>
              </div>
            </div>
            <div aria-label="Illustration of a retrieval augmented generation workflow" className="work-visual">
              <div className="flow-label flow-label-top">A QUESTION IN, A CASE OUT</div>
              <div className="flow-node flow-question">
                <span className="flow-icon">?</span>
                <span>Consultant&apos;s question</span>
              </div>
              <div className="flow-line"><i /></div>
              <div className="flow-node flow-search">
                <span className="flow-icon">⌕</span>
                <span>Semantic search</span>
              </div>
              <div className="flow-line"><i /></div>
              <div className="flow-node flow-answer">
                <span className="flow-icon">✳</span>
                <span>Grounded insight</span>
              </div>
              <div className="flow-documents">
                <span>CASE 014</span>
                <span>CASE 028</span>
                <span>CASE 103</span>
                <span>+2,400</span>
              </div>
              <div className="flow-label flow-label-bottom">
                REAL CASES · RELEVANT ANSWERS
              </div>
            </div>
          </div>
          <p className="project-outcome">
            <span>THE OUTCOME</span>
            The proof of concept helped spark wider generative AI adoption
            across the team.
          </p>

          <div className="work-card work-card-reverse">
            <div className="work-copy">
              <p className="eyebrow">PERSONAL PROJECT · CLIMBING</p>
              <h2 id="climbing-title">
                Climbing
                <br />
                technique
                <br />
                analyser.
              </h2>
              <p className="work-description">
                I had plenty of video of myself climbing, but no good way to
                tell what to improve. So I built a tool that analyses body
                position and climbing technique, using research on optimal
                body position and footwork as its reference.
              </p>
              <div className="work-tags">
                <span>Python</span>
                <span>MediaPipe</span>
                <span>Pose tracking</span>
                <span>Biomechanics</span>
              </div>
              <a
                className="text-link project-link"
                href="https://github.com/taylorrobertss/Climbing-Analysis-Tool"
                rel="noreferrer"
                target="_blank"
              >
                View on GitHub <ArrowIcon />
              </a>
            </div>
            <div aria-label="Illustration of a climber's body position being analysed" className="work-visual climb-visual" role="img">
              <div className="flow-label flow-label-top">BODY POSITION · FOOTWORK</div>
              <svg aria-hidden="true" className="climb-figure" viewBox="0 0 300 330">
                <line className="climb-wall" x1="250" x2="250" y1="20" y2="310" />
                <g className="climb-holds">
                  <circle cx="250" cy="62" r="7" />
                  <circle cx="250" cy="140" r="7" />
                  <circle cx="250" cy="235" r="7" />
                  <circle cx="250" cy="290" r="7" />
                </g>
                <line className="climb-gravity" x1="168" x2="168" y1="190" y2="305" />
                <g className="climb-body">
                  <polyline points="178,98 205,80 250,62" />
                  <polyline points="178,98 212,128 250,140" />
                  <line x1="178" x2="168" y1="98" y2="190" />
                  <polyline points="168,190 212,222 250,235" />
                  <polyline points="168,190 148,246 160,290" />
                  <circle className="climb-head" cx="186" cy="68" r="14" />
                </g>
                <g className="climb-joints">
                  <circle cx="178" cy="98" r="4" />
                  <circle cx="168" cy="190" r="4" />
                  <circle cx="205" cy="80" r="4" />
                  <circle cx="212" cy="128" r="4" />
                  <circle cx="212" cy="222" r="4" />
                  <circle cx="148" cy="246" r="4" />
                </g>
                <text className="climb-note" x="30" y="95">STRAIGHT ARMS</text>
                <text className="climb-note" x="30" y="195">HIPS TO WALL</text>
                <text className="climb-note" x="30" y="315">BALANCE LINE</text>
              </svg>
              <div className="flow-label flow-label-bottom">
                WHAT TO IMPROVE, FROM YOUR OWN VIDEO
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="skills-title" className="section skills-section">
          <div className="section-label">
            <span>04</span>
            <span>TOOLS OF THE TRADE</span>
          </div>
          <div className="skills-content">
            <h2 id="skills-title">
              The right tool
              <br />
              for <span className="text-accent">the job.</span>
            </h2>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.label}>
                  <h3>{group.label}</h3>
                  <div className="skill-list">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="education-title" className="section education-section">
          <div className="section-label">
            <span>05</span>
            <span>ALWAYS LEARNING</span>
          </div>
          <div className="education-content">
            <h2 id="education-title">Education</h2>
            <div className="education-list">
              <article className="education-item">
                <div>
                  <h3>University of Helsinki</h3>
                  <p>MSc Computer Science · Software Engineering</p>
                </div>
                <span>2022 — 2024</span>
              </article>
              <article className="education-item">
                <div>
                  <h3>Maynooth University</h3>
                  <p>BA Computer Science and International Business</p>
                  <p className="education-note">
                    Exchange year at Aalto University · Communications Manager,
                    ESN Aalto
                  </p>
                </div>
                <span>2017 — 2021</span>
              </article>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="personal-title"
          className="section personal-section"
          id="about-me"
        >
          <div className="section-label">
            <span>06</span>
            <span>THE PERSON BEHIND THE CODE</span>
          </div>
          <div className="personal-content">
            <div className="personal-intro">
              <h2 id="personal-title">
                A little more
                <br />
                <span className="text-accent">about me.</span>
              </h2>
              <p>
                Away from the screen, you&apos;ll usually find me climbing,
                looking after my plants, or spending time with my dog. I&apos;m
                originally from Ireland and now call Finland home.
              </p>
            </div>
            <div className="personal-cards">
              <article className="personal-card personal-climbing">
                <span aria-hidden="true" className="personal-icon">↗</span>
                <span className="personal-card-label">ON THE WALL</span>
                <h3>Climbing</h3>
                <p>A good reason to step away from the screen.</p>
              </article>
              <article className="personal-card personal-plants">
                <span aria-hidden="true" className="personal-icon">✳</span>
                <span className="personal-card-label">A BIT OF GREEN</span>
                <h3>Plant person</h3>
                <p>Always happy to make room for one more plant.</p>
              </article>
              <article className="personal-card personal-dog">
                <span aria-hidden="true" className="personal-icon">♡</span>
                <span className="personal-card-label">BEST COMPANY</span>
                <h3>Dog person</h3>
                <p>My favourite excuse to get outside.</p>
              </article>
              <article className="personal-card personal-roots">
                <span aria-hidden="true" className="personal-icon">⌂</span>
                <span className="personal-card-label">IRISH ROOTS · FINNISH HOME</span>
                <h3>Ireland to Finland</h3>
                <p>From Ireland, now making a home in Espoo.</p>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <p className="eyebrow">HAVE AN INTERESTING CHALLENGE?</p>
          <h2 id="contact-title">
            Let&apos;s make
            <br />
            something <span>matter.</span>
          </h2>
          <a className="button button-lime" href="mailto:taylor_june@hotmail.com">
            Get in touch <ArrowIcon />
          </a>
          <p className="contact-email">
            No mail app opening? <CopyEmailButton />
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <a aria-label="Back to top" className="footer-mark" href="#home">
          TR
        </a>
        <span>Designed &amp; built with care · Espoo, Finland</span>
        <a href="mailto:taylor_june@hotmail.com">Say hello <ArrowIcon /></a>
      </footer>
    </>
  )
}

export default App
