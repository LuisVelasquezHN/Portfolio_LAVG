import { useEffect } from "react";

const LastVisit = () => {
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
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const location = `${data.city}, ${data.country_name} ${data.country_code}`;

        await saveVisit(location);
      } catch (error) {
        console.error("No se pudo obtener la ubicación:", error);
      }
    };

    fetchLocation();
  }, []);

  return null;
};

export default LastVisit;
