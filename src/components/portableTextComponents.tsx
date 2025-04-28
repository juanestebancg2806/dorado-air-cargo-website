import type { ReactNode } from "react";

export const portableTextComponents = {
  block: {
    h1: ({ children }: { children: ReactNode }) => <h1 className="text-4xl font-bold my-4">{children}</h1>,
    h2: ({ children }: { children: ReactNode }) => <h2 className="text-3xl font-semibold my-4">{children}</h2>,
    h3: ({ children }: { children: ReactNode }) => <h3 className="text-2xl font-semibold my-3">{children}</h3>,
    h4: ({ children }: { children: ReactNode }) => <h4 className="text-xl font-semibold my-2">{children}</h4>,
    h5: ({ children }: { children: ReactNode }) => <h5 className="text-lg font-medium my-1">{children}</h5>,
    h6: ({ children }: { children: ReactNode }) => <h6 className="text-base font-medium my-1">{children}</h6>,
    normal: ({ children }: { children: ReactNode }) => <p className="my-2">{children}</p>,
  },
  list: {
    bullet: ({ children }: { children: ReactNode }) => <ul className="list-disc list-inside my-4">{children}</ul>,
    number: ({ children }: { children: ReactNode }) => <ol className="list-decimal list-inside my-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: { children: ReactNode }) => <li className="mb-1">{children}</li>,
    number: ({ children }: { children: ReactNode }) => <li className="mb-1">{children}</li>,
  },
  mark: {
    link: ({ children, node }: { children: ReactNode; node: any }) => {
      const href = node?.markDef?.href || "#";
      return (
        <a
          href={href}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    },
    
    strong: ({ children }: { children: ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    underline: ({ children }: { children: ReactNode }) => (
      <span className="underline">{children}</span>
    ),
  },
};
