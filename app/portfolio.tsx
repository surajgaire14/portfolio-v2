import { About, Cloud, Contact, Experience, Footer, Header, Hero, Metrics, Projects, Toolkit, Values } from "./components/portfolio-sections";

export default function Portfolio() {
  return <><Header /><main><div className="ambient" /><Hero /><Metrics /><About /><Toolkit /><Projects /><Experience /><Cloud /><Values /><Contact /></main><Footer /></>;
}
