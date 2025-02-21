import React, { useEffect } from "react";
import parse from 'html-react-parser';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from "./ProjectFull.module.css";
import Prism from "prismjs";


function ProjectFull( {project, links, isMobile} ) {

    useEffect( () => {
        const items = document.querySelectorAll("pre");
        items.forEach( item => {
            const parentClass = item.parentElement.classList[0];
            item.classList.add(`language-${parentClass}`);
        });

        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }
    }, [])

    return (
        
            <React.Fragment>
                    <section className="blog flex container 2xl mx-auto lg:my-6 flex-grow">
                        <div className={`${isMobile ? styles.postMobile : ''} ${styles.post} h-full px-4 lg:px-0 lg:mx-64 w-screen`}>
                            <h1 className="my-4">{project.title}</h1>
                            {parse(project.content.html)}
                            <div className="flex flex-wrap justify-between lg:mx-4 lg:justify-start my-6 lg:my-0">
                                {   project.tags.map( tag => <p className=" px-2 py-1 lg:mx-2 lg:px-4 lg:py-2 text-sm lg:text-base flex-wrap border">{tag}</p>)   }
                            </div>
                            <div className="links my-4 lg:my-8 relative lg:h-8 flex justify-between">
                                {   links.prev && <a href={`/portfolio/${links.prev.slug}`} className="lg:w-auto absolute left-0 border lg:px-4 lg:py-2 
                                                        bg-gray-100 lg:hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                        <p className={`flex ${isMobile ? styles.linksMobile : ''}`}>
                                                             <ArrowBackIcon className="mr-1" />
                                                             {!isMobile ? links.prev.title : 'Prev'}
                                                        </p>
                                                    </a>   }
                                {   links.next && <a href={`/portfolio/${links.next.slug}`} 
                                                    className=" lg:w-auto absolute right-0 border lg:px-4 lg:py-2 bg-gray-100 lg:hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                        <p className={`flex ${isMobile ? styles.linksMobile : ''}`}>{!isMobile ? links.next.title : 'Next'}<ArrowForwardIcon className="ml-1" /></p></a>   }
                            </div>
                        </div>
                    </section>
                    
            </React.Fragment>

    )
}

export default ProjectFull;
