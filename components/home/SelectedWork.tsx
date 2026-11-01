import Link from 'next/link';
import { caseStudies, projectCounts } from '@/content/work';
import Reveal from '../Reveal';
import FeatureCards from './FeatureCards';
import s from './selected.module.css';

// Featured = the 4 deep-dive UX case studies. The header says exactly that,
// and the one link goes to everything else — no counts that don't match what's shown.
export default function SelectedWork() {
  return (
    <section id="work" className={`container ${s.section}`}>
      <Reveal className={s.head}>
        <div>
          <span className="kicker">Selected work</span>
          <h2 className={s.h2}>
            {caseStudies.length} deep dives into <span className="accent">complex products.</span>
          </h2>
          <p className={s.sub}>
            Enterprise and AI platforms where the hard part was making them clear. Each case study shows the problem,
            my role, the decisions and what changed.
          </p>
        </div>
        <Link href="/work/" className={s.all}>
          <span className={s.allText}>
            <b>All work</b>
            <em>{projectCounts.all} projects · UX &amp; brand</em>
          </span>
          <span className={s.allIcon} aria-hidden>→</span>
        </Link>
      </Reveal>
      <FeatureCards />
    </section>
  );
}
