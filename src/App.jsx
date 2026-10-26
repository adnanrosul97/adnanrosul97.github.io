import data from './data/portfolio.json';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Research from './components/Research.jsx';
import { Education, Experience, Projects, Recognition, Skills } from './components/AcademicSections.jsx';
import { Links } from './components/Shared.jsx';

export default function App() {
  const { profile } = data;
  const cvUrl = `${import.meta.env.BASE_URL}${profile.cv}`;
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navigation profile={profile} />
      <main id="main" className="container page-shell">
        <Hero profile={profile} cvUrl={cvUrl} />
        <div className="row gx-xl-5 body-grid">

          <div className="col-xl-12 sections">
            <Education items={data.education} />
            <Research items={data.research} interests={data.interests} />
            <Experience items={data.experience} />
            <Projects items={data.projects} />
            <Skills items={data.skills} />
            <Recognition awards={data.recognition} leadership={data.leadership} />
          </div>
        </div>
        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="row align-items-center gy-4">
            <div className="col-lg-6"><p className="eyebrow">Academic & research correspondence</p><h2 id="contact-title">Let’s connect.</h2><p>For research discussions and academic opportunities.</p></div>
            <div className="col-lg-6 contact-links"><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a><p>{profile.location} <span>·</span> <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a></p><Links items={profile.links} /></div>
          </div>
        </section>
      </main>
      <footer className="container site-footer d-flex flex-wrap justify-content-between gap-3"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#about">Back to top ↑</a></footer>
    </>
  );
}
