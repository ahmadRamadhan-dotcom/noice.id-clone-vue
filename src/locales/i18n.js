import { createI18n } from "vue-i18n";
import id from "./id.json";
import en from "./en.json";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en,
    id: id,
  },
});

export default i18n;
