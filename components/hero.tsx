import HeroSlider from "./hero-slider";

const Hero = () => {
  return (
    <section
      className=" min-h-screen bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="container mx-auto h-full">
        {/* slider */}
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;

