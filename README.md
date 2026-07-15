# SCC4IoT 2026 Workshop Website

A responsive static website for the SCC4IoT 2026 workshop, ready for Vercel.

## Deploy on Vercel

### Option 1 — Vercel dashboard
1. Extract this folder and push it to a GitHub, GitLab, or Bitbucket repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Framework preset: **Other**.
4. Leave build command empty and use `.` as the output directory.
5. Deploy.

### Option 2 — Vercel CLI
```bash
npm i -g vercel
cd scc4iot-2026
vercel
```

## Editing
- Main page content: `index.html`
- Visual design: `styles.css`
- Mobile navigation and back-to-top button: `script.js`
- Browser icon: `assets/favicon.svg`

## Before launch
- Replace or confirm committee entries once invitations are accepted.
- Add the official IoT 2026 conference URL when available.
- Confirm ACM author template and publication wording with the conference chairs.
- Add venue and time-zone information after conference logistics are released.
