import { storyblokEditable } from "@storyblok/react";
import { NODE_HEADING,NODE_PARAGRAPH, MARK_BOLD, MARK_ITALIC, render } from 'storyblok-rich-text-react-renderer'
import Balancer from 'react-wrap-balancer'
import ThreeCard from "./ThreeCard";
import ThreeCardCenter from "./ThreeCardCenter";
import { motion } from "framer-motion";

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
                return <h3 className="text-3xl md:text-5xl"><Balancer>{children}</Balancer></h3>
            }
            if (level === 5) {
                return <h5 className="text-xl md:text-xl font-bold"><Balancer>{children}</Balancer></h5>
            }
          },
        }
      })}
    </>
  )
}

const Hero = ({ blok }) => (
  <div className="relative flex h-screen md:h-[50vh] lg:h-[80vh] items-start md:items-end bg-black" {...storyblokEditable(blok)}>
    <div className="flex flex-col w-full max-w-sc md:xl:max-w-screen-2xl mx-auto">
      <div className="order-2 sm:order-first max-w-xl font-sans font-medium text-left text-3xl md:text-4xl leading-none tracking-tighter px-6 py-0 md:py-24 dark:text-white text-white z-30">
        {createMarkup(blok.sub_title)}
      </div>
      {/* <div className="font-title max-w-3xl font-bold text-right text-[7em] leading-[0.75em] tracking-tight dark:text-white text-black uppercase">
          {createMarkup(blok.title)}
      </div> */}
      <div className="block order-first md:absolute inset-0 top-0 right-0 md:left-0 z-10">
        <div className="hidden md:h-1/2 lg:h-full w-full">
          <ThreeCard />
        </div>
        <div className="block h-[70vh] sm:hidden w-full">
          <ThreeCardCenter />
        </div>
      </div>
    </div>
  </div>
);

export default Hero;