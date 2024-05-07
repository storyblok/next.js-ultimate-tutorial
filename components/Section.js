import React from "react";
import { storyblokEditable } from "@storyblok/react";
import { NODE_HEADING,NODE_PARAGRAPH, MARK_BOLD, MARK_ITALIC, render } from 'storyblok-rich-text-react-renderer'
import Balancer from 'react-wrap-balancer'

function createMarkup(storyblokHTML) {
  return(
    <>
      {render(storyblokHTML, {
        markResolvers:{
          [MARK_ITALIC]: (children) => <i className="font-light">{children}</i>,
        },
        nodeResolvers:{
          [NODE_HEADING]: (children, {level}) => {
            if (level === 3) {
                return <h3 className="text-3xl md:text-[3.25vw] font-title font-normal leading-none tracking-tight"><Balancer>{children}</Balancer></h3>
            }
            if (level === 5) {
                return <h5 className="text-lg md:text-2xl"><Balancer>{children}</Balancer></h5>
            }
          },
          [NODE_PARAGRAPH]: (children) => <p className="text-lg text-black/60">{children}</p>
        }
      })}
    </>
  )
}

const Section = ({ blok }) => (
  <section className="flex flex-col max-w-screen-2xl mx-auto py-24 px-6" {...storyblokEditable(blok)}>
    <div className="flex flex-col md:flex-row justify-between">
        <div className="font-title max-w-lg w-full md:w-2/5 font-bold md:text-base tracking-widest dark:text-white text-black/30 uppercase">
            {blok.name}
        </div>
        <div className="w-full md:w-3/5 dark:text-white text-black flex flex-col gap-8">
            {createMarkup(blok.title)}
            {createMarkup(blok.subTitle)}
        </div>
    </div>
    <div className="mt-20">
        {blok.Content.map((inner)=>(
            <React.Fragment key={inner._uid}>
            {inner.layout === "column" &&
                <div className="flex flex-col sm:flex-row gap-8 justify-between">
                    {inner.columns.map((col)=>(
                        <div className="flex flex-col gap-7 w-full md:w-1/5" key={col._uid}>
                            {createMarkup(col.title)}
                            {createMarkup(col.body)}
                        </div>
                    ))}
                </div>
            }
            </React.Fragment>
        ))}
    </div>
  </section>
);

export default Section;