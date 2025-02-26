import React from "react";
import img1 from "../static/images/1.jpg";
import img2 from "../static/images/2.jpg";
import img3 from "../static/images/3.jpg";
import { byPlatform, byTechnology, byIndustry } from "../static/data/data";
import CustomCard from "../customCumponents/CustomCard";

function MissingPage() {
  return (
    <div style={{ backgroundColor: "#e3dbdb" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          color: "#422633",
        }}
      >
        What Softwrere you are looking for ?
      </div> 
      <CustomCard title="By Platform" data={byPlatform} image={img1} />
      <CustomCard title="By Technology" data={byTechnology} image={img2} />
      <CustomCard title="By Industry" data={byIndustry} image={img3} />
    </div>
  );
}

export default MissingPage;
