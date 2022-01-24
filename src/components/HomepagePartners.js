// Companies that use Loop Language component
// Current images that are being used are examples, not real companies. Please change when loading in the component. :) 


import React from "react";
import clsx from "clsx";
import ThemedImage from '@theme/ThemedImage';
import styles from "./HomepagePartners.module.css";

// Images Import Amazon
import amazonDM from "../../static/img/partners/amazon.png"
import amazonNM from "../../static/img/partners/amazonNM.png"

// Images Import Netflix 
import netflixDM from "../../static/img/partners/netflix.png"
import netflixNM from "../../static/img/partners/netflixNM.png"

// Images Import Fontys 
import fontysDM from "../../static/img/partners/fontys.png"
import fontysNM from "../../static/img/partners/fontysNM.png"

// Images Import Atlassian 
import atlassianDM from "../../static/img/partners/atlassian.png"
import atlassianNM from "../../static/img/partners/atlassianNM.png"

// Images Import Teamviewer 
import teamviewerDM from "../../static/img/partners/teamviewer.png"
import teamviewerNM from "../../static/img/partners/teamviewerNM.png"

// Images Import Delta 
import deltaDM from "../../static/img/partners/delta.png"
import deltaNM from "../../static/img/partners/deltaNM.png"

function generatePartners( lightPic, darkPic, name ){
  return (
      <div key={{name}} className={clsx("col col--2")}>
    <div className={clsx("text--center")}>
      <ThemedImage 
      sources={{
        light: lightPic, 
        dark: darkPic,
      }}
      alt={name} 
      className={styles.partnerIMG} />{" "}
    </div>{" "}
  </div>
  );
}

function Partners() { 
  return [
    generatePartners(amazonDM, amazonNM, "Amazon Logo"), 
    generatePartners(netflixDM, netflixNM, "Netflix Logo"), 
    generatePartners(fontysDM, fontysNM, "Fontys Logo"), 
    generatePartners(atlassianDM, atlassianNM, "Atlassian Logo"), 
    generatePartners(teamviewerDM, teamviewerNM, "Teamviewer Logo"), 
    generatePartners(deltaDM, deltaNM, "Delta Logo"), 
  ]
}


export default function HomepagePartners() {
    var ObtainedPartners = Partners();

    return (
        <section>
          <div className={clsx("container")}>
            <div>
              <h6 className={styles.subHeaderText}>companies that use</h6>
              <h1 className={styles.headerText}>loop language</h1>
            </div>
            <div className={clsx("row")}>
              {" "}              
              {ObtainedPartners}
              {" "}
            </div>{" "}
          </div>{" "}
        </section>
      );
}