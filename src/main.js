import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faPlay,
  faArrowRight,
  faEnvelope,
  faXmark,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPlay,
  faArrowRight,
  faEnvelope,
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
  faTiktok,
  faXmark,
  faChevronRight
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
