import React from 'react'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile' style={{ alignItems :'center', margin: '10px'}}>
       
        <div style={{display:'flex'  ,border:'solid 2px gray' }}>
             <img src = "https://m.media-amazon.com/images/I/61pVI68ug-L._AC_UF1000,1000_QL80_.jpg" alt = "profile image" style={{width:'400px' , height:'400px'}}/>
            <div className ='personal-detail'>
               <div>Name : DeadPool</div>
               <div>Roll No. : 234CA047</div>
               <div>Branch : MCA</div>
            </div>
        </div>
        <div style={{ border : 'solid 2px gray' , margin :'10px'}}>
            <h style= {{fontSize : '100px' ,color :"green" }}> Booking History</h>
        </div>
    </div>
  )
}

export default Profile;
