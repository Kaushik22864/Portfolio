import React, { useEffect, useState } from 'react'


function Header({onNavClick, active}){
  return (
    <header className="site-header">
      <div className="wrap">
        <a className="brand" href="#home" onClick={e=>onNavClick(e,'home')}>Kaushik Raj Joshi</a>
        <nav className="nav">
          {['home','about','skills','projects','experience','education','certificates','contact'].map(k=> (
            <a key={k} href={'#'+k} onClick={e=>onNavClick(e,k)} className={active===k? 'active':''}>{k[0].toUpperCase()+k.slice(1)}</a>
          ))}
        </nav>
        <button className="nav-toggle" aria-expanded="false">☰</button>
      </div>
    </header>
  )
}

function Section({id, children, className}){
  return (
    <section id={id} className={"section " + (className||'')}>{children}</section>
  )
}

export default function App(){
  const [active, setActive] = useState('home')
  const year = new Date().getFullYear()

  useEffect(()=>{
    const sections = Array.from(document.querySelectorAll('main section'))
    function onScroll(){
      const pos = window.scrollY + 120
      let current = sections[0]
      for(const s of sections){ if(s.offsetTop <= pos) current = s }
      setActive(current.id)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  function scrollTo(e, id){
    e.preventDefault()
    const el = document.getElementById(id)
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'})
  }



  return (
    <div>
      <Header onNavClick={scrollTo} active={active} />
      <main>
        <section id="home" className="hero">
          <div className="wrap hero-inner">
            <div className="hero-text">
              <h1>Hi, I'm Kaushik — a Computer Science undergraduate building reliable, usable software</h1>
              <p className="lead">I create thoughtful front-ends and testable back-ends, write clear docs, and help make software more reliable through practical QA and careful review.</p>
              <p className="cta-row">
                <a className="btn" href="#projects" onClick={e=>scrollTo(e,'projects')}>View projects</a>
                <a className="btn ghost" href="#contact" onClick={e=>scrollTo(e,'contact')}>Get in touch</a>
              </p>
            </div>
            <aside className="hero-card">
              <h2>Contact</h2>
              <p><strong>Email:</strong> <a href="mailto:joshirajkaushik@gmail.com">joshirajkaushik@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+9779823781999">+977 9823781999</a></p>
              <p><strong>Location:</strong> Bhaktapur, Nepal</p>
              <hr />
              <h3>Quick facts</h3>
              <ul>
                <li>BSc Computer Science (Hons.) — IIMS College</li>
                <li>Languages: Python, Java, JavaScript, PHP</li>
                <li>Tools: Postman, Figma, MongoDB, MySQL</li>
              </ul>
            </aside>
          </div>
        </section>

        <Section id="about">
          <div className="wrap">
            <h2>About</h2>
            <p className="muted">I’m a Computer Science (Hons.) undergraduate with a strong focus on clear documentation, structured thinking, and practical software quality assurance. I enjoy turning fuzzy problems into well-documented, testable solutions and I’ve contributed to web and app projects across front-end design, implementation, and QA-style review.</p>
            <h3>Professional summary</h3>
            <p>I bring analytical problem-solving and SDLC understanding from web/app projects, plus beginner hands-on QA fundamentals including exploratory testing, test case/checklist writing, bug reporting with steps to reproduce, and API testing using Postman. I'm motivated to grow in a QA fellowship and contribute to improving software reliability through practical testing and clear documentation.</p>
          </div>
        </Section>

        <Section id="skills">
          <div className="wrap">
            <h2>Skills</h2>
            <ul className="skills-grid">
              {['Documentation & communication','Analytical problem-solving','Exploratory testing','Test case/checklist writing','Bug reporting (steps to reproduce)','API testing (Postman)','Figma (UI review)','Python (Intermediate)','Java (Intermediate)','JavaScript, PHP, HTML, CSS','MySQL, MongoDB (Basics)'].map(s=> <li key={s}>{s}</li>)}
            </ul>
          </div>
        </Section>

        <Section id="projects">
          <div className="wrap">
            <h2>Projects</h2>
            <div className="projects">
              <article className="project">
                <h3>VeggieScan — AI Veggie Disease Detector & Market Tracker</h3>
                <p>AI-powered web app that detects vegetable diseases from uploaded images and shows market price trends for Nepali vegetables. I owned the front-end design and implementation, including image upload flows and bilingual UI.</p>
                <p className="meta">Tech: FastAPI, Python, HTML, CSS, JavaScript, MongoDB, Google Gemini, Postman, Figma</p>
                <p><a href="https://github.com/Kaushik22864/VeggieScan" target="_blank">Repository</a></p>
              </article>

              <article className="project">
                <h3>PSE — SageCure Website Project</h3>
                <p>Web project demonstrating front-end and back-end fundamentals using HTML/CSS/SCSS and PHP. Fixed a UI/visual consistency issue by tracing incorrect object references across pages.</p>
                <p className="meta">Tech: HTML, CSS, PHP</p>
                <p><a href="https://github.com/Kaushik22864/PSE" target="_blank">Repository</a></p>
              </article>

              <article className="project">
                <h3>AP — Nepal Tourism System</h3>
                <p>Tourism management system built with Java for booking, scheduling, and admin visualizations. I tracked down incorrect calls and updated references to restore correct behavior.</p>
                <p className="meta">Tech: Java</p>
                <p><a href="https://github.com/Kaushik22864/AP" target="_blank">Repository</a></p>
              </article>
            </div>
          </div>
        </Section>

        <Section id="experience">
          <div className="wrap">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="item">
                <h3>Freelance Video Script Writer — YouTube Content Creation</h3>
                <p className="meta">May 2024 - December 2024 (Part-Time)</p>
                <ul>
                  <li>Wrote clear, structured scripts for educational content, strengthening documentation and audience-focused communication.</li>
                  <li>Reviewed scripts for logical flow, consistency and accuracy—building a QA-style review mindset.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="education">
          <div className="wrap">
            <h2>Education</h2>
            <ul>
              <li><strong>Bachelor of Computer Science (Hons.)</strong> — IIMS College (Affiliated with Taylor’s University), 2023 - Present</li>
              <li><strong>+2 Science (Physics)</strong> — Uniglobe Secondary School, 2021-2023</li>
              <li><strong>Secondary Education</strong> — Bhanubhakta Memorial School, 2011-2021</li>
            </ul>
          </div>
        </Section>

        <Section id="certificates">
          <div className="wrap">
            <h2>Certificates</h2>
            <ul>
              <li>MERN Stack Certification — Deerwalk Institute</li>
            </ul>
          </div>
        </Section>

        <Section id="contact" className="contact-section">
          <div className="wrap">
            <h2>Contact</h2>
            <p>If you'd like to work together or discuss opportunities, please reach out.</p>
            <p>Email: <a href="mailto:joshirajkaushik@gmail.com">joshirajkaushik@gmail.com</a></p>
            <p>Phone: <a href="tel:+9779823781999">+977 9823781999</a></p>
            <p>GitHub: <a href="https://github.com/Kaushik22864" target="_blank">github.com/Kaushik22864</a></p>
          </div>
        </Section>
      </main>

      <footer className="site-footer">
  <div className="wrap">
    © {year} Kaushik Raj Joshi — Built with care • Designed for clarity
  </div>
</footer>
    </div>
  )
}
