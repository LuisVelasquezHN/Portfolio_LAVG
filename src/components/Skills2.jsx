import React from 'react'
import Icons from './IconsSkills';
import { useMediaQuery } from "react-responsive";
import IconsText from './IconTextSkill';

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
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <main className="w-full max-w-[1100px] mx-auto">
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
            quantity={6}
          />
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
            reverse
          />

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
            quantity={6}
            
          />

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
            reverse
          />
        </>
      )} 

      {!isMobile &&(

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
          quantity={12} 
          />
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
            reverse 
            />
            </>
      )}
      
    

    </main>
  );
}
