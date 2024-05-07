import React, {useState} from "react";
import Image from 'next/image'
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarItem, NavbarMenuItem, Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, Link, Button} from "@nextui-org/react";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "../icons";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";



const Config = ({blok}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const icons = {
    chevron: <ChevronDown fill="#fff" size={16} />,
    scale: <Scale className="text-warning" fill="currentColor" size={30} />,
    lock: <Lock className="text-success" fill="currentColor" size={30} />,
    activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
    flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    server: <Server className="text-success" fill="currentColor" size={30} />,
    user: <TagUser className="text-danger" fill="currentColor" size={30} />,
  };
  return (
      <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" shouldHideOnScroll isBlurred="false" className="fixed bg-black/50 backdrop-blur-sm text-title py-6">
        <NavbarContent>
          <NavbarBrand>
            <Image
              className="h-7 w-auto sm:h-8"
              src={blok.logo_light.filename}
              alt=""
              width={75}
              height={75}
            />
            <p className="font-bold text-inherit sr-only">CXO Strategies</p>
          </NavbarBrand>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden light text-white"
          />
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-20" justify="end">
          {blok.header_menu.map((nestedBlok) => (
            <>
              {nestedBlok.component === 'menu_link' &&
                <NavbarItem key={nestedBlok._uid}>
                  <StoryblokComponent className='' blok={nestedBlok} />
                </NavbarItem>
              }
              {nestedBlok.component === 'submenu_link' &&
                <Dropdown color="foreground">
                  <NavbarItem key={nestedBlok._uid}>
                    {/* <StoryblokComponent className='' blok={nestedBlok} /> */}
                    <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                      endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                      <span className="text-base font-sans font-bold uppercase tracking-wider text-white hover:text-gray-300">
                          {nestedBlok.name}
                      </span>
                    </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu 
                    aria-label={nestedBlok.name}
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                    items={nestedBlok.submenu}
                  >
                    {(item, i) => (
                      <DropdownItem
                      key={item.name}
                      color={item.key === "delete" ? "danger" : "default"}
                      className="font-['IBM_Plex_Sans'] uppercase"
                    >
                      {item.name}
                    </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              }
            </>
          ))}
        </NavbarContent>
        <NavbarMenu className="dark flex flex-col justify-center items-center gap-8">
        {blok.header_menu.map((nestedBlok) => (
            <>
              {nestedBlok.component === 'menu_link' &&
                <NavbarItem key={nestedBlok._uid}>
                  {/* <StoryblokComponent className='' blok={nestedBlok} /> */}
                  <Link href={nestedBlok.link.cached_url} {...storyblokEditable(blok)}>
                    <span className="font-['IBM_Plex_Sans'] text-base font-bold uppercase text-white hover:text-gray-900">
                        {nestedBlok.name}
                    </span>
                  </Link>
                </NavbarItem>
              }
              {nestedBlok.component === 'submenu_link' &&
                <Dropdown color="foreground">
                  <NavbarItem key={nestedBlok._uid}>
                    {/* <StoryblokComponent className='' blok={nestedBlok} /> */}
                    <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                      endContent={icons.chevron}
                      radius="sm"
                      variant="light"
                    >
                      <span className="text-base font-['IBM_Plex_Sans'] font-bold uppercase tracking-wider text-white hover:text-gray-300">
                          {nestedBlok.name}
                      </span>
                    </Button>
                    </DropdownTrigger>
                  </NavbarItem>
                  <DropdownMenu 
                    aria-label={nestedBlok.name}
                    className="w-[340px]"
                    itemClasses={{
                      base: "gap-4",
                    }}
                    items={nestedBlok.submenu}
                  >
                    {(item, i) => (
                      <DropdownItem
                      key={item.name}
                      color={item.key === "delete" ? "danger" : "default"}
                      className="font-['IBM_Plex_Sans'] uppercase"
                    >
                      {item.name}
                    </DropdownItem>
                    )}
                  </DropdownMenu>
                </Dropdown>
              }
            </>
          ))}
        </NavbarMenu>
      </Navbar>
  );
};
export default Config;