import { pageMeta } from '@/lib/meta';
import Reveal from '@/components/Reveal';
import LocalTime from '@/components/LocalTime';
import ContactForm from '@/components/contact/ContactForm';
import { site } from '@/content/work';
import s from '@/components/contact/contact.module.css';

export const metadata = pageMeta('/contact/', 'Contact', 'Hiring, a project or a question: send Achyut a message, email him or book a 30-minute call.');

export default function Contact() {
  return (
    <section className={s.band}>
      <div className={s.drift} aria-hidden>
        <span />
        <span />
        <span />
      </div>
      <div className={`container ${s.grid}`}>
        <Reveal className={s.copy}>
          <span className="kicker">Contact</span>
          <h1 className={s.h1}>
            Got something confusing? <span className="turn">Let&apos;s make it clear.</span>
          </h1>
          <p className={s.lede}>
            A role, a project or a product that needs untangling: tell me a little about it and I&apos;ll write back.
          </p>
          <ul className={s.direct}>
            <li>
              <span>Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={site.linkedin} target="_blank" rel="noreferrer">
                in/achyut-khanpara ↗
              </a>
            </li>
            <li>
              <span>Local time</span>
              <b>
                <i aria-hidden /> <LocalTime /> in {site.location}
              </b>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
