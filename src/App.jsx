import "./App.css";

function App() {
  return (
    <>
      <header className="navbar">
        <div className="container nav-inner">
          <a href="#home" className="brand">
            <div className="brand-mark">K</div>

            <div className="brand-copy">
              <strong>KASHAN</strong>
              <span>BUILD. DESIGN. GROW.</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-button">
            Start a Project <span>→</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">
                WEB DEVELOPER <span>•</span> DIGITAL MARKETER
              </p>

              <h1>
                I build high-converting websites for modern businesses.
              </h1>

              <p className="hero-description">
                From idea to launch — I help businesses create fast, modern and
                professional websites designed to communicate clearly and turn
                visitors into enquiries.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="button button-primary">
                  Start a Project <span>→</span>
                </a>

                <a href="#projects" className="button button-secondary">
                  View My Work
                </a>
              </div>

              <div className="hero-stats">
                <div className="stat">
                  <strong>3+</strong>
                  <span>Featured Projects</span>
                </div>

                <div className="stat">
                  <strong>Responsive</strong>
                  <span>Development</span>
                </div>

                <div className="stat">
                  <strong>Modern</strong>
                  <span>Tech Stack</span>
                </div>

                <div className="stat">
                  <strong>Available</strong>
                  <span>For New Projects</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-glow"></div>

              <div className="browser-card">
                <div className="browser-top">
                  <div className="browser-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <span>nova-estates.vercel.app</span>
                </div>

                <img
                  src="/images/nova-estates.jpg"
                  alt="Nova Estates real estate website"
                />
              </div>

              <div className="floating-project">
                <span className="blue-dot"></span>

                <div>
                  <strong>NOVA ESTATES</strong>
                  <span>Real Estate Website · React</span>
                </div>
              </div>

              <div className="hero-note">
                Ideas
                <br />
                into impact.
                <span>↙</span>
              </div>
            </div>
          </div>
        </section>

        <section className="tech-strip">
          <div className="container tech-inner">
            <p>TECHNOLOGIES I WORK WITH</p>

            <div className="tech-list">
              <span>React</span>
              <span>Next.js</span>
              <span>JavaScript</span>
              <span>HTML / CSS</span>
              <span>Git</span>
              <span>Vercel</span>
            </div>

            <div className="tech-tagline">
              MODERN TOOLS.
              <br />
              BUSINESS-FOCUSED BUILDS.
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="section-label">FEATURED PROJECTS</p>
                <h2>Real Projects. Real Skills.</h2>
              </div>
            </div>

            <div className="projects-grid">
              <article className="project-card">
                <a
                  href="https://nova-estates-ochre.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-image"
                >
                  <img
                    src="/images/nova-estates.jpg"
                    alt="Nova Estates website"
                  />
                </a>

                <div className="project-body">
                  <div className="project-topline">
                    <span>NOVA ESTATES</span>
                    <span className="project-badge">Featured</span>
                  </div>

                  <h3>Nova Estates</h3>

                  <p>
                    A premium Dubai real estate concept website focused on
                    modern presentation, responsive development and property
                    discovery.
                  </p>

                  <div className="project-tags">
                    <span>React</span>
                    <span>Vite</span>
                    <span>Responsive</span>
                  </div>

                  <a
                    href="https://nova-estates-ochre.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live Site <span>→</span>
                  </a>
                </div>
              </article>

              <article className="project-card">
                <a
                  href="https://learvix-ai.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-image"
                >
                  <img src="/images/learvix-ai.jpg" alt="Learvix AI website" />
                </a>

                <div className="project-body">
                  <div className="project-topline">
                    <span>LEARVIX</span>
                    <span className="project-badge">Next.js</span>
                  </div>

                  <h3>Learvix AI</h3>

                  <p>
                    A student-focused learning platform featuring practical AI
                    study guides, educational resources and a clean reading
                    experience.
                  </p>

                  <div className="project-tags">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>SEO</span>
                  </div>

                  <a
                    href="https://learvix-ai.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live Site <span>→</span>
                  </a>
                </div>
              </article>

              <article className="project-card">
                <a
                  href="https://socialscaleco.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="project-image"
                >
                  <img
                    src="/images/social-scale-co.jpg"
                    alt="Social Scale Co website"
                  />
                </a>

                <div className="project-body">
                  <div className="project-topline">
                    <span>SOCIAL SCALE CO.</span>
                    <span className="project-badge">Agency Website</span>
                  </div>

                  <h3>Social Scale Co.</h3>

                  <p>
                    A modern marketing agency website built to present services,
                    establish credibility and guide potential clients toward
                    enquiry.
                  </p>

                  <div className="project-tags">
                    <span>HTML / CSS</span>
                    <span>JavaScript</span>
                    <span>Responsive</span>
                  </div>

                  <a
                    href="https://socialscaleco.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    View Live Site <span>→</span>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-heading services-heading">
              <div>
                <p className="section-label">SERVICES</p>
                <h2>How I Can Help Your Business</h2>
              </div>

              <p>
                Modern websites and digital experiences built around real
                business goals.
              </p>
            </div>

            <div className="services-grid">
              <div className="service-card">
                <span className="service-icon">▣</span>
                <h3>Business Websites</h3>
                <p>
                  Modern, responsive websites designed to build trust and turn
                  visitors into enquiries.
                </p>
                <span className="service-arrow">→</span>
              </div>

              <div className="service-card">
                <span className="service-icon">◇</span>
                <h3>Landing Pages</h3>
                <p>
                  Focused landing pages built for services, offers and
                  campaigns with clear calls to action.
                </p>
                <span className="service-arrow">→</span>
              </div>

              <div className="service-card">
                <span className="service-icon">↗</span>
                <h3>Website Redesign</h3>
                <p>
                  Upgrade an outdated website with a stronger design,
                  responsive layout and improved user experience.
                </p>
                <span className="service-arrow">→</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-copy">
              <p className="section-label">ABOUT ME</p>

              <h2>
                A freelancer who
                <br />
                cares about results.
              </h2>

              <p>
                I&apos;m Kashan, a frontend developer and digital marketer based
                in Lahore, Pakistan. I build clean, modern and business-focused
                websites while combining development with design and marketing
                thinking.
              </p>

              <a href="#contact" className="button button-secondary">
                Work With Me <span>→</span>
              </a>
            </div>

            <div className="about-values">
              <div>
                <strong>Problem Solver</strong>
                <span>I focus on solutions, not just code.</span>
              </div>

              <div>
                <strong>Client-Focused</strong>
                <span>Clear communication and business goals come first.</span>
              </div>

              <div>
                <strong>Always Learning</strong>
                <span>Improving tools, skills and better ways to build.</span>
              </div>

              <div>
                <strong>Based in Lahore</strong>
                <span>Available to work with clients worldwide.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-card">
            <div>
              <p className="section-label">LET&apos;S WORK TOGETHER</p>
              <h2>Have a project in mind?</h2>
              <p>Let&apos;s turn your idea into a strong digital experience.</p>
            </div>

            <div className="contact-actions">
              <a
                href="mailto:socialscaleco.pk@gmail.com"
                className="button button-primary"
              >
                Start a Project <span>→</span>
              </a>

              <a
                href="https://wa.me/923294030695"
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Kashan</span>
          <span>Frontend Developer & Digital Marketer</span>
        </div>
      </footer>
    </>
  );
}

export default App;