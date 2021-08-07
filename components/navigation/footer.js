import React from 'react'
import Link from 'next/link'




const Footer = ({language='English (US/UK)'}) => {


return (

    <>
  <footer className="footer-section bg-white w-100 " style={{}} >
    
    <div className="d-flex flex-wrap" >

{[language,'Deutsch','Français (France)',
'Português (Brasil)','Español','العربية',
'Bahasa Indonesia','Deutsch','日本語','Italiano',
'हिन्दी','Romana'].map((e,key)=><p key={key} > {e} </p>)
}
    </div>

    <hr />


          <div className="d-flex flex-wrap align-items-between">

{[
'Sign Up','Log In','Messenger','Facebook Lite',
'Watch','People','Pages','Page categories',
'Places','Games','Locations','Marketplace',
'Facebook Pay','Groups','Jobs','Oculus','Portal',
'Instagram','Local','Fundraisers','Services',
'Voting Information Centre','About','Create ad',
'Create Page','Developers','Careers','Privacy'
,'Cookies','AdChoices','Terms','Help','Settings'].map((e,key)=><p key={key} > {e} </p>)}

    </div>      
    

            <p className="font-14 text-dark  pt-0 text-left" 
            style={{textAlign:'center',width:'100%'}}>  Facebook &copy; {new Date().getFullYear()} </p>
    
    </footer>



  {/* <!-- End Footer --> */}


  {/* <!-- Vendor JS Files 
  
  <script src="js/jquery.min.js"></script>

    <script src="js/bootstrap.min.js"></script>

    <script src='js/jquery.stickOnScroll.js'></script>
    <script src="js/config.js"></script>

    <script src='js/select2.min.js'></script>

--> 
*/}

  


 

 


    

</>
  )
}

export default Footer