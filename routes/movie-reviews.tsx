import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import Layout from "../components/Layout.tsx";

interface Movie {
  name: string;
  stars: number;
}

// In memory database
const movies = [
  { name: "Top Gun: Maverick", stars: 4 },
  { name: "Teenage Mutant Ninja Turtles II: The Secret of the Ooze", stars: 2 },
  { name: "Everything Everywhere All at Once", stars: 5 },
];

export const handler: Handlers<Movie[]> = {
  async GET(_req: Request, ctx: HandlerContext<Movie[]>) {
    // Simulate fetching data from a database
    return ctx.render(await movies);
  },
  async POST(req: Request, ctx: HandlerContext<Movie[]>) {
    // Simulate adding data from a database
    const formData = await req.formData();
    const name = formData.get("name") as string;
    const stars = Number(formData.get("stars"));
    movies.push({ name, stars });

    return ctx.render(movies);
  },
};

export default function MoviesPage(props: PageProps<Movie[]>) {
  return (
    <Layout title="Movies">
      <h1>Submit a movie rating</h1>
      <form method="POST">
        <label>
          movie name
          <input type="text" name="name" required />
        </label>
        <label>
          star rating
          <input type="number" name="stars" required min={1} max={5} />
        </label>
        <button>Submit</button>
      </form>
      <ul class="movie-ratings">
        {props.data.map(({ name, stars }) => (
          <li key={name}>
            {name} – {new Array(stars).fill("⭐").join("")}
          </li>
        ))}
      </ul>
    </Layout>
  );
}
