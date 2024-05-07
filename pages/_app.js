import * as React from "react";

import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";

// google fonts
import { Barlow, IBM_Plex_Sans } from 'next/font/google'

const barlow = Barlow({
  weight: ['100', '400', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-barlow',
})

const ibm = IBM_Plex_Sans({
  weight: ['100', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ibm-sans',
})


import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";

// Navigation Components
import Config from "../components/Config"
import HeaderMenu from "../components/HeaderMenu"
import MenuLink from "../components/MenuLink"
import SubmenuLink from "../components/SubmenuLink";
import Layout from "../components/Layout"
import Hero from "../components/Hero";
import Section from "../components/Section";

import {NextUIProvider} from "@nextui-org/react";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  config: Config,
  layout: Layout,
  hero: Hero,
  section: Section,
  "header_menu": HeaderMenu,
  "menu_link": MenuLink,
  "submenu_link": SubmenuLink
};

storyblokInit({
  accessToken: "NeRw6YCe4kLC1hFNQgGbgAtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return(
    <NextUIProvider className={`${barlow.variable} ${ibm.variable} font-sans`}>
      <Layout story={pageProps.config}>
        <Component {...pageProps} />;
      </Layout>
    </NextUIProvider>
  ) 
}

export default MyApp;
