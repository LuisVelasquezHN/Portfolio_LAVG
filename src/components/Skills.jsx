import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";

const skills = [
  { name: "HTML", logo: "/logos/html.svg" },
  { name: "CSS", logo: "/logos/css.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Angular", logo: "/logos/angular.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "PHP", logo: "/logos/php.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "NestJS", logo: "/logos/nestjs.svg" },
  { name: "C#", logo: "/logos/csharp.svg" },
  { name: "Oracle", logo: "/logos/oracle.svg" },
  { name: "Windows Server", logo: "/logos/windows.svg" },
];

const repeatedSkills = [...skills, ...skills];

const ParallaxText = ({ items, baseVelocity = 5 }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

  const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden w-full py-4">
      <motion.div
        className="flex whitespace-nowrap text-white font-bold"
        style={{ x }}
      >
        {repeatedSkills.map((item, i) => (
          <div 
            key={i} 
            className="flex items-center space-x-2 mx-4 text-lg md:text-xl lg:text-2xl"
          >
            <img 
              src={item.logo} 
              alt={item.name} 
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain"
            />
            <span className="text-sm md:text-base lg:text-lg">{item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="max-w-[350px] sm:max-w-[1000px] mx-auto px-4">
      <ParallaxText items={skills} baseVelocity={-3} />
      <ParallaxText items={skills} baseVelocity={5} />
      <ParallaxText items={skills} baseVelocity={-4} />
    </section>
  );
};
