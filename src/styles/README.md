Conventions:
- tokens.css is the source of truth for CSS custom properties (:root).
- tailwind.css imports tokens.css at the top so Tailwind and downstream styles can use variables.
- premium-theme.css and other theme files must NOT declare :root; instead consume variables with var(--...).

How to add a variable:
1. Add the canonical variable to src/styles/tokens.css
2. Use var(--name) in component/theme files
