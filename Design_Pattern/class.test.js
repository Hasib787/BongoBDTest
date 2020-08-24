const englishCode = "en-US";
const spanishCode = "es-ES";
function getAboutUsLink(language){
    switch (language.toLowerCase()){
      case englishCode.toLowerCase():
        return '/about-us';
      case spanishCode.toLowerCase():
        return '/acerca-de';
    }
    return '';
}
module.exports = getAboutUsLink;

const getAboutUsLink = require("./class");
test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});