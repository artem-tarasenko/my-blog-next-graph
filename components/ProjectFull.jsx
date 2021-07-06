import React from "react";
import parse from 'html-react-parser';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from "./ProjectFull.module.css";


function ProjectFull( {project, links, isMobile} ) {

    return (
        
            <React.Fragment>
                    <section className="blog flex container 2xl mx-auto lg:my-6 flex-grow">
                        <div className={`${!isMobile ? styles.post : styles.postMobile} h-full mx-4 lg:mx-64`}>
                            <h1 className="my-4">{project.title}</h1>
                            {parse(project.content.html)}
                            <div className="flex flex-wrap lg:mx-4 justify-between lg:justify-start my-6 lg:my-0">
                                {   project.tags.map( tag => <p className=" px-2 py-1 lg:mx-2 lg:px-4 lg:py-2 text-sm lg:text-base flex-wrap border">{tag}</p>)   }
                            </div>
                            <div className="links my-4 lg:my-8 relative lg:h-8 flex justify-between">
                                {   links.prev && <a href={`/portfolio/${links.prev.slug}`} 
                                                    className=" lg:w-auto absolute left-0 border lg:px-4 lg:py-2 bg-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                         <p className={`flex ${isMobile ? styles.linksMobile : ''}`}><ArrowBackIcon className="mr-1" />{!isMobile ? links.prev.title : 'Prev'}</p></a>   }
                                {   links.next && <a href={`/portfolio/${links.next.slug}`} 
                                                    className=" lg:w-auto absolute right-0 border lg:px-4 lg:py-2 bg-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                        <p className={`flex ${isMobile ? styles.linksMobile : ''}`}>{!isMobile ? links.next.title : 'Next'}<ArrowForwardIcon className="ml-1" /></p></a>   }
                            </div>
                        </div>
                    </section>
                    
            </React.Fragment>

    )
}

export default ProjectFull;