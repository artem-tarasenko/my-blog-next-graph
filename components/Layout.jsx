import React, {useEffect} from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import IntroBlock from "./IntroBlock.jsx";
import ResumeHeader from "./ResumeHeader.jsx";
import BackButton from "./BackButton/BackButton.jsx";
import btnStyles from "./BackButton/BackButton.jsx"


function Layout(props) {

    return  <React.Fragment>
        
        <BgPicture />
        <div className="lg:wrapper lg:h-full justify-items-stretch 
                        z-20 flex flex-col w-screen">
            
            <Header />
            {props.intro ? <IntroBlock intro={props.intro}/> : null }
            {props.coverImage ? <IntroBlock image={props.coverImage}/> : null }
            {props.isResume ? <ResumeHeader name={props.name} subtitle={props.subtitle} /> : null }
            <section className={`flex flex-col flex-grow flex-shrink-0 z-10 ${props.center ? 'justify-center' : 'justify-start'} ${props.transparent ? "bg-transparent" : "bg-white"}`}>
                <div className={`${props.classes} container mx-auto ${props.padding ? 'px-48' : null} flex flex-col`}>
                    {props.children}
                </div>
            </section>
                
            <div className={`${btnStyles.backButtons} flex justify-center`}></div>
            <BackButton link={props.backlink} top={props.toTop} />
            <Footer bg={props.footerBackground} logoColor={props.logoColor} />
            
        </div>
    </React.Fragment>
}


function BgPicture() {
    return <>
    <picture className="bg fixed lg:top-0 z-0 lg:h-screen">
        <source type="image/webp" media="(min-width: 1921px)" srcSet="images/bg/bg-2xl.webp" />
        <source type="image/jpeg" media="(min-width: 1921px)" srcSet="images/bg/bg-2xl.jpg" />

        <source type="image/webp" media="(min-width: 1281px) and (max-width: 1920px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(min-width: 1281px) and (max-width: 1920px)"  srcSet="images/bg/bg-xl.jpg" />

        <source type="image/webp" media="(min-width: 461px) and (max-width: 1280px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(min-width: 461px) and (max-width: 1280px)"  srcSet="images/bg/bg-xl.jpg" />

        <source type="image/webp" media="(max-width: 460px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(max-width: 460px)"  srcSet="images/bg/bg-xl.jpg" />

        <img src="images/bg.jpg" className="fixed lg:bottom-0 lg:h-full w-auto"></img>
    </picture>
    </>
}

export default Layout;