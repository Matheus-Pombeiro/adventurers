import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import EN from "./translations/en.json";
import PT from "./translations/pt.json";

i18n.use(initReactI18next).init({
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: EN,
        pt: PT
    }
});

export default i18n;