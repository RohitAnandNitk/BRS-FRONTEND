import  { React,useState } from 'react';
import BicycleCard from '../components/BicycleCard';
import by1 from "../Assets/b1.jpeg";
import by2 from "../Assets/b2.webp";
import by3 from "../Assets/b3.jpg";
import by4 from "../Assets/b4.jpeg";
import './BookBicycle.css'

const data = [ {location : "Trishul" ,rent : "20", avai : "A" ,pic : by1},
               {location : "Shiwalik", rent : "40",avai : "N/A",  pic : by2},
               { location : "Netravati", rent : "45", avai : "A" ,pic : by3},
               {location : "Godavari", rent : "50", avai : "N/A", pic : by1},
               {location : "MT-1", rent : "60" ,avai : "A" ,pic : by4},
               {location : "Syadri", rent : "30", avai : "N/A" , pic : by1},
               {location : "MT-2", rent : "70" ,avai : "N/A" ,pic : by3},
               {location : "Stpura", rent : "25", avai : "A" ,pic : by4},
               {location : "MT-3", rent : "40", avai : "N/A" ,pic : by2},      
               {location : "Aravali", rent : "20", avai : "A" ,pic : by3}      
];



const BookBicyle = () => {
   // Fitering the bicycle according to the rent .............
   const [bicycle, filterPrice] = useState(data);

   function handlebtn(){
       const filteredItem = bicycle.filter((item) =>{
          return item.rent <= 30; 
       })

       filterPrice(filteredItem);
   }

   return (
      <div className='lists'>
         <p className='btn' onClick = {handlebtn}>Filter By Rent</p>

         <div className='bipage' style={{display: 'flex', flexWrap :'wrap'}}>
         
         {
            /* more optimized using map */ 
            bicycle.map((ele) =>{
               return <BicycleCard location = {ele.location} rent = {ele.rent} avai = {ele.avai} pic = {ele.pic}></BicycleCard>
            })
            }
       </div>
    </div>
  )
}

export default BookBicyle;
 



/*
// refer React folder
     // hooks : normal javascript function 
     -> usestate
     -> useeffect
     -> and more
    
   it use at top level
   we have to import it as well

*/

 /*
    map .......................
     { 
          data.map((ele) =>{
            return <BicycleCard location = {ele.location} rent = {ele.rent} avai = {ele.avai} pic = {ele.pic}></BicycleCard>
         })
      }
 */

/* props optimization */

   
   /*
      <div className='HomePage' style={{display: 'flex', flexWrap :'wrap'}}>
         
         { <BicycleCard location = {data[0].location} rent = {data[0].rent} avai = {data[0].avai} pic = {data[0].pic}/>
         <BicycleCard location = {data[1].location} rent = {data[1].rent} avai = {data[1].avai} pic = {data[1].pic}/>
         <BicycleCard location = {data[2].location} rent = {data[2].rent} avai = {data[2].avai} pic = {data[2].pic}/>
         <BicycleCard location = {data[3].location} rent = {data[3].rent} avai = {data[3].avai} pic = {data[3].pic}/>
         <BicycleCard location = {data[4].location} rent = {data[4].rent} avai = {data[4].avai} pic = {data[4].pic}/>
         <BicycleCard location = {data[5].location} rent = {data[5].rent} avai = {data[5].avai} pic = {data[5].pic}/>
         <BicycleCard location = {data[6].location} rent = {data[6].rent} avai = {data[6].avai} pic = {data[6].pic}/>
         <BicycleCard location = {data[7].location} rent = {data[7].rent} avai = {data[7].avai} pic = {data[7].pic}/>
         <BicycleCard location = {data[8].location} rent = {data[8].rent} avai = {data[8].avai} pic = {data[8].pic}/>
         <BicycleCard location = {data[9].location} rent = {data[9].rent} avai = {data[9].avai} pic = {data[9].pic}/> }
        
    </div>
   */







  /* 
  // array of image
const img = [ by1, by2, by3, by4];
  
  <BicycleCard location = "Trishul" rent = "20" avai = "A" pic = {img[0]}/>
         <BicycleCard location = "Shiwalik" rent = "30"avai = "N/A"  pic = {img[1]}/>
         <BicycleCard location = "Nilgiri" rent = "10" avai = "N/A" pic = {img[2]}/>
         <BicycleCard location = "Netravati" rent = "20" avai = "A" pic = {img[3]}/>
         <BicycleCard location = "Godavari" rent = "50" avai = "N/A" pic = {img[1]}/>
         <BicycleCard location = "MT-1" rent = "20" avai = "A" pic = {img[0]}/>
         <BicycleCard location = "Syadri" rent = "30"avai = "N/A"  pic = {img[1]}/>
         <BicycleCard location = "MT-2" rent = "10" avai = "N/A" pic = {img[2]}/>
         <BicycleCard location = "Stpura" rent = "20" avai = "A" pic = {img[3]}/>
         <BicycleCard location = "MT-3" rent = "50" avai = "N/A" pic = {img[1]}/> */





/* <div className='card'  style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by1} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info' > 
              <p> Location : Trishul</p>
              <p>Rent : 20 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}} >
           <img src = {by2} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info'> 
              <p> Location : Shiwalik</p>
              <p>Rent : 30 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by3} alt ="bicyle img" style={{width : "200px"}}/>
           <div className='info'> 
              <p> Location : Nilgiri</p>
              <p>Rent : 25 </p>
              <p>Book Now</p>
           </div>
        </div>
         <div className='card'  style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by1} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info' > 
              <p> Location : MT-1</p>
              <p>Rent : 20 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}} >
           <img src = {by2} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info'> 
              <p> Location : MT-2</p>
              <p>Rent : 30 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by3} alt ="bicyle img" style={{width : "200px"}}/>
           <div className='info'> 
              <p> Location : MT-3</p>
              <p>Rent : 25 </p>
              <p>Book Now</p>
           </div>
        </div>
         <div className='card'  style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by1} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info' > 
              <p> Location : Godabri</p>
              <p>Rent : 20 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}} >
           <img src = {by2} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info'> 
              <p> Location : Netravati</p>
              <p>Rent : 30 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by3} alt ="bicyle img" style={{width : "200px"}}/>
           <div className='info'> 
              <p> Location :Pushpagiri</p>
              <p>Rent : 25 </p>
              <p>Book Now</p>
           </div>
        </div>
         <div className='card'  style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by1} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info' > 
              <p> Location : Braahmagiri</p>
              <p>Rent : 20 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}} >
           <img src = {by2} alt ="bicyle img" style={{width : "200px"}}/>
           <div  className='info'> 
              <p> Location : Satpura</p>
              <p>Rent : 30 </p>
              <p>Book Now</p>
           </div>
        </div>

         <div className='card' style={{border :'2px solid black' , width : '250px' , padding :'5px 5px' , backgroundColor: 'white' , margin :'2px'}}>
           <img src = {by3} alt ="bicyle img" style={{width : "200px"}}/>
           <div className='info'> 
              <p> Location :Saiyadri</p>
              <p>Rent : 25 </p>
              <p>Book Now</p>
           </div>
        </div> */