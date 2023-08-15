import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const waLink = "https://api.whatsapp.com/send/?phone=6282153681555&type=phone_number&app_absent=0";

const linkedInLink = "https://www.linkedin.com/in/jimmyzheng95/";

const Contact = () => {
  return (
    <motion.div variants={slideIn("top", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>
      <div className="flex flex-row gap-10 pt-8">
        <a target="_blank" href={waLink} rel="noreferrer">
          <img className="h-16 w-16 cursor-pointer" src="/src/assets/whatsapp.png" />
        </a>
        <a target="_blank" href={linkedInLink} rel="noreferrer">
          <img className="h-14 w-14 cursor-pointer" src="/src/assets/linkedin.png" />
        </a>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
