import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: stylesUrl,
    },
  ];
};

export default function Index() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          Remix <span>~ Jokes ~</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="jokes">read some jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}