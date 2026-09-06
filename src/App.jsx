import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">KASHAN.</a>

          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let's Talk ↗
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-container">
            <p className="hero-label">
              FRONTEND DEVELOPER / DIGITAL MARKETER
            </p>

            <h1>
              I build websites
              <br />
              that make businesses
              <br />
              <span>worth choosing.</span>
            </h1>

            <div className="hero-bottom">
              <p>
                I create modern, responsive and conversion-focused digital
                experiences for businesses and growing brands.
              </p>

              <div className="hero-actions">
                <a href="#work" className="primary-link">
                  View Selected Work ↓
                </a>
                <a href="#contact" className="secondary-link">
                  Let's Work Together ↗
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="work-section reveal" id="work">
          <div className="work-container">
            <div className="work-heading">
              <p className="work-label">SELECTED WORK / 01</p>

              <h2>
                Built to look good.
                <br />
                Designed to work.
              </h2>

              <p className="work-intro">
                A selection of digital experiences focused on strong visual identity,
                responsive design and clear business communication.
              </p>
            </div>

            <article className="featured-project">
              <a
                href="https://nova-estates-ochre.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="project-image-wrap"
              >
                <img
                  src="/images/nova-estates.jpg"
                  alt="Nova Estates luxury real estate website"
                />

                <span className="project-view">
                  View Live ↗
                </span>
              </a>

              <div className="project-info">
                <div className="project-title">
                  <span>01</span>

                  <div>
                    <p>REAL ESTATE / REACT</p>
                    <h3>Nova Estates</h3>
                  </div>
                </div>

                <p className="project-description">
                  A premium Dubai real estate concept website built to create a refined,
                  trustworthy and conversion-focused digital experience.
                </p>

                <div className="project-meta">
                  <span>React</span>
                  <span>Vite</span>
                  <span>Responsive Design</span>
                  <span>2026</span>
                </div>
              </div>
            </article>
          </div>
          <article className="learvix-project">
            <a
              href="https://learvix-ai.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="learvix-preview"
            >
              <img
                src="/images/learvix-ai.jpg"
                alt="Learvix AI learning platform"
              />

              <span className="project-view">View Live ↗</span>
            </a>

            <div className="project-info">
              <div className="project-title">
                <span>02</span>

                <div>
                  <p>AI EDUCATION / NEXT.JS</p>
                  <h3>Learvix AI</h3>
                </div>
              </div>

              <p className="project-description">
                A student-focused learning platform featuring practical AI tools,
                study guides and educational resources in a clean responsive experience.
              </p>

              <div className="project-meta">
                <span>Next.js</span>
                <span>React</span>
                <span>Responsive Design</span>
                <span>2026</span>
              </div>
            </div>
          </article>
          <article className="social-project">
            <a
              href="https://socialscaleco.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="social-preview"
            >
              <img
                src="/images/social-scale-co.jpg"
                alt="Social Scale Co. digital marketing agency website"
              />

              <span className="project-view">View Live ↗</span>
            </a>

            <div className="project-info">
              <div className="project-title">
                <span>03</span>

                <div>
                  <p>MARKETING AGENCY / BUSINESS WEBSITE</p>
                  <h3>Social Scale Co.</h3>
                </div>
              </div>

              <p className="project-description">
                A modern agency website created to present digital marketing services,
                establish credibility and guide potential clients toward enquiry.
              </p>

              <div className="project-meta">
                <span>HTML / CSS</span>
                <span>JavaScript</span>
                <span>Responsive Design</span>
                <span>2026</span>
              </div>
            </div>
          </article>
        </section>
        <section className="services-section reveal" id="services">
          <div className="services-container">

            <div className="services-header">
              <p className="services-label">WHAT I DO / 04</p>

              <h2>
                Digital work built
                <br />
                around <span>business goals.</span>
              </h2>

              <p className="services-intro">
                From the first impression to the final click, I create digital
                experiences that help businesses look credible, communicate clearly
                and move people to action.
              </p>
            </div>

            <div className="services-list">

              <div className="service-row">
                <span className="service-number">01</span>

                <h3>Website Development</h3>

                <p>
                  Modern, responsive websites built around your business,
                  brand and goals.
                </p>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-row">
                <span className="service-number">02</span>

                <h3>Landing Pages</h3>

                <p>
                  Focused landing pages designed to communicate your offer
                  clearly and drive action.
                </p>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-row">
                <span className="service-number">03</span>

                <h3>Website Redesign</h3>

                <p>
                  Turning outdated websites into modern, credible and
                  responsive digital experiences.
                </p>

                <span className="service-arrow">↗</span>
              </div>

              <div className="service-row">
                <span className="service-number">04</span>

                <h3>Digital Marketing</h3>

                <p>
                  Social media strategy, content and paid advertising designed
                  to strengthen your online presence.
                </p>

                <span className="service-arrow">↗</span>
              </div>

            </div>

          </div>
        </section>
        <section className="about-section reveal" id="about">
          <div className="about-container">

            <div className="about-top">
              <p className="about-label">ABOUT / APPROACH</p>

              <h2>
                Developer mindset.
                <br />
                <span>Marketer&apos;s perspective.</span>
              </h2>
            </div>

            <div className="about-content">
              <div className="about-statement">
                <p>
                  I don&apos;t just think about how a website looks.
                  I think about what it needs to communicate, who it needs
                  to reach, and what action it should drive.
                </p>
              </div>

              <div className="about-copy">
                <p>
                  I&apos;m Kashan, a frontend developer and digital marketer
                  focused on building modern digital experiences for businesses
                  and growing brands.
                </p>

                <p>
                  My background in design and marketing helps me approach
                  development from more than just a technical perspective —
                  combining visual clarity, responsive development and
                  business-focused thinking.
                </p>

                <a href="#contact" className="about-link">
                  Let&apos;s work together ↗
                </a>
              </div>
            </div>

            <div className="capabilities">
              <p className="capabilities-label">CAPABILITIES</p>

              <div className="capabilities-list">
                <span>React</span>
                <span>JavaScript</span>
                <span>Next.js</span>
                <span>HTML / CSS</span>
                <span>Responsive Design</span>
                <span>Git / GitHub</span>
                <span>Vercel</span>
                <span>Digital Marketing</span>
              </div>
            </div>

          </div>
        </section>
        <section className="contact-section reveal" id="contact">
          <div className="contact-container">
            <p className="contact-label">LET&apos;S WORK TOGETHER / CONTACT</p>

            <h2>
              Have a project
              <br />
              in mind?
              <br />
              <span>Let&apos;s make it happen.</span>
            </h2>

            <div className="contact-bottom">
              <p>
                Need a website, landing page or a stronger digital presence?
                Tell me what you&apos;re working on.
              </p>

              <div className="contact-actions">
                <a
                  href="mailto:socialscaleco.pk@gmail.com"
                  className="contact-primary"
                >
                  Email Me ↗
                </a>

                <a
                  href="https://wa.me/923294030695"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-secondary"
                >
                  WhatsApp ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="portfolio-footer">
          <div className="footer-container">
            <div className="footer-top">
              <a href="#home" className="footer-logo">
                KASHAN.
              </a>

              <p>
                Frontend Developer
                <br />
                & Digital Marketer
              </p>
            </div>

            <div className="footer-wordmark">
              KASHAN
            </div>

            <div className="footer-bottom">
              <span>© 2026 MIRZA KASHAN</span>

              <div className="footer-links">
                <a href="mailto:socialscaleco.pk@gmail.com">
                  Email
                </a>

                <a
                  href="https://wa.me/923294030695"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>

                <a href="#home">
                  Back to top ↑
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;