import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
const HeaderMenu = ({blok}) => (
    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-20" {...storyblokEditable({blok})}>
        {blok.links.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
    </div>
)
export default HeaderMenu