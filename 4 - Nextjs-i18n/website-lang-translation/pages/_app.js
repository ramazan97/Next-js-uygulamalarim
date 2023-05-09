import "@/styles/globals.css";

//i18n
import { useRouter } from "next/router";
import { IntlProvider } from "react-intl";

import en from "../../i18n/en.json";
import tr from "../../i18n/tr.json";

const messages = {
  en,
  tr,
};

function getDirection(locale) {
  return "ltr";
}

export default function App({ Component, pageProps }) {
  const { locale } = useRouter();
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Component {...pageProps} dir={getDirection(locale)} />
    </IntlProvider>
  );
}
