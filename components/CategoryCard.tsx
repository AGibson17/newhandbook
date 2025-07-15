import styles from '@/styles/components/CategoryCard.module.scss';
import Link from 'next/link';

interface Props {
  category: {
    slug: string;
    title: string;
    description: string;
  };
}

export default function CategoryCard({ category }: Props) {
  return (
    <Link href={`/${category.slug}`}>
      <div className={styles.card}>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
      </div>
    </Link>
  );
}