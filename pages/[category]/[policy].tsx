import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import markdownToHtml from '../../utils/markdownToHtml';

interface PolicyPageProps {
  category: string;
  policy: string;
  title: string;
  description: string;
  content: string; // HTML string
  states?: string[];
}

export default function PolicyPage({ title, description, content, states }: PolicyPageProps) {
  return (
    <main style={{ padding: '1rem', maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h1>
      {states && states.length > 0 && (
        <div style={{ marginBottom: '0.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {states.map((state) => (
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
      <div style={{ color: '#636363', marginBottom: '1.5rem' }}>{description}</div>
      <article
        dangerouslySetInnerHTML={{ __html: content }}
        style={{ background: '#fff', padding: '1rem', borderRadius: 8 }}
      />
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const policiesRoot = path.join(process.cwd(), 'content/policies');
  const categories = fs.readdirSync(policiesRoot);

  const paths = categories.flatMap((category) => {
    const categoryDir = path.join(policiesRoot, category);
    if (!fs.statSync(categoryDir).isDirectory()) return [];
    return fs
      .readdirSync(categoryDir)
      .filter((file) => file.endsWith('.md'))
      .map((file) => ({
        params: {
          category,
          policy: file.replace(/\.md$/, ''),
        },
      }));
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category, policy } = params as { category: string; policy: string };
  const policyPath = path.join(process.cwd(), 'content/policies', category, `${policy}.md`);

  if (!fs.existsSync(policyPath)) {
    return { notFound: true };
  }

  const fileContents = fs.readFileSync(policyPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      category,
      policy,
      title: data.title || policy,
      description: data.description || '',
      content: await markdownToHtml(content),
      states: data.states || [],
    },
  };
};
