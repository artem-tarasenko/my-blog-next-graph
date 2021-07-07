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



export default function ResumeBlock({resume, isMobile}) {

    const stylesHoverBlue = "hover:text-blue-500 transition ease-in-out duration-300"

    return <React.Fragment>
        <div className="resume mx-4 lg:mx-64 my-4 lg:my-8 flex flex-col">
            <div className="personal my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Personal information</h2>
                <div className="flex lg:ml-8 flex-col lg:flex-row items-center">
                    <div className="pic w-48 my-4">
                        <img className="rounded-full filter drop-shadow" src={resume.pic.url} />
                    </div>
                    <div className="info ml-8 mt-4">
                        <div className="flex items-center my-2" ><PhoneAndroidIcon className="mr-2" />
                            <a href={`tel:${resume.number}`} data-rel="external" className={`text-md lg:text-xl text-gray-600 ${stylesHoverBlue}`}>{resume.number}</a>
                        </div>
                        <div className="flex items-center my-2" ><AlternateEmailIcon className="mr-2" />    
                            <a href={`mailto:${resume.email}`} className={`text-md max-w-full lg:text-xl text-gray-600 ${stylesHoverBlue}`}>{resume.email}</a>
                        </div>
                        <div className="flex items-center my-2" ><PersonPinCircleIcon className="mr-2" />
                            <p className={`text-md lg:text-xl text-gray-600 ${stylesHoverBlue}`}>{resume.location}</p>
                        </div>
                        <div className="flex items-center my-2" ><LinkedInIcon className="mr-2" />          
                            <a href={resume.linkedin} target="_blank" rel="noopener noreferrer" className={`text-md max-w-full lg:text-xl text-gray-600 ${stylesHoverBlue}`}>{resume.linkedin}</a>
                        </div>
                        <div className="flex items-center my-2" ><GitHubIcon className="mr-2" />            
                            <a href={resume.github} target="_blank" rel="noopener noreferrer" className={`text-md max-w-full lg:text-xl text-gray-600 ${stylesHoverBlue}`}>{resume.github}</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="summary my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Summary</h2>
                <p className="text-lg text-gray-500 mt-4 mx-4 lg:ml-8">{parse(resume.summary.text)}</p>
            </div>

            <div className="experience my-4">
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Working experience</h2>
                <div className="company flex flex-col mx-4 lg:ml-8">
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
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Education</h2>
                <div className="company flex flex-col mx-4 lg:ml-8">
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
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Skills</h2>
                <div className="skills flex flex-wrap mt-4 lg:ml-8">
                {
                    resume.skills.map( skill => {
                        return <>
                            <div className="skill my-2 px-2 lg:mx-4 flex-shrink-0 w-1/2 lg:w-32">
                                <p>{skill.title}</p>
                                <LinearProgress variant="determinate" value={skill.value} />
                            </div>
                        </>
                    })
                }
                </div>
            </div>
            
            <div className={`studies my-4 ${styles.richText} ${isMobile ? styles.richTextPlainMobile : styles.richTextPlain}`}>
                <h2 className="border-b-2 border-gray-300 uppercase py-2 text-center lg:text-left">Soft Skills</h2>
                <p className="mt-4 lg:mx-0 w-full lg:w-auto">{parse(resume.softSkills.html)}</p>
            </div>
        </div>
    </React.Fragment>
}