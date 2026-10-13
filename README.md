# samihmabsout.com

Personal portfolio site for Samih Mabsout — Business Continuity & Cyber Resilience.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- [framer-motion](https://www.framer.com/motion/) for animations
- [next-themes](https://github.com/pacocoursey/next-themes) for dark/light mode
- [lucide-react](https://lucide.dev/) for icons
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for scroll-triggered animations

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

All editable content lives in `/data`:

- `site.ts` — name, title, contact info, intro copy
- `skills.ts` — the "What I do" skill cards
- `experience.ts` — the "Professional journey" entries
- `certifications.ts` — the certifications list

The avatar (`public/avatar.png`) and resume (`public/resume.pdf`) are also checked in there.

## Deployment

Deploy-ready for [Vercel](https://vercel.com/new) — connect the repo and it builds out of the box.
