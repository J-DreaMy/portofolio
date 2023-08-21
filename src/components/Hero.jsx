import { avatar } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`w-full mx-auto h-auto mb-24 md:mb-12`}>
      <div className={`relative inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className={`flex flex-col-reverse md:flex-row items-center md:items-start mx-auto justify-between`}>
          <div className={`flex flex-row items-start gap-5`}>
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#1EBBD7]" />
              <div className="w-1 sm:h-80 h-40 blue-gradient" />
            </div>

            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#1EBBD7]">Jimmy</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                I am full stack developer <br className="sm:block hidden" />I develop web and mobile applications
              </p>
            </div>
          </div>

          <div className="h-32 w-32 md:h-36 md:w-36 rounded-full ring-4 ring-white md:mt-12 mb-8 overflow-hidden">
            <img src={avatar} className="hover:scale-110 w-full h-full transition duration-300 object-fill cursor-pointer" alt="jimmy-profile"></img>
          </div>

          <div></div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/*
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
