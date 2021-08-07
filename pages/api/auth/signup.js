
import withSession from '../../../lib/session'
import {UserData} from "../../../models/model"
import dbConnect from "../../../utils/connectDb"

//require('dotenv').config()






export default withSession(async (req, res) => {
  dbConnect()
  


  try {
    // we check that the user exists and store some data in session
   




const body = req.body
console.log(body)


const createUser = await UserData.create(body)


res.status(200).json({success:true})

  

  } catch (error) {
 
 console.log(error)
    res.status(200).json({success:false})
  }
})
