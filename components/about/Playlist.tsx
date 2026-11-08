import s from './playlist.module.css';

// Songs on repeat. Each record gets its own colour from its title; tapping one searches it on Spotify.
// Add songs here; the section appears on the About page as soon as this list isn't empty.
export const songs: { title: string; artist: string }[] = [];

// Optional: a public Spotify playlist id (open.spotify.com/playlist/<id>) to embed under the records.
export const playlistId = '';

function hue(str: string) {
  let h = 0;
  for (const ch of str) h = (h * 31 + ch.charCodeAt(0)) % 360;
  return h;
}

export default function Playlist() {
  return (
    <div className={s.wrap}>
      <ol className={s.records}>
        {songs.map((song, i) => {
          const h = hue(song.title + song.artist);
          return (
            <li key={song.title} className={s.record} style={{ ['--h' as string]: h }}>
              <a
                href={`https://open.spotify.com/search/${encodeURIComponent(`${song.title} ${song.artist}`)}`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${song.title} by ${song.artist}, on Spotify`}
              >
                <span className={s.disc} aria-hidden>
                  <i />
                </span>
                <span className={s.sleeve} aria-hidden>
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  <span>{song.title}</span>
                </span>
              </a>
              <div className={s.meta}>
                <b>{song.title}</b>
                <span>{song.artist}</span>
              </div>
            </li>
          );
        })}
      </ol>
      {playlistId && (
        <iframe
          className={s.embed}
          title="Achyut's playlist on Spotify"
          src={`https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`}
          loading="lazy"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      )}
    </div>
  );
}
