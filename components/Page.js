import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, locale }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent className='' blok={nestedBlok} key={nestedBlok._uid} locale={locale} />
    ))}
  </main>
);

export default Page;
