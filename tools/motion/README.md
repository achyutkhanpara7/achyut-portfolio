# Card preview animations

Each project card plays a 10-second motion piece. They are hand-built HTML scenes, not screen recordings.

- `lib.js` — a tiny deterministic timeline (`tw`, `stagger`, `fn`, `typer`, `count`, `seek(t)`).
- `base.css` — shared stage, window and card styles.
- `<scene>.html` — one scene per project.
- `render.js` — renders frames: `node render.js "$(pwd)" grc 30 10` → `frames/grc/f0000.jpg…`

Encode a scene:

```
ffmpeg -framerate 30 -i frames/grc/f%04d.jpg -vf "scale=1600:1000,format=yuv420p" \
  -c:v libx264 -preset veryfast -crf 25 -movflags +faststart -an ../../public/work/grc/preview.mp4
```
