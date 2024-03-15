import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapContainer = () => {
  const mapStyles = {
    height: "200px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 37.7749,
    lng: -122.4194,
  };
  return (
    <div className="col-span-12 2xl:col-span-6 w-full items-center justify-center ml-auto mr-0">
      <div className="bg-white dark:bg-box-dark m-0 p-0 text-body dark:text-subtitle-dark text-[15px] rounded-10 relative h-full">
        <div className="px-[25px] text-dark dark:text-title-dark font-medium text-[17px] flex flex-wrap items-center justify-between max-sm:flex-col max-sm:h-auto max-sm:mb-[15px]">
          <h1 className="mb-0 inline-flex items-center py-[16px] overflow-hidden whitespace-nowrap text-ellipsis text-[18px] font-semibold text-dark dark:text-title-dark capitalize">
            Google Map Basic
          </h1>
        </div>
        <div className="p-[25px] pt-0">
          <div className="google-map h-[222px]" id="google-map-basic" dir="ltr">
            <LoadScript googleMapsApiKey="AIzaSyBAFByPpAkY-fyLg3qm1eQ6TxWdmR4yonw">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              >
                <Marker position={defaultCenter} />
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleMapContainer;
