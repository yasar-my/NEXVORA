import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Asterisk, Check, ChevronDown, Code2, ExternalLink, Github, Linkedin, Mail, Menu, MoveUpRight, Phone, Send, Sparkles, X } from 'lucide-react';
import { liveProjects, caseStudies } from './data/projects';
import Scene from './components/Scene';

const nav = [['About','about'],['Skills','skills'],['Live Projects','live-projects'],['Case Studies','case-studies'],['Services','services'],['Contact','contact']];
const skills = [
  {group:'LANGUAGES',items:['Java','JavaScript','SQL','HTML5','CSS3']},
  {group:'FRONTEND',items:['React.js','HTML5 / CSS3','Responsive UI','Angular / TypeScript']},
  {group:'BACKEND',items:['Spring Boot','Spring Security','Spring Data JPA','Hibernate','Node.js / Express.js']},
  {group:'DATA & API',items:['MySQL','REST APIs','JWT Authentication','CRUD & Schema Design']},
  {group:'TOOLS',items:['Git & GitHub','Postman','Maven','VS Code']},
  {group:'CORE CONCEPTS',items:['Java Multithreading','Task Management','Synchronization','Exception Handling']}
];
const services = [
  ['01','Custom web applications','Build a focused application around your business workflow, from interface to data-backed features.'],
  ['02','React frontend development','Responsive interfaces, reusable components, navigation and clear interaction states.'],
  ['03','Java & Spring Boot APIs','Backend services, REST endpoints, validation and structured application logic.'],
  ['04','Database integration','MySQL schema design, CRUD operations and application-to-database workflows.'],
  ['05','Authentication & access','JWT-based authentication and role-aware access where the project requires it.'],
  ['06','Improvements & maintenance','Fix bugs, improve usability and extend existing applications in manageable steps.']
];
const workflow = [
  ['01','Discover','Understand the goal, audience, constraints and the problem the application needs to solve.'],
  ['02','Plan','Break the work into features, agree on scope and map the main user journeys.'],
  ['03','Design','Create a clear responsive interface and validate the structure before building deeper functionality.'],
  ['04','Build','Develop reusable frontend components and backend features with a maintainable structure.'],
  ['05','Test','Check core flows, edge cases, responsive behavior and errors before release.'],
  ['06','Deploy','Prepare production configuration and publish to an agreed hosting environment.'],
  ['07','Support','Document the handover and discuss follow-up improvements or maintenance needs.']
];

