import React from "react";
import styles from "./ResumeBlock.module.css";

export default function Heading( {name, subtitle, isMobile} ) {

    return <>
              <div className="bg-transparent blog z-10">
                <div className="h-48 container mx-auto px-4 lg:px-64 flex flex-col justify-center">
                    <div className="title flex flex-row justify-between">
                        <h1 className="text-4xl lg:text-6xl">{name}</h1>
                        <a className={`download-btn flex px-2 py-2 ${styles.downloadButton}`} href="Resume-Artem-Tarasenko.pdf" download >
                            { !isMobile ? <p className={`group-hover:scale-x-120 ${styles.downloadButtonText}`}>Download</p> : null}
                            <img className={`h-12 group-hover:scale-x-120 ${styles.downloadButtonIcon}`} src="/icons/pdf.png"/>
                        </a>
                    </div>
                    <h3 className="text-lg mt-4 lg:mt-0 lg:text-xl uppercase text-gray-700">{subtitle}</h3>
                    
                </div>
              </div>
    </>
  }