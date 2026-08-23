import { introductionSection } from "./sections/introduction";
import { whatAreCookiesSection } from "./sections/what-are-cookies";
import { howWeUseCookiesSection } from "./sections/how-we-use-cookies";
import { essentialCookiesSection } from "./sections/essential-cookies";
import { authenticationCookiesSection } from "./sections/authentication-cookies";
import { cookieInformationSection } from "./sections/cookie-information";
import { cookieDurationSection } from "./sections/cookie-duration";
import { thirdPartyCookiesSection } from "./sections/third-party-cookies";
import { manageCookiesSection } from "./sections/manage-cookies";
import { disabledCookiesSection } from "./sections/disabled-cookies";
import { changesSection } from "./sections/changes";

import { CookieSection } from "./types";

export const cookiesData: {
  title: string;
  description: string;
  lastUpdated: string;
  sections: CookieSection[];
} = {
  title: "Cookie Policy",

  description:
    "Learn how Real Battle uses essential cookies to authenticate users, maintain secure sessions, and provide a reliable gaming and tournament experience.",

  lastUpdated: "August 21, 2026",

  sections: [
    introductionSection,
    whatAreCookiesSection,
    howWeUseCookiesSection,
    essentialCookiesSection,
    authenticationCookiesSection,
    cookieInformationSection,
    cookieDurationSection,
    thirdPartyCookiesSection,
    manageCookiesSection,
    disabledCookiesSection,
    changesSection,
  ],
};
