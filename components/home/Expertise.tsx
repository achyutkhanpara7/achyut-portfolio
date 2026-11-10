import Reveal from '../Reveal';
import s from './expertise.module.css';

// One compact card: the industries I've designed for and the skills recruiters search by.
const industries = ['Fintech & financial services', 'Pharma & life sciences', 'Retail & operations', 'Higher education'];

const skills = [
  'B2B SaaS',
  'Enterprise SaaS',
  'Agentic AI',
  'Generative AI',
  'Data visualization',
  'Dashboards',
  'Complex workflows',
  'Simulation & digital twins',
  'Design systems',
  'UX research',
  'Usability testing',
  'Information architecture',
  'Accessibility (WCAG 2.2)',
  'Rapid prototyping',
  'Design engineering',
];

export default function Expertise() {
  return (
    <Reveal className={s.box}>
      <div className={s.row}>
        <p className={s.head}>Industries</p>
        <ul className={`${s.chips} ${s.ind}`}>
          {industries.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
      <div className={s.row}>
        <p className={s.head}>Skills</p>
        <ul className={s.chips}>
          {skills.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
