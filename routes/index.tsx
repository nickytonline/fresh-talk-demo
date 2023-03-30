import Layout from "../layouts/Layout.tsx";
import { CitrusFruit, CitrusFruitOption } from "../components/CitrusFruit.tsx";
import Counter from "../islands/Counter.tsx";

const fruits: CitrusFruitOption[] = ["lemon", "lime", "orange"];

/**
 * Generates a random starting count.
 *
 * @returns a random number between 1 and 11
 */
function getStartingCount() {
  return Math.floor(Math.random() * 11) + 1;
}

export default function Home() {
  return (
    <Layout title="Welcome">
      <h1>Welcome Node Congress 2023 Friends!</h1>
      <div>
        <p>
          Welcome to <em>fresh</em>!
        </p>
        <p>Here's some counters. You know the drill.</p>
        <ul class="citrus-fruits">
          {fruits.map((fruit, index) => (
            <li>
              <CitrusFruit fruit={fruit} />
              <Counter start={getStartingCount()} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
