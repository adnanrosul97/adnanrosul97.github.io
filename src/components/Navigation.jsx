import { useEffect, useState } from 'react';

const sections = [['about', 'Overview'], ['education', 'Education'], ['research', 'Research'], ['experience', 'Experience'], ['projects', 'Projects'], ['skills', 'Skills'],['recognition', 'Recognition'], ['contact', 'Contact']];

export default function Navigation({ profile }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('about');
  useEffect(() => {
    const update = () => {
      const current = sections.filter(([id]) => document.getElementById(id)?.getBoundingClientRect().top <= 160).at(-1);
      setActive(current?.[0] || 'about');
    };
    const closeOnDesktop = () => { if (window.innerWidth >= 1200) setOpen(false); };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', closeOnDesktop);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', closeOnDesktop); };
  }, []);
  useEffect(() => {
    const escape = event => { if (event.key === 'Escape' && open) { setOpen(false); document.querySelector('.menu-toggle')?.focus(); } };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="container navbar navbar-expand-xl header-inner">
        <a href="#about" className="navbar-brand brand" onClick={() => setOpen(false)}><span className="monogram" aria-hidden="true">{profile.initials}</span><span>{profile.name}<small>Academic portfolio</small></span></a>
        <button className="navbar-toggler menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(!open)}><span>{open ? 'Close' : 'Menu'}</span><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
        <nav id="main-navigation" className={`collapse navbar-collapse navigation ${open ? 'show' : ''}`} aria-label="Main navigation">
          <ul className="navbar-nav ms-auto">{sections.map(([id, label]) => <li className="nav-item" key={id}><a className="nav-link" href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a></li>)}</ul>
        </nav>
      </div>
    </header>
  );
}
