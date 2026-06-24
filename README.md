# Yurii Shchurko — AI Automation Engineer · n8n Specialist

📍 Kyiv, Ukraine · Remote (UTC+2) · 🟢 Open to automation & integration work
✉️ [shchurko.yurii@gmail.com](mailto:shchurko.yurii@gmail.com) · 🌐 [yurii-s4.github.io](https://yurii-s4.github.io) · 💼 [GitHub](https://github.com/yurii-s4)

I build autonomous AI agents and Advanced RAG systems — and orchestrate them
with **n8n**. I specialize in stateful multi-agent architectures, hybrid vector
search (pgvector + Pinecone), and the unglamorous-but-critical part: **safe data
mutation** with custom JavaScript so automations never lose or corrupt data.

This repository **is** my portfolio. The site itself is built like one of my
workflows: a live pipeline rail runs down the left edge, each section is a "node"
labelled with an n8n node type, and my **real** workflows render live on the page
via the official [`<n8n-demo>`](https://n8n-io.github.io/n8n-demo-webcomponent/)
web component — the actual exported JSON, not screenshots.

> Built with [Astro](https://astro.build) — ships zero JS by default, so the page
> is fast and SEO-friendly, and the heavy n8n renderer only loads when you scroll
> to a workflow. Live at **[yurii-s4.github.io](https://yurii-s4.github.io)**.

---

## What I do

- **Multi-agent systems** — Telegram-native hub-and-spoke architecture routing
  voice and text to specialized sub-agents, each with its own conversational
  lifecycle and persistent memory.
- **Advanced / Hybrid RAG** — combining semantic similarity (pgvector, Pinecone)
  with strict SQL metadata filtering and NLP date parsing, to kill hallucinations
  on time-sensitive queries.
- **Resilient ETL** — two-stage commit and deep-merge "safe data mutation"
  patterns for zero-loss updates into Notion, Postgres, and Google Calendar.
- **Cost optimization** — a Postgres-backed LLM query planner that avoids
  unnecessary vector searches and cuts API token spend.

**Stack:** n8n · LangChain · OpenAI · Anthropic · Pinecone · pgvector ·
PostgreSQL · Supabase · Node.js / Express · Docker · Cloudflare · Git · Linux

---

## The workflows on this site

These are the actual automations I designed and shipped during of R&D on a
production AI assistant. Each renders live on the portfolio; the exported JSON
lives in [`public/workflows/`](public/workflows/).

| Workflow | What it does |
| --- | --- |
| **AI Personal OS — [Main Hub]** | Stateful multi-agent operating system over Telegram/Notion. Routes voice & text to sub-agents for task capture, planning, CRM, biometrics, and search — eliminating manual data entry entirely. |
| **API Gateway & State Manager** | Syncs Telegram interactions with Supabase to manage user state — zero context bleeding between sub-agents, crash-free routing. |
| **AI Personal CRM Agent** | Vector-powered contact resolution (Pinecone) that handles nicknames and typos, with Guardrails validating every JSON payload before a DB write. |
| **Context-Aware Biometrics Tracker** | Time-aware interview pipeline using a two-stage commit: back up the raw narrative, then LLM-extract normalized fields — structured telemetry with no data loss. |
| **Hybrid Postgres RAG Agent** | Query Planner parses natural-language dates and builds hybrid queries combining pgvector similarity with strict SQL filtering — high-precision, hallucination-free retrieval. |
| **Autonomous Scheduling Agent** | Translates daily plans into deterministic Google Calendar CRUD, checking conflicts to eliminate double-booking. |
| **Notion → pgvector Sync** | Idempotent ingestion pipeline keeping a vector store in sync with Notion via OpenAI embeddings — the RAG foundation every agent reads from. |

---

## Run the site locally

```bash
npm install
npm run dev      # http://localhost:4321
```

Add `?debug` to the URL (e.g. `localhost:4321/?debug`) to log the workflow-mounting
checkpoints in the browser console.

### Where the content lives

All of my content — profile, stack, stats, and the workflow entries above — lives
in one typed file: **[`src/data/site.ts`](src/data/site.ts)**. My CV sits at
[`public/cv.pdf`](public/cv.pdf) (the site's download button points to `/cv.pdf`).
Design tokens — colours, fonts, the rail animation — live in
`src/styles/global.css` under `:root`.

---

## How the live workflow embeds work (and how to debug them)

The `<n8n-demo>` component is heavy (it loads n8n's editor renderer), so the
gallery **lazy-mounts one canvas at a time** with an `IntersectionObserver` —
nothing loads until a card nears the viewport. The logic is in
`src/components/WorkflowGallery.astro`.

| What should be true | How to verify (open with `?debug`) |
| --- | --- |
| Component registered | Checkpoint 1 logs once `<n8n-demo>` is defined |
| Each JSON loads and is valid | Checkpoint 2 logs the source + parsed node count |
| Rendered graph matches the JSON | Checkpoint 3 compares source node count vs rendered nodes |
| First paint stays fast | Network tab: n8n bundle only fetches when you scroll to it |

If a preview fails, the card shows a fallback message and the `?debug` console
logs the exact error (bad path, malformed JSON, network).

---

## Deployment

The repo is preconfigured to deploy as a **GitHub Pages root site** at
`https://yurii-s4.github.io`. A workflow at `.github/workflows/deploy.yml` builds
the site with the official [`withastro/action`](https://github.com/withastro/action)
and publishes it on every push to `main` — just set **Settings → Pages → Source**
to **GitHub Actions**.

It's a fully static site, so it also drops straight onto **Cloudflare Pages**
(framework preset *Astro*, build command `npm run build`, output dir `dist`) with
no adapter. Only `site` in `astro.config.mjs` changes when switching targets —
`base` stays `'/'` either way.

---

## Project structure

```
public/
  cv.pdf                 # my CV (download button → /cv.pdf)
  favicon.svg
  workflows/             # the exported n8n JSON that renders live on the page
src/
  data/site.ts           # profile, stack, stats, workflow entries
  layouts/Base.astro     # head, fonts, n8n component scripts
  components/             # one component per section
  styles/global.css      # design tokens + the pipeline-rail signature
  pages/index.astro      # assembles the page
```

---

*Want to automate a workflow, wire up an integration, or build a RAG agent?*
*Reach me at [shchurko.yurii@gmail.com](mailto:shchurko.yurii@gmail.com).*
