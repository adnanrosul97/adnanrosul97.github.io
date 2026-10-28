import { Links, OptionalImage, Section, Tags } from './Shared.jsx';

export function Education({ items }) {
  return <Section id="education" number="01" title="Education">{items.map(item => (
    <article key={item.id} className="education-record">
      <OptionalImage src={item.image} alt={item.imageAlt} className="institution-image" />
      <div className="record-meta"><span>{item.institution}</span><span>{item.period}</span></div>
      <h3>{item.degree}</h3>
      <p className="education-facts"><span>{[item.cgpa && `CGPA ${item.cgpa}`, item.award].filter(Boolean).join(' · ')}</span></p>
      {item.thesis == '' ? null : <p><strong>Thesis:</strong> {item.thesis}</p>}
      {item.supervisor == '' ? null : <p><strong>Supervisor:</strong> {item.supervisor}</p>}
      <details><summary>Relevant Coursework <span aria-hidden="true">+</span></summary><Tags items={item.coursework} /></details>
    </article>
  ))}</Section>;
}

export function Experience({ items }) {
  return <Section id="experience" number="03" title="Relevant Professional Experience">{items.map(item => (
    <article key={item.id} className="timeline-record">
      <h3>{item.role}</h3>
      <div className="record-meta"><span>{item.organization} · {item.location}</span><span>{item.period}</span></div>
      <OptionalImage src={item.image} alt={item.imageAlt} className="organization-image" />
      <ul className="highlights">{item.highlights.map(text => <li key={text}>{text}</li>)}</ul>
    </article>
  ))}</Section>;
}

export function Projects({ items }) {
  return <Section id="projects" number="04" title="Selected Projects"><div className="row g-4">{items.map(item => (
    <div className="col-md-6" key={item.id}>
      <article className="card project-card h-100">
        <OptionalImage src={item.image} alt={item.imageAlt} />
        <div className="card-body d-flex flex-column">
          <div className="record-meta"><span>{item.period}</span></div>
          <h3>{item.title}</h3><p className="project-category">{item.category}</p>
          <p>{item.description}</p>
          <div className="mt-auto pt-3"><Tags items={item.tags} /><Links items={item.links} /></div>
        </div>
      </article>
    </div>
  ))}</div></Section>;
}

export function Skills({ items }) {
  return <Section id="skills" number="05" title="Technical Skills">{items.map(item => (
    <div className="skill-block" key={item.id}><h3 className="subheading">{item.category}</h3><Tags items={item.items} /></div>
  ))}</Section>;
}

export function Recognition({ awards, leadership }) {
  return <Section id="recognition" number="06" title="Recognition & Service">
    <h3 className="subheading">Certifications & Awards</h3>
    <div className="recognition-list">{awards.map(item => <article key={item.id}><span className="award-year">{item.year}</span><div><h4>{item.title}</h4><p>{item.organization}</p></div></article>)}</div>
    <h3 className="subheading leadership-heading">Leadership & Volunteering</h3>
    {leadership.map(item => <article className="leadership-record" key={item.id}><div className="record-meta"><span>{item.organization}</span><span>{item.period}</span></div><h4>{item.role}</h4><p>{item.description}</p></article>)}
  </Section>;
}
