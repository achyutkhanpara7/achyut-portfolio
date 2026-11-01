import Link from 'next/link';
import s from './Wordmark.module.css';

export default function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className={`${s.mark} ${light ? s.light : ''}`} aria-label="Achyut Khanpara, home">
      Achyut Khanpara<span className={s.dot}>.</span>
    </Link>
  );
}
