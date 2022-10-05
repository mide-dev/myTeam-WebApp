import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  CTA,
  Footer,
  Pattern,
} from "../components";

import styles from "../styles";

import {
  patternHeroDown,
  patternHeroLeft,
  patternFeaturesRight,
  patternTestimonialTop,
  patternTestimonialBottom,
  patternCTA,
} from "../assets";

const Home = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* Nav */}
      <div>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className="relative">
        {/* background patterns */}
        <Pattern
          img={patternHeroDown}
          styles="bottom-0 left-[50%]
                -translate-x-2/4 max-w-[95%] 
                sm:left-[75%] md:left-[80%]"
        />
        <Pattern
          img={patternHeroLeft}
          styles="hidden md:block 
                  left-0 top-[25%] -translate-y-2/4 
                  max-w-[200px]"
        />

        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      {/* Features */}
      <div className="bg-stateGreen relative">
        <Pattern img={patternFeaturesRight} styles="right-0 md:bottom-0" />

        <div className={`${styles.boxWidth}`}>
          <Features />
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative">
        <Pattern img={patternTestimonialTop} styles="top-0 left-0 w-[200px]" />
        <Pattern
          img={patternTestimonialBottom}
          styles="bottom-0 right-0 w-[200px]"
        />
        <div className={`${styles.boxWidth}`}>
          <Testimonials />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-lightCoral relative z-[1]">
        <Pattern img={patternCTA} styles="-bottom-5 left-0 w-[200px]" />
        <div className={` ${styles.boxWidth}`}>
          <CTA />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-stateGreen relative z-[2]">
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
