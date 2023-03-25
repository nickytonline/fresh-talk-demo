// More on Preact Signals at https://preactjs.com/guide/v10/signals/
import { signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const count = signal(props.start);

  return (
    <div class="lemon-counter">
      <p>{count}</p>
      <div class="lemon-counter_buttons">
        <Button
          aria-label="Add a Lemon"
          onClick={() => {
            count.value += 1;
          }}
        >
          +
        </Button>
        <Button
          aria-label="Remove a Lemon"
          onClick={() => {
            if (count.value !== 0) {
              count.value -= 1;
            }
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
}
