import styles from "../styles";
import { features } from "../constants";

const Features = () => {
  return (
    <section
      className={`${styles.flexDefault} py-[4rem] 
                ss:py-[6.25rem] md:py-[8.75rem]`}
    >
      <div className="max-w-[240px] flex-1 xs:max-w-[445px] sm:mr-6">
        <div className="pink-border" />
        <h2 className={`${styles.heading2} pt-8 pb-[3.5rem] ss:pb-[4rem]`}>
          Build & manage distributed teams like no one else.
        </h2>
      </div>
      <div className={`mx-auto sm:mx-0`}>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col xs:flex-row items-center text-center
                        xs:text-left sm:pt-8 xs:items-start
                     ${index !== features.length - 1 ? "mb-[1rem]" : "mb-0"}`}
          >
            <img
              src={feature.icon}
              alt="icon"
              className="w-[60px] h-[60px] xs:mr-[1.438rem] 
                      object-contain mb-[1rem] xs:mb-0"
            />
            <div>
              <h3 className="text-lightCoral pb-[0.5rem]">{feature.title}</h3>
              <p
                className={`opacity-80 ${styles.paragraph1} ${
                  index !== features.length - 1 ? "mb-[3rem]" : "mb-0"
                } xs:mb-0 
                ${index !== features.length - 1 ? "xs:pb-[1rem]" : "xs:pb-0"}`}
              >
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
