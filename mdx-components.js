import { useMDXComponents as getThemeComponents } from "nextra-theme-blog";
import Image from "next/image";

const themeComponents = getThemeComponents();

function GitHubLink({ url }) {
  const display = url.replace(/^https?:\/\//, "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35em",
        fontSize: "0.9em",
      }}
    >
      <svg
        height="1em"
        width="1em"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={{ verticalAlign: "text-bottom" }}
      >
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
      </svg>
      {display}
    </a>
  );
}

function Figure({ caption, ...imageProps }) {
  return (
    <figure
      style={{
        margin: "1.5rem 0",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        borderRadius: "0.5rem",

        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Image
        {...imageProps}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
      {caption && (
        <figcaption
          style={{
            paddingLeft: "1.0rem",
            paddingRight: "1.0rem",
            paddingTop: "0.0rem",
            paddingBottom: "0.75rem",
            fontStyle: "italic",
            color: "#ccc",
            fontSize: "0.9rem",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function Callout({ children }) {
  return (
    <aside
      style={{
        padding: "1rem 1.25rem",
        borderRadius: "0.5rem",
        backgroundColor: "rgba(34, 197, 94, 0.08)",
        border: "1px solid rgba(34, 197, 94, 0.25)",
        marginTop: "2rem",
      }}
    >
      {children}
    </aside>
  );
}

export function useMDXComponents(components) {
  const ThemeWrapper = themeComponents.wrapper;

  return {
    ...themeComponents,
    ...components,
    Image: (props) => <Image {...props} />,
    Figure,
    Callout,
    wrapper({ children, metadata }) {
      return (
        <ThemeWrapper metadata={metadata}>
          {metadata.github && (
            <div style={{ marginTop: "-2rem", marginBottom: "1.5rem" }}>
              <GitHubLink url={metadata.github} />
            </div>
          )}
          {children}
        </ThemeWrapper>
      );
    },
  };
}
