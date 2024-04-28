import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import DocsPage from "./pages/Docs";
import TeamPage from "./pages/Team";
import ProductsPage from "./pages/Products";

const routes = [
  {
    title: "Home",
    href: "/home",
    component: HomePage,
    children: [],
    index: true,
  },
  {
    title: "Products",
    href: "/products",
    component: ProductsPage,
    children: [],
    index: true,
  },
  {
    title: "Our Team",
    href: "/team",
    component: TeamPage,
    children: [],
    index: true,
  },
  {
    title: "Docs",
    href: "/docs",
    component: DocsPage,
    children: [],
    index: true,
  },
  {
    title: "News",
    href: "/news",
    component: NewsPage,
    children: [],
    index: true,
  },
];

export default routes;
