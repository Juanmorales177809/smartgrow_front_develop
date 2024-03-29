import { useContext } from "react";
import CardSmartgrow from "../../Components/CardSmartgrow";
import LayaoutCards from "../../Components/LayaoutCards";
import { formatDateTime } from "../../Utils";

import { SmartgrowContext } from "../../SmartgrowContext";

const Cultivo = () => {
  const { sensorData, lastDates } = useContext(SmartgrowContext);
  const { formattedDate, formattedHour } = formatDateTime(lastDates.scd40);

  return (
    <LayaoutCards>
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-4 lg:flex lg:flex-row lg:gap-6 lg:pb-6">
        <CardSmartgrow
          text="Temperatura"
          date={formattedDate}
          hour={formattedHour}
          value={sensorData.temperatura}
          units="°C"
          dataApi="temperatura"
          sensor="scd40"
          image="./img/cannabis10.jpg"
        />
        <CardSmartgrow
          text="Humedad"
          date={formattedDate}
          hour={formattedHour}
          value={sensorData.humedad}
          units="%"
          dataApi="humedad"
          sensor="scd40"
          image="./img/cannabis9.jpg"
        />
        <CardSmartgrow
          text="Dioxido de carbono"
          date={formattedDate}
          hour={formattedHour}
          value={sensorData.co2}
          units="ppm"
          dataApi="co2"
          sensor="scd40"
          image="./img/cannabis8.jpg"
        />
      </div>
      <div className="w-full h-1/2 flex flex-col justify-center items-center gap-4 lg:flex lg:flex-row lg:gap-6 lg:pb-6">
        <CardSmartgrow
          text="PPF"
          date="Sin datos"
          hour=""
          value=""
          units="umol"
          image="./img/cannabis.jpg"
        />
        <CardSmartgrow
          text="VPD"
          date={formattedDate}
          hour={formattedHour}
          value={sensorData.vpd}
          units="Kpa"
          dataApi="VPD"
          sensor="scd40"
          image="./img/cannabis2.jpg"
        />
        <CardSmartgrow
          text="PPFD"
          date="Sin datos"
          hour=""
          value=""
          units="umol*m2"
          image="./img/cannabis3.jpg"
        />
      </div>
    </LayaoutCards>
  );
};

export default Cultivo;
