import * as React from "react";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

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

const Page = ({ blok }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
