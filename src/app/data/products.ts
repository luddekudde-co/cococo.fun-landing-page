export interface Product {
  id: 'resume' | 'reporter' | 'karaoke';
  num: string;
  kind: string;
  titleHtml: string;
  tag: string;
  bullets: string[];
  meta: string;
  openLabel: string;
  visual: 'resume' | 'reporter' | 'karaoke';
}

export const PRODUCTS: Product[] = [
  {
    id: 'resume',
    num: '01',
    kind: 'tailor',
    titleHtml: 'A resume that gets <em>read</em> — by bots and humans.',
    tag: 'Paste a job link. Get a version of your resume that passes ATS keywords and reads like a person wrote it.',
    bullets: [
      'Paste any job link or description',
      'Bullet rewrites with tone control',
      'One-click PDF + cover letter draft',
    ],
    meta: 'free · 5 tailors / wk',
    openLabel: 'Open Tailor',
    visual: 'resume',
  },
  {
    id: 'reporter',
    num: '02',
    kind: 'reporter',
    titleHtml: 'Today in <em>AI</em> — in five minutes flat.',
    tag: 'A daily brief of the AI news and product moves that matter, with a chatbot to deepdive any story.',
    bullets: [
      '5-minute morning brief, every weekday',
      'Chat any headline for context, sources, "so what"',
      'Trends across launches, papers, hiring',
    ],
    meta: 'free · daily · email or app',
    openLabel: 'Open Reporter',
    visual: 'reporter',
  },
  {
    id: 'karaoke',
    num: '03',
    kind: 'karaoke',
    titleHtml: 'Sing your way <em>into Swedish</em>.',
    tag: 'Songs built around everyday themes — coffee, work, dating. Lyrics, translation, and grammar notes that actually stick.',
    bullets: [
      '40+ themes — café, dating, work, transit',
      'Tap any word → meaning + grammar',
      'Daily 4-min "sjung-och-lär" sessions',
    ],
    meta: 'free · 1 song / day',
    openLabel: 'Open Karaoke',
    visual: 'karaoke',
  },
];
