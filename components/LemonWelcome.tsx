import Counter from "../islands/Counter.tsx";
import { Lemon } from "./Lemon.tsx";

export function LemonWelcome() {
  return (
    <div class="lemon-welcome">
      <Lemon />
      <p>
        Welcome to <em>fresh</em>.
      </p>
      <Counter start={0} />
    </div>
  );
}
