// import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Typewriter from "typewriter-effect";
import profile from "../assets/profile-1.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "am",
    },
    {
      text: "a",
    },
    {
      text: "Full Stack",
    },
    {
      text: "Machine Learning Engineer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div
      className="flex items-center min-h-[40rem] md:justify-around justify-center"
      name="home"
    >
      <div className="flex flex-col md:max-w-[400px] lg:max-w-[600px] md:gap-5 gap-2">
        <div className="text-center md:text-left text-2xl text-white md:text-5xl font-bold mb-4 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ y: -7 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }} // Ensures motion.div behaves as an inline-block element
            className="text-white text-center poppins font-bold"
          >
            Samuel Okon
          </motion.div>
        </div>
        <div className="dark:text-white text-black text-center md:text-left text-2xl md:text-4xl">
          I am a {""}
          <span className=" inline-block text-md">
            <Typewriter
              options={{
                strings: [
                  "Machine Learning Engineer",
                  "Data Scientist",
                  "Backend Developer",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <p className="text-neutral-50 font-light text-justify mx-20 md:mx-0 poppins-extralight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ex,
          debitis nostrum maiores nulla nesciunt voluptatum odio nisi similique
          inventore eveniet quia amet quae itaque illum autem corrupti
          voluptatem excepturi.
        </p>
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm mx-20 md:mx-0 ">
          My Resume
        </button>
      </div>

      <motion.div
        initial={{ x: "100vw" }} // Start off-screen to the right
        animate={{ x: 0 }} // Slide in to x = 0
        transition={{ duration: 2, ease: "easeInOut" }} // Animation duration
        className="hidden md:flex md:max-w-96 md:max-h-96"
      >
        <img
          src={profile}
          alt="Your Image"
          className="rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
