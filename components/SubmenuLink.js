import { storyblokEditable } from "@storyblok/react";
import { DropdownTrigger } from "@nextui-org/react";
import Link from "next/link";
const SubmenuLink = ({blok}) => (
    <DropdownTrigger>
        <Link href={blok.link.cached_url} {...storyblokEditable(blok)}>
            <span className="text-base font-sans font-bold uppercase tracking-wider text-white hover:text-gray-900">
                {blok.name}
            </span>
        </Link>
    </DropdownTrigger>
)
export default SubmenuLink