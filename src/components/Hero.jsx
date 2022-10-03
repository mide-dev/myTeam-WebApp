import styles from "../styles";

const Hero = () => {
  return (
    <div
      className={`${styles.flexDefault} mt-[2rem] sm:mt-[3rem] 
        pb-[12.313rem]`}
    >
      <div className="sm:mr-4">
        <h1
          className={`${styles.heroText} text-center
           sm:text-left `}
        >
          Find the <br /> best <span className="text-lightCoral">talent</span>
        </h1>
      </div>

      <div className="flex">
        <div className="blue-border hidden sm:block" />
        <p
          className={`${styles.paragraph1} text-center 
          sm:text-left mx-auto sm:self-end pt-[1.125rem] ss:pt-[1.5rem] `}
        >
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
    </div>
  );
};

export default Hero;
