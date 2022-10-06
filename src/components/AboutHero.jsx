import styles from "../styles";

const AboutHero = () => (
  <div className={`${styles.flexDefault} pt-[2rem] pb-[6.75rem]`}>
    <div className="pb-[1rem]">
      <h1
        className={`${styles.heading1} text-center
           sm:text-left`}
      >
        About
      </h1>
    </div>
    <div className="flex">
      <div className="pink-border hidden sm:block" />
      <p
        className={`${styles.paragraph1} sm:mt-[2.75rem] 
          md:text-[1.125rem] text-center md:max-w-[700px]
          sm:text-left mx-auto sm:self-end pt-[1.125rem] ss:pt-[1.5rem]`}
      >
        We help companies build dynamic teams made up of top global talent.
        Using our network of passionate professionals we drive innovation and
        deliver incredible outcomes. Talented, diverse teams shape the best
        products and experiences. We’ll bring those teams to you.
      </p>
    </div>
  </div>
);

export default AboutHero;
