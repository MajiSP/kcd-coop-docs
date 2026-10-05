# KCD Co-op documentation

The public docs for KCD Co-op, served with GitHub Pages at https://majisp.github.io/kcd-coop-docs/.

Built with [Fumadocs](https://fumadocs.dev) (Next.js, static export). Pages live in `content/docs` as MDX; the sidebar order is in each folder's `meta.json`.

```bash
npm ci
npm run dev
```

Every push to `main` builds the site and deploys it (`.github/workflows/deploy.yml`).

Function reference pages use one `##` heading per function, named exactly like the function. The code repo's `tools/docs_check.py` lists every scripting function the server and client expose and reports any without a heading here.
