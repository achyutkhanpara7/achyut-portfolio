import type { MDXComponents } from 'mdx/types';
import { isValidElement } from 'react';
import s from '@/components/case/prose.module.css';

function slugify(node: React.ReactNode): string {
  const text =
    typeof node === 'string'
      ? node
      : Array.isArray(node)
        ? node.map((n) => (typeof n === 'string' ? n : '')).join('')
        : isValidElement(node)
          ? ''
          : String(node ?? '');
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Every ## heading in a case study gets an id, which the side rail uses for scroll-spy.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 id={slugify(children)} className={s.h2}>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className={s.h3}>{children}</h3>,
    p: ({ children }) => <p className={s.p}>{children}</p>,
    ul: ({ children }) => <ul className={s.ul}>{children}</ul>,
    ol: ({ children }) => <ol className={s.ul}>{children}</ol>,
    blockquote: ({ children }) => <blockquote className={s.quote}>{children}</blockquote>,
    strong: ({ children }) => <strong className={s.strong}>{children}</strong>,
    ...components,
  };
}
