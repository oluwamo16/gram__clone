
import withSession from '../../lib/session'
import {UserData} from "../../models/model"
import dbConnect from "../../utils/connectDb"

//require('dotenv').config()






export default withSession(async (req, res) => {
  dbConnect()
  


  try {
    // we check that the user exists and store some data in session
   



const findUser = await UserData.find({}).sort({date:-1}).lean()

res.status(200).json({users:findUser})

  

  } catch (error) {
 
    res.status(200).json({success:false})
  }
})
