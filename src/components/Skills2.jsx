import React, { useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import IconsText from "./IconTextSkill";
import { Modal } from "./Modal";
import { IconExternalLink, IconUserCode } from "@tabler/icons-react";
import { useTranslation } from 'react-i18next';


const Slider = ({ images, width, height, quantity, reverse }) => (
  <div
    className="w-full overflow-hidden"
    style={{
      height,
      maskImage: "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
    }}
  >
    <div className="flex w-full relative" style={{ minWidth: `calc(${width} * ${quantity})` }}>
      {images.map((img, index) => (
        <div
          key={index}
          className="absolute flex flex-row items-center"
          style={{
            width,
            height,
            left: "100%",
            animation: `${reverse ? "reversePlay" : "autoRun"} 15s linear infinite`,
            animationDelay: `calc((15s / ${quantity}) * ${index} - 15s)`,
          }}
        >
          {img}
        </div>
      ))}
    </div>
  </div>
);

export const Skills2 = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const skillsImages = useMemo(() => [
    <IconsText.HTML />,
    <IconsText.TAILWIND />,
    <IconsText.CSS />,
    <IconsText.SASS />,
    <IconsText.JS />,
    <IconsText.TS />,
    <IconsText.REACT />,
    <IconsText.ANGULAR />,
    <IconsText.PHP />,
    <IconsText.UIPATH />,
    <IconsText.NODE />,
    <IconsText.NEST />,
    <IconsText.PORTGRES />,
    <IconsText.MYSQL />,
    <IconsText.ORACLE />,
    <IconsText.WORDPRESS />,
    <IconsText.XAMARIN />,
    <IconsText.CHARP />,
    <IconsText.TALEND />,
    <IconsText.OPENAI />,
    <IconsText.ILLUSTRATOR />,
    <IconsText.PHOTOSHOP />,
    <IconsText.COREL />,
  ], []);

  const sliderData = useMemo(() => (isMobile ? [
    { images: skillsImages.slice(0, 6), quantity: 6 },
    { images: skillsImages.slice(6, 12), quantity: 6, reverse: true },
    // { images: skillsImages.slice(12, 18), quantity: 6 },
    // { images: skillsImages.slice(18, 23), quantity: 5, reverse: true },
  ] : [
    { images: skillsImages.slice(0, 12), quantity: 12 },
    { images: skillsImages.slice(12, 23), quantity: 11, reverse: true },
  ]), [isMobile, skillsImages]);

  return (
    <>
      <section id="skills" className="section p-3 hiddenObs mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
        <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
          <IconUserCode width={30} height={30} stroke={2} />
          {t('navbar.skills')}
          <IconExternalLink
            className="cursor-pointer"
            width={30}
            height={30}
            stroke={2}
            title={t('skills.titleToltip')}
            onClick={() => setIsModalOpen(true)}
          />
        </h2>
        {sliderData.map((data, index) => (
          <Slider key={index} images={data.images} width={120} height={isMobile ? 80 : 90} quantity={data.quantity} reverse={data.reverse} />
        ))}
      </section>
      <Modal modalTitle={t('navbar.skills')} data={skillsImages} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};
