import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Cal from "../components/Cal";
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Cal: Cal,
};

storyblokInit({
  accessToken: "HoiAq2aFOJ73kmyXQn6sKwtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
