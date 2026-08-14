# closed loop

Saketh Vegesna's personal site — projects, research notes, essays, and a reading
log. Built with [Astro](https://astro.build) + MDX, deployed to GitHub Pages.

## Structure

| Section | Where content lives | Notes |
| --- | --- | --- |
| Home | `src/pages/index.astro` | Doorway page — intro + latest note/project/reading |
| About / Now / Vision | `src/pages/about.astro` | One page, three sections. Edit `Now` regularly. |
| Projects & Research | `src/content/projects/*.mdx` | `category: current \| side \| archive` in frontmatter |
| Notes | `src/content/notes/*.mdx` | `evergreen: true/false`, freeform `tags` |
| Reading | `src/content/reading/*.mdx` | `kind: book \| paper` |
| Essays | `src/content/essays/*.mdx` | `category: technical \| general` |
| Goals & Milestones | `src/data/goals.ts` | Plain TS array, no MDX needed |
| People | `src/content/people/*.mdx` | Short profiles |
| Contact | `src/pages/contact.astro` | Edit the `links` array directly |

Every sample file in `src/content/` is marked **SAMPLE ENTRY** in its frontmatter
and body — replace or delete them. To add a new entry, copy an existing `.mdx`
file in the relevant folder, change the frontmatter, write the body.

## Adding images and video

Drop files into `public/images/...` and reference them with an absolute path:

```mdx
![Caption](/images/projects/biped-mpc/walk.gif)

<video src="/images/projects/biped-mpc/trial-04.mp4" controls></video>
```

Large video files should generally be uploaded to YouTube/Vimeo and embedded,
rather than committed to the repo — GitHub Pages isn't built for serving large
binary files.

## Commands

| Command | Action |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it via GitHub Pages. One-time setup on GitHub:

1. Push this repo to `https://github.com/SakethGG/SakethGG.github.io`.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The site will be live at `https://sakethgg.github.io` a minute or two after
   the workflow finishes (check the **Actions** tab).

## Theme

Red (`--accent`) as the only accent color on a white/black base, with a
light/dark toggle in the nav (defaults to system preference, remembers your
choice via `localStorage`). All tokens live in `src/styles/global.css`.
