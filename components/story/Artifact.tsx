import Image from 'next/image';
import s from './story.module.css';

/* A real working file from the project, on a glass stage with its source named. */
export default function Artifact({ src, alt, w, h, from }: { src: string; alt: string; w: number; h: number; from: string }) {
  return (
    <figure className={s.artifact}>
      <div className={s.stage}>
        <div className={s.glass}>
          <Image src={src} alt={alt} width={w} height={h} sizes="(max-width: 1000px) 100vw, 80vw" />
        </div>
      </div>
      <figcaption>{from}</figcaption>
    </figure>
  );
}
