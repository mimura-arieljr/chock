import { motion } from 'framer-motion';
import FlowingMenu from './Animations/FlowingMenu';
import DecryptedText from './Animations/DecryptedText';

const projectItems = [
  { link: '/404', text: 'SHABANI', image: '/assets/m0.jpeg' },
  { link: '/404', text: 'KIYOMASA', image: '/assets/m1.jpeg' },
  { link: '/404', text: 'ANNIE', image: '/assets/m2.jpeg' },
  { link: '/404', text: 'NENE', image: '/assets/m3.jpeg' }
];


const ProjectsSection = () => {
  return (
    <section 
    id="Projects"
    className="lg:max-w-5xl md:mt-8 px-4 lg:px-8 mx-auto min-h-[700px]">
      <motion.h2
        className="text-3xl md:text-4xl font-gotham text-primary mb-12 text-start"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <DecryptedText
          text="Projects"
          characters="ショクムケイレキ"
          animateOn="view"
          speed={150}
          revealDirection="start"
        />
      </motion.h2>

      <motion.div
        style={{ height: '400px', position: 'relative' }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <FlowingMenu items={projectItems} />
      </motion.div>
    </section>
  );
}

export default ProjectsSection;