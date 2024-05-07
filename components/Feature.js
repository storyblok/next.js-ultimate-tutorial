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

const Feature = ({ blok }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {createMarkup(blok.title)}
  </div>
);

export default Feature;
