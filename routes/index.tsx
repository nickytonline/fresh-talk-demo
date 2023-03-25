import Layout from "../components/Layout.tsx";
import { LemonWelcome } from "../components/LemonWelcome.tsx";

export default function Home() {
  return (
    <Layout title="Movies">
      <LemonWelcome />
    </Layout>
  );
}
