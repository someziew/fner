## fner

## Description

- This React application is built using [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- It uses [Tailwind CSS](https://tailwindcss.com/)
- The application is generated in [TypeScript](https://www.typescriptlang.org/).

## Pre-requisites

- [git](https://git-scm.com/) - v2.13 or greater
- [NodeJS](https://nodejs.org/en/) - v16 or greater
- [npm](https://www.npmjs.com/) - v6 or greater

## Running in dev environment

1. `cd YOUR_APPLICATION`
2. `npm install`
3. `npm run dev`

## Folder Structure

```
.
├── public --------- Static assets holder
│   └── images --------- Contain all images
│   └── fonts ---------- Font resources
├── README.md
├── src --------- Source code root
│   ├── app --------- Application logic
│   │   ├──<router> --------- Route-specific components
│   │   │    └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components --------- Reusable components
│   └── styles --------- Global style config
│       ├── font.css ------ Font styling
│       ├── index.css ------ Main stylesheet
│       └── tailwind.css --- Default Tailwind modules
├── next.config.js ----- Next.js config
├── package.json
├── postcss.config.js
└── tailwind.config.js ----- Entire theme config, colors, fonts etc.
```

## License

MIT License

Copyright (c) 2025 DhiWise

Permission is hereby granted to any person obtaining a copy of this software and associated documentation files (the "Software"),to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
