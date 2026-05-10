export interface Product {
  id: 'resume' | 'reporter' | 'karaok';
  num: string;
  kind: string;
  titleHtml: string;
  tag: string;
  bullets: string[];
  meta: string;
  openLabel: string;
  visual: 'resume' | 'reporter' | 'karaoke';
  href: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'resume',
    num: '01',
    kind: 'tailor',
    titleHtml: 'A resume that gets <em>read</em> — by bots and humans.',
    tag: 'Paste a job description. Get a version of your resume that passes ATS keywords and reads like a person wrote it.',
    bullets: [
      'Paste any job description, upload your resume',
      'Rewrite, polish and save',
      'AI-powered suggestions',
    ],
    meta: '',
    openLabel: 'Open Tailor',
    visual: 'resume',
    href: '/tailor-resume',
  },
  {
    id: 'reporter',
    num: '02',
    kind: 'reporter',
    titleHtml: 'Today in <em>AI</em> — in five minutes flat.',
    tag: 'A daily brief of the AI news and product moves that matter, with a chatbot to deepdive any story.',
    bullets: [
      'AI weekly digest',
      'Chat with AI to deepdive any story',
      'Trends across launches, papers, hiring',
    ],
    meta: 'free · web app',
    openLabel: 'Open Reporter',
    visual: 'reporter',
    href: '/ai-reporter',
  },
  {
    id: 'karaok',
    num: '03',
    kind: 'karaoke',
    titleHtml: 'Sing your way <em>into Swedish</em>.',
    tag: 'Songs built around everyday themes — coffee, work, dating. Lyrics, translation, and grammar notes that actually stick.',
    bullets: [
      'Multiple themes — café, dating, work, transit',
      'Tap any word → meaning + grammar',
      'Karaoke auto scrolls, so you can sing along',
    ],
    meta: '',
    openLabel: 'Open Karaok',
    visual: 'karaoke',
    href: '/karaok',
  },
];
