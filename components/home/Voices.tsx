import s from './sections.module.css';

// Recommendations (from the existing v2 page). Infinite scroll, pauses on hover.
const voices = [
  {
    i: 'HD',
    n: 'Hemal Darji',
    r: 'Sr. UX Designer, Thinkwik Technologies',
    q: 'Achyut’s dedication to user research and his insight-driven designs make him a standout UX professional. He transforms complex requirements into seamless, impactful user experiences.',
  },
  {
    i: 'ER',
    n: 'Dr. Elaine Rettger',
    r: 'Associate Director, Bus & Fin Comms, ASU',
    q: 'Achyut consistently demonstrated exceptional UX design, research and digital communication skills, becoming a key contributor to our projects at ASU. His professionalism, creativity and user-first mindset made him an invaluable asset to our team.',
  },
  {
    i: 'SC',
    n: 'Stephen Carradini',
    r: 'Assistant Professor, Arizona State University',
    q: 'Achyut’s designs are not just visually appealing but also highly functional, ensuring usability and clarity for the end user. His teamwork experience and coordination skills make him a valuable asset to any user experience team.',
  },
  {
    i: 'NP',
    n: 'Nikit Patel',
    r: 'Team Lead Design, Thinkwik Technologies',
    q: 'Achyut’s creative vision and user-centric approach elevate every project he undertakes. His designs are not only visually engaging but also highly intuitive and user-friendly.',
  },
];

export default function Voices() {
  const row = voices.concat(voices);
  return (
    <div className={s.voices}>
      <ul className={s.vTrack}>
        {row.map((v, k) => (
          <li key={k} className={s.voice} aria-hidden={k >= voices.length}>
            <div className={s.vHead}>
              <span className={s.vAvatar}>{v.i}</span>
              <span>
                <span className={s.vName}>{v.n}</span>
                <span className={s.vRole}>{v.r}</span>
              </span>
              <span className={s.vQuote} aria-hidden>“</span>
            </div>
            <p className={s.vText}>{v.q}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
