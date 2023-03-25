import { Head } from "$fresh/runtime.ts";
import type { VNode } from "https://esm.sh/v112/preact@10.11.0/src/index";
import { TopNavigation } from "./TopNavigation.tsx";

interface LayoutProps {
  title: string;
  children: VNode | VNode[];
}

export default function Layout(props: LayoutProps) {
  return (
    <html lang="en">
      <Head>
        <title>{props.title}</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/modern-css-reset/dist/reset.min.css"
        />
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <body>
        <header>
          <TopNavigation />
        </header>
        <main>{props.children}</main>
      </body>
    </html>
  );
}
