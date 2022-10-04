import styles from "../styles";
import { testimonials } from "../constants";
import Pattern from "./Pattern";

const Testimonials = () => (
  <section
    className={`flex flex-col items-center text-center
              py-[8.75rem]`}
  >
    <div className="sm:max-w-[573px] md:max-w-[932px]">
      <h2 className={`${styles.heading2}`}>
        Delivering real results for top companies. Some of our{" "}
        <span className="text-raptureBlue">success stories.</span>
      </h2>
    </div>
    <div className={`flex flex-col gap-x-[1.875rem] sm:flex-1 md:flex-row`}>
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="relative mt-[5.25rem] 
                flex flex-col items-center"
        >
          <Pattern
            img={testimonial.icon}
            styles="-top-10 left-[50%]
                -translate-x-2/4"
          />
          <p className={`${styles.paragraph2} pb-[1rem]`}>{testimonial.body}</p>
          <h3 className={`${styles.heading3} text-raptureBlue`}>
            {testimonial.name}
          </h3>
          <small className="font-medium text-white pb-[1rem]">
            {testimonial.title}
          </small>
          <img
            src={testimonial.img}
            alt="avatar"
            className="w-[3.875rem] h-[3.875rem] 
                object-contain rounded-full border-2"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
