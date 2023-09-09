module.exports = {
  locales: ["default", "en", "de"],
  defaultLocale: "default",
  pages: {
    "*": ["common"],
    "/page-1": ["pages-router"],
    "/page-2": ["pages-router"],
    "/[lang]": ["app-router"],
    "/[lang]/app-page-1": ["app-router"],
    "/[lang]/app-page-2": ["app-router"],
  },
};
