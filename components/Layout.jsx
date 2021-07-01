import React from "react";
import Head from "next/head";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import IntroBlock from "./IntroBlock.jsx";
import ResumeHeader from "./ResumeHeader.jsx";
import BackButton from "./BackButton/BackButton.jsx";
import BackButtonStyles from "./BackButton/BackButton.module.css";

function Layout(props) {

    return  <React.Fragment>
        
        <BgPicture />
        <div className="lg:wrapper h-full justify-items-stretch 
                        z-20 flex flex-col w-screen">
            
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            </Head>
            <Header />
            {props.intro ? <IntroBlock intro={props.intro}/> : null }
            {props.coverImage ? <IntroBlock image={props.coverImage}/> : null }
            {props.isResume ? <ResumeHeader name={props.name} subtitle={props.subtitle} /> : null }
            <section className={`flex flex-col flex-grow flex-shrink-0 z-10 ${props.center ? 'justify-center' : 'justify-start'} ${props.transparent ? "bg-transparent" : "bg-white"}`}>
                <div className={`${props.classes} container mx-auto ${props.padding ? 'px-48' : null} flex flex-col`}>
                    {props.children}
                </div>
            </section>
                
            <div className={`${BackButtonStyles.backButtons} flex justify-center`}></div>
            <BackButton link={props.backlink} top={props.toTop} />
            <Footer bg={props.footerBackground} logoColor={props.logoColor} />
            
        </div>
    </React.Fragment>
}


function BgPicture() {
    return <>
    <picture className="bg fixed top-0 z-0 lg:h-screen min-h-full min-w-full">
        <source type="image/webp" media="(min-width: 1921px)" srcSet="images/bg/bg-2xl.webp" />
        <source type="image/jpeg" media="(min-width: 1921px)" srcSet="images/bg/bg-2xl.jpg" />

        <source type="image/webp" media="(min-width: 1281px) and (max-width: 1920px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(min-width: 1281px) and (max-width: 1920px)"  srcSet="images/bg/bg-xl.jpg" />

        <source type="image/webp" media="(min-width: 461px) and (max-width: 1280px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(min-width: 461px) and (max-width: 1280px)"  srcSet="images/bg/bg-xl.jpg" />

        <source type="image/webp" media="(max-width: 460px)"  srcSet="images/bg/bg-xl.webp" />
        <source type="image/png"  media="(max-width: 460px)"  srcSet="images/bg/bg-xl.jpg" />

        <img src="images/bg.jpg" className="h-screen w-screen object-cover"></img>
    </picture>
    </>
}

export default Layout;