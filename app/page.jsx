import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br />
        <span className="orange_gradient text-center">AI Prompts</span>
      </h1>
      <p className="desc text-center">
        This is an open-source AI Prompting tool for modern world to discover
        and share creative prompts
      </p>
      <Feed />
    </section>
  );
};

export default Home;
