import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import CategoryCard from '../components/CategoryCard';

interface Category {
  slug: string;
  title: string;
  description: string;
}

export default function Home({ categories }: { categories: Category[] }) {
  return (
    <main style={{ padding: '1rem', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Employee Handbook</h1>
      <div>
        {categories.map((cat) => (
          <CategoryCard key={cat.slug} category={cat} />
        ))}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const categoriesDir = path.join(process.cwd(), 'content/categories');
  const files = fs.readdirSync(categoriesDir);

  const categories = files.map((file) => {
    const filePath = path.join(categoriesDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: file.replace(/\.md$/, ''),
      title: data.title || file.replace(/\.md$/, ''),
      description: data.description || '',
    };
  });

  return { props: { categories } };
}
