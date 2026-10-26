import { useState } from 'react';

export function OptionalImage({ src, alt, className = '', priority = false }) {
  const [failedSource, setFailedSource] = useState(null);
  if (!src || src === failedSource) return null;
  const url = /^(https?:|data:|\/)/.test(src) ? src : `${import.meta.env.BASE_URL}${src}`;
  return <img className={`optional-image ${className}`} src={url} alt={alt || ''} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} onError={() => setFailedSource(src)} />;
}

export function Links({ items = [], className = '' }) {
  return <div className={`text-links ${className}`}>{items.filter(item => item.url).map(item => <a key={item.label} href={item.url} target="_blank" rel="noopener noreferrer">{item.label} <span aria-hidden="true">↗</span></a>)}</div>;
}

export function Tags({ items = [] }) {
  return <ul className="tags d-flex flex-wrap" aria-label="Topics">{items.map(item => <li className="badge topic-badge" key={item}>{item}</li>)}</ul>;
}

export function Section({ id, number, title, subtitle, children }) {
  return <section className="section" id={id} aria-labelledby={`${id}-title`}><div className="section-heading"><span className="section-number" aria-hidden="true">{number}</span><div><h2 id={`${id}-title`}>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>{children}</section>;
}
