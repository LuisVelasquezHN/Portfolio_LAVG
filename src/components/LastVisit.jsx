import { useEffect, useState } from "react";

const LastVisit = () => {
  const [lastVisit, setLastVisit] = useState("");
  const [lastLocation, setLastLocation] = useState("");
  const [prevVisit, setPrevVisit] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const [showLast, setShowLast] = useState(false);

  useEffect(() => {
    const storedVisit = localStorage.getItem("lastVisit");
    const storedLocation = localStorage.getItem("lastLocation");
    const storedPrevVisit = localStorage.getItem("prevVisit");

    if (storedVisit && storedLocation) {
      setPrevVisit(storedPrevVisit || "Primera visita");
      setLastVisit(storedVisit);
      setLastLocation(storedLocation);
    }

    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const location = `${data.city}, ${data.country_name} ${data.country_code}`;

        localStorage.setItem("prevVisit", storedVisit || "Primera visita");
        localStorage.setItem("lastVisit", new Date().toLocaleString());
        localStorage.setItem("lastLocation", location);

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
          Visita anterior desde <span className="font-semibold">{lastLocation}</span>
           {/* el{" "}
          <span className="font-semibold">{prevVisit}</span>. */}
        </p>
      ) : (
        <p className="transition-opacity duration-1000 opacity-100">
          Última visita desde <span className="font-semibold">{lastLocation}</span>
           {/* el{" "}
          <span className="font-semibold">{lastVisit}</span>. */}
        </p>
      )}
    </div>
  );
};

export default LastVisit;
