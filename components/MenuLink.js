import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
const MenuLink = ({blok}) => (
    <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
        <span className="font-sans text-base font-bold uppercase text-white hover:text-gray-900">
            {blok.name}
        </span>
    </Link>
)
export default MenuLink