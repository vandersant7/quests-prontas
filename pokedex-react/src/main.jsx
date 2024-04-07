import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./globalStyles/styles.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SearchPokemon } from "./pages/SearchPokemon/index.jsx";
import { HomePage } from "./pages/Home";
import { PokemonPage } from "./pages/PokemonPage/index.jsx";
import { PokemonProvider } from "./context/PokemonProvider.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "pokemon/:id",
        element: <PokemonPage />,
      },
      {
        path: "search",
        element: <SearchPokemon />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyles />
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>
);
