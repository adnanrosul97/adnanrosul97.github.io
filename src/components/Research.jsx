import { Links, OptionalImage, Section, Tags } from './Shared.jsx';

export default function Research({ items, interests = [] }) {
  return (
    <Section id="research" number="02" title="Research">
      {items.map(item => (
        <article key={item.id} className="card research-card">
          <div className="card-body">
            <div className="record-meta"><span>{item.type}</span><span>{item.year}</span></div>
            <h3>{item.title}</h3><p className="institution">{item.institution}</p><p>{item.description}</p>
            <OptionalImage src={item.image} alt={item.imageAlt} />
            <div className="row g-3 metrics">{(item.metrics || []).map(metric => <div className="col-sm-4" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div>
            <Tags items={item.tags} />
            <details className="research-details"><summary>Methodology & evaluation <span aria-hidden="true">+</span></summary><ul className="highlights">{item.details.map(detail => <li key={detail}>{detail}</li>)}</ul><p className="supervisor"><strong>Supervisor:</strong> {item.supervisor}</p></details>
            <Links items={item.links} />
          </div>
        </article>
      ))}
    </Section>
  );
}
