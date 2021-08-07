import React, {useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter} from 'next/router'



const header = () => {


  const router = useRouter()




  return (
    <div   >
 

  
    </div>


    );
}


export default header












export const ViewMessage = ({messages,notification=false,user={},loadNext,loadPrev,fetchMessage})=>{


  const router = useRouter()

const [modalUser,setModalUser] = useState({})

const setMessageModal = (e,data)=>{

e.preventDefault()
setModalUser(data);

}



  return (   notification ?  <div className="user-notification pt-1">

        <div className="dropdown" >
          <a className="dropdown-toggle no-arrow" style={{marginRight:'5px'}}  role="button" data-toggle="dropdown" onClick={fetchMessage}>
            <i className="icon-copy dw dw-notification1  text-black " style={{fontSize:'25px'}}></i>
            <span className="badge notification-active"></span>
          </a>

        

          <div className="dropdown-menu dropdown-menu-right notification-drop" >
            <div className="notification-list px-2 " style={{overflowY:'scroll'}}>
              <ul>
                              <li className="w-100 p-2 py-1 mb-2  font-weight-bold" 
                             onClick={e=>{

                                router.push("dashboard/profile")
                              }}>


 Latest Messages - <i className="text-primary"> View all </i>


 <hr /> 
                </li>
              {

               user.isLoggedIn && messages ? Object.values(messages.docs).map((value,key)=>(
    <Link href={"/seller/"+value.sender.email}> 
                    <a className="" href={"/seller/"+value.sender.email}>

<li className="row mx-1 mb-1">

     
                  <span className="col-4">
                    {value.sender.image ?
                     <img src={CLOUDINARY_URL+"w_38,h_38,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " />

                  }
                  </span>

                  <span className="col-8">
                    <h6 className="mb-1 fullname " style={{color:'#1890ff'}}>{value.sender.fullname}</h6>
                    <p className="text-muted">{value.text} ...</p>

                    </span>

                </li>
                   </a>
                </Link>

                ))
                : <p className="text-muted"> No messages </p>
              }
               
              
              </ul>
            </div>
          </div>
        </div>
      </div> :
            <div className="notification-list" >
              <ul>
                              <li className="w-100 p-2 py-1  mb-2 font-weight-bold" >
Latest Messages
              <hr />  </li>
             
              {

               messages ? Object.values(messages.data.message.docs).map((value,key)=>(
     <Link href={"/seller/"+value.sender.email}> 
                    <a className="" href={"/seller/"+value.sender.email}>

                    <li className="row mx-1 my-2">

               
                  <p className=" col-2 my-1">
                    {!value.sender.image ?
                   
                    <img src={CLOUDINARY_URL+"w_80,h_80,g_face,r_max,c_thumb/"+value.sender.image.image_id}  className="avatar-img " />

              
                   : <img src="/vendors/images/no-user-image.jpg"alt="...Image" className="avatar-img rounded " style={{width:'80px',height:'70px'}} />

                  }
                  </p>

                  <p className=" col-9">
                     <h6 className="mb-1 fullname " style={{color:'#1890ff'}}>{value.sender.fullname}</h6>
                    <p className="text-muted">{value.text} ...</p>

                    </p>
                     <div className="col-1">
                          <span className="file-action btn-link text-secondary  " onClick={e=>setMessageModal(e,value.sender)} >
                       <i style={{fontSize:'19px'}} 
                          className="icon-copy dw dw-message  font-weight-bold"  data-toggle="modal" data-target="#modal-message">
                          </i>
                          </span>
                        </div>

                
                </li>
                </a>
                </Link>

                ))
                : <p className="text-muted"> No new messages </p>
              }
               
               <More 
               hasNext={messages && messages.data.message.hasNextPage} 
                hasPrev={messages && messages.data.message.hasPrevPage} next={loadNext} prev={loadPrev} />
              
              </ul>
           

        



    <div className="modal fade" id="modal-message" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header pd-5">
<h6 className="p-4 text-uppercase">
                          SEND MESSAGE
                        </h6>
                    </div>

                      <div className="modal-body pd-5">
                       <Message user={modalUser} cardBox={false} />
                      </div>
                      <div className="modal-footer">
                        
                        <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="icon-copy dw dw-exit mx-2"></i>Close</button>
                      </div>
                    </div>
                  </div>

</div>


         
            </div>

      )
}