
import "../public/vendors/styles/icon-font.min.css"
import "../public/vendors/styles/core.css"
import "../public/vendors/styles/style.css" 


if (typeof window !== "undefined") {
const  $ = require("jquery");$
  window.$  = $
  window.jQuery  = $
  require("popper.js");
  require("bootstrap");

  //require("../public/vendors/scripts/4bb64ca455cb.js")
  //require("../public/vendors/scripts/7557a79bb264.js")
  //require("../public/vendors/scripts/cfbb5d27d2a0.js")
  //require("../public/vendors/scripts/e7e0a839187b.js")
 
}



export default function MyApp({ Component, pageProps }) {


  return (

      <Component {...pageProps} />


  )
}









