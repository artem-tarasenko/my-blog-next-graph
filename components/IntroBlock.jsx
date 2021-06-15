import React from "react";
import {TemplateWrapper} from './Layout.jsx';


export default function IntroBlock( props ) {

    return <>
        <div className="h-48 bg-gray-200 w-full">
            <TemplateWrapper classes="px-48 py-8 text-center">
                intro
            </TemplateWrapper>
        </div>
    </>
}