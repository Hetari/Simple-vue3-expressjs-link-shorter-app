const validate = require("validate.js");
const shortid = require("shortid");

const validateUrl = (url = "") => {
  return validate(
    { website: url },
    {
      website: {
        url: {
          allowLocal: true,
        },
      },
    }
  );
};

const generateShortUrl = () => shortid.generate();

module.exports = {
  validateUrl,
  generateShortUrl,
};
