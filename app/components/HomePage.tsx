import { CardWithImage } from "./CardWithImage";
import { Code } from "./Code";
import { Footer } from "./Footer";
import Header from "./Header";
import { Hero } from "./Hero";

export const HomePage = ({}) => {
  return (
    <>
      <Header />
      <Hero />
      <div className="p-5" />
      <h2 className="card-title">
        Easy examples to configure different tools to work together, so you
        DON'T have to
      </h2>
      <Code />
      <div className="p-5" />
      <div className="flex">
        <CardWithImage />
        <CardWithImage />
        <CardWithImage />
      </div>
      <div className="p-20" />
      <Footer />
    </>
  );
};
