import React, { useState } from 'react'
import { useMediaQuery } from "react-responsive";
import IconsText from './IconTextSkill';
import { Modal } from './Modal';
import { IconExternalLink, IconUserCode } from '@tabler/icons-react';

const Slider = ({ images, width, height, quantity, reverse }) => {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: height,
        maskImage:
          "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)",
      }}
    >
      <div
        className="flex w-full relative"
        style={{ minWidth: `calc(${width} * ${quantity})` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute flex flex-row items-center"
            style={{
              width: width,
              height: height,
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
};

export const Skills2 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const skillsImages = [
    <IconsText.HTML />,
    <IconsText.TAILWIND />,
    <IconsText.CSS />,
    <IconsText.SASS />,
    <IconsText.JS />,
    <IconsText.TS />,
    <IconsText.REACT />,
    <IconsText.ANGULAR />,
    <IconsText.PHP />,
    <IconsText.ORACLE />,
    <IconsText.XAMARIN />,
    <IconsText.WORDPRESS />,
    <IconsText.NODE />,
    <IconsText.NEST />,
    <IconsText.CHARP />,
    <IconsText.PORTGRES />,
    <IconsText.MYSQL />,
    <IconsText.TALEND />,
    <IconsText.UIPATH />,
    <IconsText.OPENAI />,
    <IconsText.ILLUSTRATOR />,
    <IconsText.PHOTOSHOP />,
    <IconsText.COREL />,
  ];
  
  return (
      <>
      <section id="skills" className="section p-3 hiddenObs mt-[10vh] scroll-m-20 w-full container lg:max-w-5xl md:max-w-2xl">
      <h2 className="flex items-center mb-14 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
        <IconUserCode width={30} height={30} stroke={2} />
        Habilidades
        <IconExternalLink className='cursor-pointer' width={30} height={30} stroke={2} title='Ver todas las skills' onClick={() => setIsModalOpen(true)} />
      </h2>
      {isMobile && (
        <>
          <Slider
            images={[
              <IconsText.HTML />,
              <IconsText.TAILWIND />,
              <IconsText.CSS />,
              <IconsText.SASS />,
              <IconsText.JS />,
              <IconsText.TS />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={6} />
          <Slider
            images={[
              <IconsText.REACT />,
              <IconsText.ANGULAR />,
              <IconsText.PHP />,
              <IconsText.ORACLE />,
              <IconsText.XAMARIN />,
              <IconsText.WORDPRESS />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={6}
            reverse />

          <Slider
            images={[
              <IconsText.NODE />,
              <IconsText.NEST />,
              <IconsText.CHARP />,
              <IconsText.PORTGRES />,
              <IconsText.MYSQL />,
              <IconsText.TALEND />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={6} />

          <Slider
            images={[
              <IconsText.UIPATH />,
              <IconsText.OPENAI />,
              <IconsText.ILLUSTRATOR />,
              <IconsText.PHOTOSHOP />,
              <IconsText.COREL />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={5}
            reverse />
        </>
      )}

      {!isMobile && (

        <>
          <Slider
            images={[
              <IconsText.HTML />,
              <IconsText.TAILWIND />,
              <IconsText.CSS />,
              <IconsText.SASS />,
              <IconsText.JS />,
              <IconsText.TS />,
              <IconsText.REACT />,
              <IconsText.ANGULAR />,
              <IconsText.PHP />,
              <IconsText.ORACLE />,
              <IconsText.XAMARIN />,
              <IconsText.WORDPRESS />,
              // <Icons.HTML />,
              // <Icons.TAILWIND />,
              // <Icons.CSS />,
              // <Icons.SASS />,
              // <Icons.JS />,
              // <Icons.TS />,
              // <Icons.REACT />,
              // <Icons.ANGULAR />,
              // <Icons.PHP />,
              // <Icons.ORACLE />,
              // <Icons.XAMARIN />,
              // <Icons.WORDPRESS />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={12} />
          <Slider
            images={[
              <IconsText.NODE />,
              <IconsText.NEST />,
              <IconsText.CHARP />,
              <IconsText.PORTGRES />,
              <IconsText.MYSQL />,
              <IconsText.TALEND />,
              <IconsText.UIPATH />,
              <IconsText.OPENAI />,
              <IconsText.ILLUSTRATOR />,
              <IconsText.PHOTOSHOP />,
              <IconsText.COREL />,
              // <Icons.NODE />,
              // <Icons.NEST />,
              // <Icons.CHARP />,
              // <Icons.PORTGRES />,
              // <Icons.MYSQL />,
              // <Icons.TALEND />,
              // <Icons.UIPATH />,
              // <Icons.OPENAI />,
              // <Icons.ILLUSTRATOR />,
              // <Icons.PHOTOSHOP />,
              // <Icons.COREL />,
            ]}
            width={isMobile ? 120 : 120}
            height={isMobile ? 80 : 90}
            quantity={11}
            reverse />
        </>
      )}
    </section>
    <Modal modalTitle="Habilidades" data={skillsImages} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </>

    

  );
}
