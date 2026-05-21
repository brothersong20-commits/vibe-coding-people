import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="display-lg mt-12 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="display-md mt-12 mb-4 first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="display-sm mt-8 mb-3">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="body-tracked my-4 text-[var(--color-body)]">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="body-md my-4 list-disc space-y-2 pl-6 text-[var(--color-body)] marker:text-[var(--color-muted-soft)]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="body-md my-4 list-decimal space-y-2 pl-6 text-[var(--color-body)] marker:text-[var(--color-muted-soft)]">
        {children}
      </ol>
    ),
    li: ({ children }) => <li>{children}</li>,
    strong: ({ children }) => (
      <strong className="font-semibold text-[var(--color-ink)]">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[var(--color-primary)] underline underline-offset-4 hover:text-[var(--color-primary-active)]"
        target={href?.startsWith("http") ? "_blank" : undefined}
        rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="code rounded-[6px] bg-[var(--color-surface-strong)] px-[6px] py-[2px] text-[var(--color-ink)]">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="my-6 overflow-x-auto rounded-[12px] border border-[var(--color-hairline)] bg-[var(--color-surface-card)] p-5">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-l-2 border-[var(--color-primary)] pl-4 italic text-[var(--color-muted)]">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-10 border-t border-[var(--color-hairline)]" />,
    ...components,
  };
}
