import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const LastVisit = () => {
  const { t } = useTranslation();
  const [lastVisit, setLastVisit] = useState("");
  const [lastLocation, setLastLocation] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [showLast, setShowLast] = useState(false);

  const getDeviceInfo = () => {
    const userAgent = navigator.userAgent;
    const platform = navigator.platform;
    let browser = "Desconocido";

    if (userAgent.includes("Chrome")) browser = "Google Chrome";
    else if (userAgent.includes("Firefox")) browser = "Mozilla Firefox";
    else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) browser = "Apple Safari";
    else if (userAgent.includes("Edge")) browser = "Microsoft Edge";
    else if (userAgent.includes("Opera") || userAgent.includes("OPR")) browser = "Opera";
    else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) browser = "Internet Explorer";

    return { device: platform, browser };
  };

  const saveVisit = async (location) => {
    const { device, browser } = getDeviceInfo();
    const visitData = {
      location,
      timestamp: new Date().toISOString(),
      device,
      browser
    };

    try {
      await fetch("https://sheetdb.io/api/v1/" + import.meta.env.VITE_VISITS_GOOGLE_SHEETS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify([visitData])
      });
    } catch (error) {
      console.error("Error al guardar en Google Sheets:", error);
    }
  };

  useEffect(() => {
    const storedVisit = localStorage.getItem("lastVisit");
    const storedLocation = localStorage.getItem("lastLocation");

    if (storedVisit && storedLocation) {
      setLastVisit(storedVisit);
      setLastLocation(storedLocation);
    }

    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const location = `${data.city}, ${data.country_name} ${data.country_code}`;

        localStorage.setItem("lastVisit", new Date().toLocaleString());
        localStorage.setItem("lastLocation", location);

        setLastLocation(location);
        setLastVisit(new Date().toLocaleString());

        await saveVisit(location);

        setTimeout(() => {
          setFadeOut(true); 
          setTimeout(() => {
            setShowLast(true); 
          }, 500);
        }, 1000); 
      } catch (error) {
        console.error("No se pudo obtener la ubicación:", error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <div className="text-[#1010106c] dark:text-[#f5f7f783] text-center py-2 text-sm relative">
      {!showLast ? (
        <p className={`transition-opacity duration-1000 ${fadeOut ? "opacity-0" : "opacity-100"}`}>
          {t('lastVisit.previousVisit')} <span className="font-semibold">{lastLocation || t('lastVisit.loading')}</span>
        </p>
      ) : (
        <p className={`transition-opacity duration-1000 ${fadeOut ? "opacity-100" : "opacity-0"}`}>
          {t('lastVisit.lastVisit')} <span className="font-semibold">{lastLocation}</span>
        </p>
      )}
    </div>
  );
};

export default LastVisit;
