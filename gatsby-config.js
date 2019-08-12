module.exports = {
  pathPrefix: "/GatsbywithFirebase",
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
