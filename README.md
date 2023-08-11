# Betting Assignment

This example features how you use a different styling solution than [styled-jsx](https://github.com/vercel/styled-jsx) that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using [styled-components](https://github.com/styled-components/styled-components).

This example uses the Rust-based [SWC](https://nextjs.org/docs/advanced-features/compiler#styled-components) in Next.js for better performance than Babel.

## How to run

```bash
npm run dev
```

## Improvements

- Have both API call and style componenents loaded from server side render.
- Add testing.
- Designs could be better e.g. (font size, distances between elements).
- A better design for filters feature.
- Design loading and error screen.
