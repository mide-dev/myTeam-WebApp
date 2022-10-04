import styles from "../styles";
import Button from "./Button";

const CTA = () => (
  <section
    className={` 
      py-[5.25rem] md:py-[4.75rem]`}
  >
    <div
      className="max-w-[573px] md:max-w-[917px] flex flex-col mx-auto
                    items-center ss:flex-row  ss:justify-between"
    >
      <h2
        className={`${styles.heading2} text-center text-stateGreen mb-[1.5rem] ss:mb-0`}
      >
        Ready to get started?
      </h2>
      <Button
        text="contact us"
        styles="border-2 text-stateGreen
            border-stateGreen text-[1.125rem]"
      />
    </div>
  </section>
);

export default CTA;