function SectionHeading({eyebrow, title, text, light=false}) {
  return <div className={`section-heading ${light?'light':''}`}>
    <span className="eyebrow"><Asterisk size={14}/>{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}
function ProjectArtwork({type}) {
  return <div className={`project-art art-${type}`}>
    <div className="art-window">
      <div className="window-top"><span/><span/><span/><i>yasar.build / preview</i></div>
      {type==='spendora' ? <div className="expense-ui"><small>MONTHLY OVERVIEW</small><b>₹ 24,860</b><div className="chart-bars">{[36,55,43,72,49,86,61,77,53,91,66,80].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}</div><div className="mini-line"><span/><span/><span/></div></div>
      : type==='feast' ? <div className="feast-ui"><div className="feast-circle">F<span>&</span>F</div><b>Make room for<br/>something memorable.</b><div className="feast-pills"><span>Weddings</span><span>Private dining</span></div></div>
      : type==='marvel' ? <div className="marvel-ui"><small>THE MULTIVERSE ARCHIVE</small><b>EVERY STORY<br/>HAS A TIMELINE.</b><div className="timeline-art"><span/><span/><span/><span/></div><div className="poster-row"><i/><i/><i/></div></div>
      : <div className="portfolio-ui"><small>FULL STACK DEVELOPER</small><b>Building ideas<br/>into interfaces<span>.</span></b><div className="code-lines"><i/><i/><i/><i/></div></div>}
    </div>
    <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
  </div>;
}
function ProjectCard({project, index, onCase}) {
  return <motion.article className="project-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.55,delay:index*.06}}>
    <ProjectArtwork type={project.visual}/>
    <div className="project-content">
      <div className="project-meta"><span>{project.number} / {project.category}</span><span className="status-dot">{project.status}</span></div>
      <h3>{project.name}</h3><p>{project.description}</p>
      <div className="tag-row">{project.stack.slice(0,4).map(t=><span key={t}>{t}</span>)}</div>
      <div className="project-actions">
        <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a>
        <a className="text-link" href={project.repo} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
        <button className="text-link" onClick={()=>onCase(project.caseStudy)}>Case study <ArrowRight size={15}/></button>
      </div>
    </div>
  </motion.article>;
}
function CaseModal({study,onClose}) {
  if (!study) return null;
  return <div className="modal-backdrop" role="presentation" onClick={onClose}>
    <motion.div className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={e=>e.stopPropagation()} initial={{opacity:0,y:20,scale:.98}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:10}}>
      <button className="modal-close" aria-label="Close case study" onClick={onClose}><X size={18}/></button>
      <span className="eyebrow">{study.eyebrow || 'PROJECT NOTES'}</span><h2 id="case-title">{study.title || study}</h2>
      <p className="case-subtitle">{study.subtitle || 'The deployment and repository association should be confirmed before treating all details as verified.'}</p>
      {study.challenge && <><h4>Challenge</h4><p>{study.challenge}</p><h4>Approach</h4><p>{study.approach}</p></>}
      {study.architecture && <><h4>Architecture overview</h4><div className="architecture">{study.architecture.map((a,i)=><React.Fragment key={a}><span>{a}</span>{i<study.architecture.length-1&&<ArrowRight size={14}/>}</React.Fragment>)}</div></>}
      {study.details && <><h4>Verification notes</h4><ul>{study.details.map(x=><li key={x}>{x}</li>)}</ul></>}
      {study.notes && <ul>{study.notes.map(x=><li key={x}>{x}</li>)}</ul>}
      {study.stack && <><h4>Documented stack</h4><div className="tag-row">{study.stack.map(t=><span key={t}>{t}</span>)}</div></>}
      <p className="verification-note">Content is based on available README/resume information. Items marked for verification are intentionally not presented as confirmed implementation details.</p>
    </motion.div>
  </div>;
}

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [filter,setFilter] = useState('All Projects');
  const [caseItem,setCaseItem] = useState(null);
  const [form,setForm] = useState({name:'',email:'',type:'Web application',budget:'',description:''});
  const [sending,setSending] = useState(false);
  const [formMessage,setFormMessage] = useState('');
  const reduced = useReducedMotion();
  const categories = ['All Projects','Full-Stack Applications','Frontend Applications','Expense Tracking','E-commerce','Interactive Web Experiences','Developer Portfolios'];
  const filteredProjects = useMemo(()=>liveProjects.filter(p=>filter==='All Projects' || p.category===filter || (filter==='Frontend Applications' && ['marvel','portfolio','portfolio3d'].includes(p.visual)) || (filter==='E-commerce' && p.id==='throttle')), [filter]);
  const openCase = (name) => {
    const found = caseStudies.find(s=>s.title===name || (name==='Spendora / RoomLife' && s.id==='spendora-case') || (name==='Portfolio implementations' && s.id==='portfolio-case'));
    setCaseItem(found || {title:name,details:['Repository-to-deployment association is not confirmed.','Use the supplied links to inspect the current version before making claims about implementation.']});
  };
  useEffect(()=> {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const click = (e)=> { const id=e.currentTarget.getAttribute('href')?.slice(1); const el=id&&document.getElementById(id); if(el){e.preventDefault();el.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'});setMenuOpen(false);} };
    anchors.forEach(a=>a.addEventListener('click',click));
    return ()=>anchors.forEach(a=>a.removeEventListener('click',click));
  },[reduced]);
  const submitContact = async (e) => {
    e.preventDefault(); setFormMessage(''); setSending(true);
    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    try {
      if(endpoint) {
        const response = await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(form)});
        if(!response.ok) throw new Error('The form service did not accept this request. Please try email instead.');
        setFormMessage('Your inquiry was submitted. Thank you — I’ll review the details.');
        setForm({name:'',email:'',type:'Web application',budget:'',description:''});
      } else {
        const subject = encodeURIComponent(`Project inquiry — ${form.type}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.type}\nBudget: ${form.budget || 'Not specified'}\n\nProject details:\n${form.description}`);
        window.location.href = `mailto:yasarm8675@gmail.com?subject=${subject}&body=${body}`;
        setFormMessage('Your email app should open with the inquiry prepared. No message was sent by this website.');
      }
    } catch(err) { setFormMessage(err.message || 'Unable to submit right now. Please email directly.'); }
    finally { setSending(false); }
  };
  return <div className="site-shell">
    <div className="grain" aria-hidden="true"/>
    <header className="navbar">
      <a className="brand" href="#home" aria-label="Yasar M home"><span className="brand-mark">Y.</span><span>YASAR M<small>DEVELOPER / BUILDER</small></span></a>
      <nav className={menuOpen?'nav-links open':'nav-links'} aria-label="Main navigation">
        {nav.map(([label,id])=><a key={id} href={`#${id}`} className={id==='live-projects'?'nav-highlight':''}>{label}</a>)}
        <a href="#contact" className="nav-cta">Let's talk <ArrowUpRight size={14}/></a>
      </nav>
      <button className="menu-toggle" aria-label={menuOpen?'Close navigation':'Open navigation'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section id="home" className="hero">
        <div className="hero-grid"/><div className="hero-cinematic-backdrop" aria-hidden="true"/>
        <div className="hero-copy">
          <div className="availability"><span/> AVAILABLE FOR SELECT PROJECTS <span className="mono">/ 2026</span></div>
          <h1>Building digital<br/>experiences with<br/><em>real purpose.</em></h1>
          <p className="hero-lede">I'm <strong>Yasar M</strong> — a Java Full Stack Developer building practical web applications, thoughtful interfaces and reliable backend systems.</p>
          <div className="hero-actions"><a href="#live-projects" className="button button-primary">Explore my work <ArrowUpRight size={17}/></a><a href="#contact" className="button button-quiet">Start a project <ArrowRight size={16}/></a></div>
          <div className="hero-foot"><span><Code2 size={15}/> JAVA · SPRING BOOT · REACT</span><a href="#about">SCROLL TO EXPLORE <ArrowDown size={13}/></a></div>
        </div>
        <Scene/>
        <div className="hero-index"><span>PORTFOLIO / 01</span><span>COIMBATORE, TAMIL NADU, IN</span></div>
        <div className="hero-side-note">ENGINEERED WITH INTENTION <span>✳</span></div>
      </section>

      <section id="about" className="about section-pad">
        <div className="about-label"><span className="eyebrow"><Asterisk size={14}/> A LITTLE ABOUT ME</span><span className="big-index">01</span></div>
        <div className="about-main"><h2>Good software is<br/>more than <span>code.</span></h2><div className="about-columns"><p>It is a useful answer to a real problem. I work across frontend and backend development to shape ideas into responsive, maintainable web experiences.</p><p>My foundation includes Java, Spring Boot, React.js and MySQL. I enjoy understanding how the pieces fit together — from a clear interface to API behavior and the data behind it.</p></div>
          <div className="about-facts"><div><b>BCA</b><span>Computer Applications</span></div><div><b>2026</b><span>Graduation year</span></div><div><b>Full stack</b><span>Frontend + backend focus</span></div></div>
        </div>
      </section>

      <section id="skills" className="skills-section section-pad">
        <SectionHeading eyebrow="THE TOOLKIT" title={<>Skills built for<br/><span>the whole stack.</span></>} text="A practical toolkit for building interfaces, backend workflows and database-driven applications. Learning areas are separated from established project skills."/>
        <div className="skills-grid">{skills.map((group,i)=><motion.div key={group.group} className="skill-card" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><span className="skill-index">0{i+1}</span><h3>{group.group}</h3><div className="skill-list">{group.items.map(item=><span key={item} className={group.group==='CURRENTLY LEARNING'?'learning':''}>{item}{group.group==='CURRENTLY LEARNING'&&<span className="learning-dot"/>}</span>)}</div></motion.div>)}</div>
        <p className="small-note">Skills are grouped from the supplied resume; project-specific stacks are shown on each project card.</p>
      </section>

      <section id="live-projects" className="projects-section section-pad">
        <div className="projects-top"><SectionHeading eyebrow="SELECTED WORK / LIVE" title={<>Built to be<br/><span>experienced.</span></>} text="Explore the deployed projects and source repositories. Project descriptions are deliberately cautious where deployment identity or implementation details still need verification."/><div className="project-count"><b>05</b><span>LIVE LINKS<br/>SUPPLIED</span></div></div>
        <div className="filter-row" role="group" aria-label="Filter projects">{categories.map(c=><button key={c} className={filter===c?'active':''} onClick={()=>setFilter(c)}>{c}</button>)}</div>
        <div className="projects-grid">{filteredProjects.map((p,i)=><ProjectCard key={p.id} project={p} index={i} onCase={openCase}/>)}</div>
        <div className="github-banner"><div className="github-icon"><Github size={22}/></div><div><span className="eyebrow">MORE IN THE WORKSHOP</span><h3>Explore the source, not just the surface.</h3><p>Browse repositories, implementation details and ongoing experiments on GitHub.</p></div><a href="https://github.com/yasar-my" target="_blank" rel="noreferrer" className="button button-outline">Visit GitHub <ArrowUpRight size={16}/></a></div>
      </section>

      <section id="case-studies" className="case-section section-pad">
        <SectionHeading eyebrow="UNDER THE HOOD" title={<>The thinking behind<br/><span>the interface.</span></>} text="Short technical case studies focused on architecture, implementation choices and what the available documentation supports."/>
        <div className="case-list">{caseStudies.map((s,i)=><button key={s.id} className="case-row" onClick={()=>setCaseItem(s)}><span className="case-number">{s.eyebrow}</span><span className="case-title"><b>{s.title}</b><small>{s.subtitle}</small></span><span className="case-stack">{s.stack.slice(0,3).join(' · ')}</span><span className="case-arrow"><ArrowUpRight size={19}/></span></button>)}</div>
      </section>

      <section id="services" className="services-section section-pad">
        <SectionHeading eyebrow="HOW I CAN HELP" title={<>From first idea<br/>to <span>working product.</span></>} text="Freelance services shaped around practical web development needs. Scope, timeline and delivery are agreed after understanding the project."/>
        <div className="services-grid">{services.map(([num,title,desc],i)=><motion.article className="service-card" key={num} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><span className="service-number">{num}</span><div className="service-icon">{[<Code2/>,<Sparkles/>,<Asterisk/>,<Check/>,<MoveUpRight/>,<ArrowRight/>][i]}</div><h3>{title}</h3><p>{desc}</p><a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight size={17}/></a></motion.article>)}</div>
      </section>

      <section id="workflow" className="workflow-section section-pad">
        <SectionHeading eyebrow="THE PROCESS" title={<>Clear steps.<br/><span>Thoughtful delivery.</span></>} text="A collaborative workflow designed to keep decisions visible and progress understandable."/>
        <div className="workflow-list">{workflow.map(([num,title,desc])=><motion.div key={num} className="workflow-step" initial={{opacity:0,x:-14}} whileInView={{opacity:1,x:0}} viewport={{once:true}}><span className="workflow-num">{num}</span><h3>{title}</h3><p>{desc}</p><span className="workflow-check"><Check size={15}/></span></motion.div>)}</div>
      </section>

      <section id="experience" className="experience-section section-pad">
        <SectionHeading eyebrow="BACKGROUND" title={<>Learning, building,<br/><span>moving forward.</span></>} text="Education and experience summarized from the supplied resume."/>
        <div className="experience-grid">
          <div className="experience-card"><span className="eyebrow">EXPERIENCE / SEPT 2026 — PRESENT</span><h3>Full Stack Developer Intern</h3><p className="company">Reno Infomatics Pvt Ltd</p><p>Building responsive and reusable Angular/TypeScript components, developing REST APIs with Node.js and Express, integrating MySQL CRUD operations, and testing APIs/debugging integration issues with Postman.</p><div className="tag-row"><span>Angular / TypeScript</span><span>Node.js / Express</span><span>MySQL</span><span>Postman</span></div><small>September 2026 — Present · Based on supplied resume</small></div>
          <div className="experience-card education-card"><span className="eyebrow">EDUCATION / 2023—2026</span><h3>Bachelor of Computer Applications</h3><p className="company">Sriram Nallamani Yadava College</p><p>Undergraduate foundation in computer applications, programming and software development.</p><div className="education-score"><b>7.93</b><span>CGPA / 10</span></div><small>Jun 2023 — May 2026 · Resume lists Tenkasi, India</small></div>
        </div>
        <div className="resume-bar"><div><span className="eyebrow">THE DETAILS, IN ONE PLACE</span><h3>Want the full resume?</h3><p>Download the PDF for the complete skills, internship and project summary.</p></div><a className="button button-primary" href="/Yasar-M-Resume.pdf" download>Download resume <ArrowDown size={16}/></a><a className="resume-preview" href="/Yasar-M-Resume.pdf" target="_blank" rel="noreferrer">Preview PDF <ArrowUpRight size={14}/></a></div>
      </section>

      <section id="certifications" className="cert-section section-pad">
        <div className="cert-icon"><Sparkles size={24}/></div><div><span className="eyebrow">CERTIFICATIONS & ACHIEVEMENTS</span><h2>Evidence over embellishment.</h2><p>Certificate files and a complete certification list were not present in the reviewed resume content. Add verified credentials when you have the certificate name, issuer and date.</p></div><a href="mailto:yasarm8675@gmail.com?subject=Certification%20details" className="text-link">Update credentials <ArrowUpRight size={15}/></a>
      </section>

      <section id="contact" className="contact-section section-pad">
        <div className="contact-left"><span className="eyebrow"><Asterisk size={14}/> HAVE A PROJECT IN MIND?</span><h2>Let's build<br/>something <em>useful.</em></h2><p>Tell me what you're working on, what is getting in the way, and what a successful result would look like.</p>
          <div className="contact-links"><a href="mailto:yasarm8675@gmail.com"><Mail size={17}/> yasarm8675@gmail.com <ArrowUpRight size={14}/></a><a href="tel:+919087023639"><Phone size={17}/> +91 90870 23639 <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/yasar-9087023639-m" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a><a href="https://github.com/yasar-my" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a></div>
        </div>
        <form className="contact-form" onSubmit={submitContact}>
          <div className="form-heading"><span>PROJECT INQUIRY</span><span className="mono">FORM / 01</span></div>
          <div className="form-grid"><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name"/></label><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label></div>
          <div className="form-grid"><label>Project type<select value={form.type} onChange={e=>setForm({...form,type:e.target.value})}><option>Web application</option><option>Frontend website</option><option>Java / Spring Boot API</option><option>Booking or management system</option><option>E-commerce interface</option><option>Bug fixing / maintenance</option><option>Other</option></select></label><label>Budget range <span className="optional">(optional)</span><select value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}><option value="">Not decided yet</option><option>Under ₹10,000</option><option>₹10,000 – ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000+</option><option>Discuss first</option></select></label></div>
          <label>Tell me about the project<textarea required minLength={12} rows={4} value={form.description} onChange={e=>setForm({...form,description:e.target.value})} placeholder="What are you looking to build? What should it help people do?"/></label>
          <button type="submit" disabled={sending} className="button button-primary submit-button">{sending?'Preparing…':'Send project inquiry'} <Send size={16}/></button>
          <p className="form-message" role="status">{formMessage}</p>
          {!import.meta.env.VITE_FORMSPREE_ENDPOINT && <p className="form-footnote">Direct delivery needs a configured form endpoint. Add your Formspree endpoint to <code>VITE_FORMSPREE_ENDPOINT</code> and verify yasarm8675@gmail.com as the recipient. Until configured, the form opens a prefilled email draft.</p>}
        </form>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">Y.</span><span>YASAR M<small>JAVA FULL STACK DEVELOPER</small></span></a><span>Made with curiosity and intention.</span><div><a href="https://github.com/yasar-my" target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={12}/></a><a href="mailto:yasarm8675@gmail.com">EMAIL <ArrowUpRight size={12}/></a></div><span className="footer-copy">© 2026 YASAR M</span></footer>
    <AnimatePresence>{caseItem && <CaseModal study={caseItem} onClose={()=>setCaseItem(null)}/>}</AnimatePresence>
  </div>;
}