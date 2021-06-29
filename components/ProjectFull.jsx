import React from "react";
import parse from 'html-react-parser';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import styles from "./ProjectFull.module.css";


function ProjectFull( {project, links} ) {

    return (
        
            <React.Fragment>
                    <section className="blog flex container 2xl mx-auto my-6 flex-grow">
                        <div className={`${styles.post} h-full mx-64`}>
                            <h1 className="my-4">{project.title}</h1>
                            {parse(project.content.html)}
                            <div className="flex flex-wrap mt-4">
                                {   project.tags.map( tag => <p className="mx-2 px-4 py-2 border">{tag}</p>)   }
                            </div>
                            <div className="links my-8 relative h-8">
                                {   links.prev && <a href={`/portfolio/${links.prev.slug}`} 
                                                    className="absolute left-0 border px-4 py-2 bg-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                         <p className="flex"><ArrowBackIcon className="mr-1" />{links.prev.title}</p></a>   }
                                {   links.next && <a href={`/portfolio/${links.next.slug}`} 
                                                    className="absolute right-0 border px-4 py-2 bg-gray-100 hover:bg-gray-300 transition-colors ease-in-out duration-300 text-gray-500">
                                                        <p className="flex">{links.next.title}<ArrowForwardIcon className="ml-1" /></p></a>   }
                            </div>
                        </div>
                    </section>
                    
            </React.Fragment>

    )
}

export default ProjectFull;