import { Links, OptionalImage } from './Shared.jsx';

export default function Hero({ profile, cvUrl }) {
  return (
    <section className="hero" id="about" aria-labelledby="profile-name">
      <div className="row align-items-center gy-5 gx-lg-5">
        <div className="col-lg-8 hero-copy">
          <h1 id="profile-name">{profile.name}</h1>
          <p className="hero-headline">{profile.headline}</p>
          <p className="intro">{profile.intro}</p>
          {profile.about.split('\n\n').map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          <div className="actions d-flex flex-wrap gap-3">
            <a className="btn btn-primary" href={cvUrl} target="_blank" rel="noopener noreferrer">View curriculum vitae <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="col-lg-4">
          <figure className="profile-figure">
            <div className="portrait-frame"><OptionalImage src={profile.image} alt={profile.imageAlt} className="portrait img-fluid" priority /></div>
          </figure>
        </div>
      </div>
    </section>
  );
}
