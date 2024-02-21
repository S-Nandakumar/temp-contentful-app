import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>ContentFul CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga
            quaerat temporibus quos reiciendis quibusdam deleniti quasi nulla
            odit doloribus possimus omnis praesentium quo voluptatem provident
            asperiores nostrum, facilis placeat.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="Hero Image" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
