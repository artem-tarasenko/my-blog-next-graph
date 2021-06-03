import React from "react";
import parse from 'html-react-parser';

import styles from "./ResumeBlock.module.css";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

// import Rating from '@material-ui/lab/Rating';
import LinearProgress from '@material-ui/core/LinearProgress';



export default function ResumeBlock({resume}) {
    return <React.Fragment>
        <div className="resume mx-64 mt-8 flex flex-col">

            <div className="">
                <div className="title flex flex-row justify-between">
                    <h1 className="text-6xl">{resume.name}</h1>
                    <a className={`download-btn flex px-2 py-2 ${styles.downloadButton}`} href="#">
                        <p className={`group-hover:scale-x-120 ${styles.downloadButtonText}`}>Download</p>
                        <img className={`h-12 group-hover:scale-x-120 ${styles.downloadButtonIcon}`} src="/icons/pdf.png"/>
                    </a>
                </div>
                <h3 className="text-xl mb-8 uppercase text-gray-700">{resume.subtitle}</h3>
                
            </div>

            <div className="personal my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Personal information</h2>
                <div className="flex ml-8">
                    <div className="pic w-48 my-4">
                        <img className="rounded-full filter drop-shadow" src={resume.pic.url} />
                    </div>
                    <div className="info ml-8 mt-4">
                        <div className="flex items-center my-2" ><PhoneAndroidIcon className="mr-2" /><p className="text-xl">{resume.number}</p></div>
                        <div className="flex items-center my-2" ><AlternateEmailIcon className="mr-2" /><p className="text-xl">{resume.email}</p></div>
                        <div className="flex items-center my-2" ><PersonPinCircleIcon className="mr-2" /><p className="text-xl">{resume.location}</p></div>
                        <div className="flex items-center my-2" ><LinkedInIcon className="mr-2" /><p className="text-xl">{resume.linkedin}</p></div>
                        <div className="flex items-center my-2" ><GitHubIcon className="mr-2" /><p className="text-xl">{resume.location}</p></div>
                    </div>
                </div>
            </div>

            <div className="summary my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Summary</h2>
                <p className="text-lg text-gray-500 mt-4 ml-8">{parse(resume.summary.text)}</p>
            </div>

            <div className="experience my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Working experience</h2>
                <div className="company flex flex-col ml-8">
                    {
                        resume.workExperience.map( comp => {
                            return <>
                                <div className={`my-2 ${styles.richText}`}>{parse(comp.html)}</div>
                            </>
                        })
                    }
                </div>
            </div>

            <div className="studies my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Education</h2>
                <div className="company flex flex-col ml-8">
                    {
                        resume.education.map( study => {
                            return <>
                                <div className={`my-2 ${styles.richText}`}>{parse(study.html)}</div>
                            </>
                        })
                    }
                </div>
            </div>

            <div className="studies my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Skills</h2>
                <div className="skills flex flex-wrap mt-4 ml-4">
                {
                    resume.skills.map( skill => {
                        return <>
                            <div className="skill my-2 mx-4 flex-shrink-0 w-32">
                                <p>{skill.title}</p>
                                <LinearProgress variant="determinate" value={skill.value} />
                            </div>
                        </>
                    })
                }
                </div>
            </div>
            
            <div className="studies my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2">Soft Skills</h2>
                <p className="mt-4">No soft skills... Only oldschool... Only hardcore...</p>
            </div>
        </div>
    </React.Fragment>
}