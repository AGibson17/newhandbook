import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface PolicyMeta {
  slug: string;
  title: string;
  description: string;
  states?: string[];
}

interface CategoryPageProps {
  category: string;
  policies: PolicyMeta[];
}

export default function CategoryPage({ category, policies }: CategoryPageProps) {
  return (
    <main style={{ padding: '1rem', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem', textTransform: 'capitalize' }}>
        {category.replace(/-/g, ' ')}
      </h1>
      <div>
        {policies.length === 0 && <p>No policies found in this category.</p>}
        {policies.map((policy) => (
          <Link
            href={`/${category}/${policy.slug}`}
            key={policy.slug}
            style={{
              display: 'block',
              background: '#fff',
              borderRadius: 12,
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 1px 6px rgba(80, 60, 100, 0.08)',
              textDecoration: 'none',
              color: '#232326',
            }}
          >
            <h2 style={{ margin: '0 0 0.25rem 0', fontSize: '1.15rem' }}>
              {policy.title}
            </h2>
            <p style={{ margin: 0, color: '#636363', fontSize: '0.96rem' }}>
              {policy.description}
            </p>
            {policy.states && policy.states.length > 0 && (
              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {policy.states.map((state) => (
                  <span
                    key={state}
                    style={{
                      fontSize: '0.8rem',
                      background: '#e2e9f7',
                      color: '#3b4c6e',
                      padding: '0.15em 0.75em',
                      borderRadius: '10px',
                    }}
                  >
                    {state}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}

export async function getStaticPaths() {
  const categoriesPath = path.join(process.cwd(), 'content/policies');
  const categoryFolders = fs.readdirSync(categoriesPath);

  const paths = categoryFolders.map((cat) => ({
    params: { category: cat },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { category: string } }) {
  const { category } = params;
  const policiesDir = path.join(process.cwd(), 'content/policies', category);

  let policies: PolicyMeta[] = [];
  if (fs.existsSync(policiesDir)) {
    const files = fs.readdirSync(policiesDir);
    policies = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(policiesDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug: file.replace(/\.md$/, ''),
          title: data.title || file.replace(/\.md$/, ''),
          description: data.description || '',
          states: data.states || [],
        };
      });
  }

  return {
    props: {
      category,
      policies,
    },
  };
}
