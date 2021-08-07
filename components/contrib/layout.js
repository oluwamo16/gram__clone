import React from 'react'

import Header from '../navigation/header'
import Footer from '../navigation/footer'
import PropTypes from 'prop-types'
import Head from 'next/head'


const Layout = ({ title="",children,language }) => (
  <>
  <Head>
  <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <link rel="icon" href="favicon.ico" />

       {/* <!-- Simple bar CSS --> */}
   
    {/* <!-- Fonts CSS --> */}
    <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
    <link rel="preload" href="/fonts/Fontspring_blue_vinyl_bold_ps_ot.otf" as="font" 
    type="font/otf" crossOrigin="anonymous"  />

        <link rel="preload" href="/fonts/Fontspring_blue_vinyl_regular_ps_ot.otf" as="font" 
    type="font/otf" crossOrigin="anonymous"  />
    {/* <!-- Icons CSS --> */}
    
     <link rel="stylesheet" type="text/css" href="vendors/styles/3c4d09ce4b4a.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/3ce984c47339.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/4f1dc2dd323d.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/31d2ed069293.css"/>
     <link rel="stylesheet" type="text/css" href="vendors/styles/55ba8f05e763.css"/>
    



   
 

    {/* <!-- App CSS --> */}

	// <link rel="stylesheet" type="text/css" href="vendors/styles/icon-font.min.css"/>




   

    </Head>

   
    <main className="layout"  >


      <div className="" >{children}</div>

    </main>



  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
  title:PropTypes.string
}