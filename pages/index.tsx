// /pages/index.tsx

import Link from 'next/link';
import styles from '../styles/Categories.module.scss';

const categories = [
  {
    slug: 'getting-paid',
    name: 'Getting Paid',
    description:
      'Learn how and when you get paid, what shows up on your paycheck, and how to manage things like timekeeping, direct deposit, and pay adjustments.',
    color: '#276EF1',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#276EF1"/><path d="M8 14h16v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-6Zm0-2V12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" fill="#fff"/></svg>
    ),
  },
  {
    slug: 'taking-time-off',
    name: 'Taking Time Off',
    description:
      'Find out how to request time off, understand your leave options, and review policies for holidays, sick days, PTO, and special types of leave.',
    color: '#7747F3',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#7747F3"/><path d="M8 14h16v6a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-6Zm0-2V12a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" fill="#fff"/></svg>
    ),
  },
  {
    slug: 'doing-your-job',
    name: 'Doing Your Job',
    description:
      'Explore policies that shape your everyday work experience—from job expectations and conduct to remote work, equipment, and scheduling.',
    color: '#16B96A',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#16B96A"/><path d="M10 14v8h12v-8" stroke="#fff" strokeWidth="2"/><rect x="12" y="10" width="8" height="4" rx="1" fill="#fff"/></svg>
    ),
  },
  {
    slug: 'staying-safe',
    name: 'Staying Safe',
    description:
      'Review safety practices, injury reporting, drug and alcohol guidelines, and health-related policies that keep you and others protected at work.',
    color: '#F05252',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F05252"/><path d="M16 10l6 12H10l6-12z" fill="#fff"/></svg>
    ),
  },
  {
    slug: 'getting-support',
    name: 'Getting Support',
    description:
      'Learn who to contact, how to request accommodations, and where to go for help with HR questions, benefits, or workplace concerns.',
    color: '#F5991A',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#F5991A"/><circle cx="16" cy="16" r="6" fill="#fff"/><rect x="15" y="12" width="2" height="6" rx="1" fill="#F5991A"/><rect x="15" y="20" width="2" height="2" rx="1" fill="#F5991A"/></svg>
    ),
  },
  {
    slug: 'leaving-or-changing-roles',
    name: 'Leaving or Changing Roles',
    description:
      'Understand what happens if you resign, transfer, or experience a change in your role—plus key exit procedures and employment classification info.',
    color: '#232326',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="8" fill="#232326"/><path d="M12 16h8m-3-3 3 3-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Employee Handbook</h1>
      <div className={styles.grid}>
        {categories.map((cat) => (
          <Link href={`/${cat.slug}`} key={cat.slug} className={styles.card} style={{ borderColor: cat.color }}>
            <div className={styles.icon} style={{ backgroundColor: cat.color }}>
              {cat.icon}
            </div>
            <div className={styles.text}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
