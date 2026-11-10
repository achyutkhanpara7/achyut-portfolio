import CountUp from '../CountUp';
import Reveal from '../../Reveal';
import s from './snapshot.module.css';

// Career at a glance: four numbers in one slim band.
const stats = [
  { to: 20, suffix: '+', label: '0→1 products shipped' },
  { to: 4, suffix: '+', label: 'years of experience' },
  { to: 10, suffix: '+', label: 'certifications' },
  { to: 3, suffix: '', label: 'design systems built' },
];

export default function Snapshot() {
  return (
    <Reveal as="ul" className={s.band}>
      {stats.map((x) => (
        <li key={x.label}>
          <b>
            <CountUp to={x.to} suffix={x.suffix} />
          </b>
          <span>{x.label}</span>
        </li>
      ))}
    </Reveal>
  );
}
