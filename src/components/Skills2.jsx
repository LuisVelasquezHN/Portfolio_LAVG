import React from 'react'
import Icons from './IconsSkills';
import { useMediaQuery } from "react-responsive";

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
              className="absolute"
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
          <Slider
            images={[
              <Icons.HTML />,
              <Icons.TAILWIND />,
              <Icons.CSS />,
              <Icons.SASS />,
              <Icons.JS />,
              <Icons.TS />,
              <Icons.REACT />,
              <Icons.ANGULAR />,
              <Icons.PHP />,
              <Icons.ORACLE />,
              <Icons.XAMARIN />,
              <Icons.WORDPRESS />,
              <Icons.HTML />,
              <Icons.TAILWIND />,
              <Icons.CSS />,
              <Icons.SASS />,
              <Icons.JS />,
              <Icons.TS />,
              <Icons.REACT />,
              <Icons.ANGULAR />,
              <Icons.PHP />,
              <Icons.ORACLE />,
              <Icons.XAMARIN />,
              <Icons.WORDPRESS />,
             
            ]}
            width={isMobile ? 30 : 50}
            height={isMobile? 60 : 80}
            quantity={24}
          />
          <Slider
            images={[
                <Icons.NODE />,
                <Icons.NEST />,
                <Icons.CHARP />,
                <Icons.PORTGRES />,
                <Icons.MYSQL />,
                <Icons.TALEND />,
                <Icons.UIPATH />,
                <Icons.OPENAI />,
                <Icons.ILLUSTRATOR />,
                <Icons.PHOTOSHOP />,
                <Icons.COREL />,
                <Icons.NODE />,
                <Icons.NEST />,
                <Icons.CHARP />,
                <Icons.PORTGRES />,
                <Icons.MYSQL />,
                <Icons.TALEND />,
                <Icons.UIPATH />,
                <Icons.OPENAI />,
                <Icons.ILLUSTRATOR />,
                <Icons.PHOTOSHOP />,
                <Icons.COREL />,
            ]}
            width={isMobile ? 30 : 50}
            height={isMobile? 60 : 80}
            quantity={22}
            reverse
          />
         
        </main>
      );
}
