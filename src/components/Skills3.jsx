import React, { useState, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import IconsText from "./IconTextSkillv2";
import { Modal } from "./Modal";
import { IconExternalLink, IconUserCode } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee"; // Importamos la librería

export const Skills3 = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Array con todos los íconos
  const skillsImages = useMemo(
    () => [
      <IconsText.HTML />,
      <IconsText.TAILWIND />,
      <IconsText.CSS />,
      <IconsText.SASS />,
      <IconsText.JS />,
      <IconsText.TS />,
      <IconsText.REACT />,
      <IconsText.REACTNATIVE />,
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
    ],
    []
  );

  // Configuración de sliders según tamaño de pantalla
  const sliderData = useMemo(
    () =>
      isMobile
        ? [
          { images: skillsImages.slice(0, 6), reverse: false },
          { images: skillsImages.slice(6, 13), reverse: true },
        ]
        : [
          { images: skillsImages.slice(0, 13), reverse: false },
          { images: skillsImages.slice(12, 24), reverse: true },
        ],
    [isMobile, skillsImages]
  );

  return (
    <>
      <section
        id="skills"
        className="section p-3 hiddenObs2 md:hiddenObs mt-[10vh] scroll-m-20 w-full mx-auto max-w-[100vw] lg:max-w-5xl"
      >
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
          <div key={index} className="w-full overflow-hidden max-w-[100vw]">
            <Marquee
              speed={45}

              direction={data.reverse ? "right" : "left"}
            >
              {data.images.map((img, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center justify-center w-auto h-[70px] mr-3"
                >
                  {img}
                </div>
              ))}
            </Marquee>
          </div>
        ))}
      </section>


      {/* Modal */}
      <Modal
        modalTitle={t("navbar.skills")}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
