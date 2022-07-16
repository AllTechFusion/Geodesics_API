const express = require('express');
const cors = require("cors");
var dbConnect = require('./config.js');
const checkNull= require('./utility/commonFunctions')
const checkDateWithToday=require('./utility/commonFunctions')
const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;

const User = dbConnect.collection("geodesics");
// const geodesicsArray = dbConnect.collection("geodesicsArray");
const geodesicsBasicDetails = dbConnect.collection("geodesicsBasicDetails");



app.get('/geBasicDetails', async (req, res) => {

    const snapshot = await geodesicsBasicDetails.get();
   // console.log(list[0].appointmentTime)
    const list = snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() }));
    // console.log(list[0].appointmentTime)
 res.send(list[0]);

});

app.get('/getData', async (req, res) => {

        const snapshot = await User.get();
       // console.log(list[0].appointmentTime)
        const list = snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() }));
        // console.log(list[0].appointmentTime)
     res.send(list);

 });

 app.post('/postData', async (req, res) => {
const array=[1,5,60,0.6,0.78,777]
let webData=req.body
//console.log(webData)
// const usersRef = ref.child('users');
await User.doc(webData.name).set({data:webData.data});

//     const snapshot = await geodesicsArray.get();
//    // console.log(list[0].appointmentTime)
//     const list = snapshot.docs.map((doc) => ({ id: doc.id, data:doc.data() }));
//     // console.log(list[0].appointmentTime)
 res.send("success");

});


 
//  app.post('/getAppointmentById', async (req, res) => {
//     if(await validateDoctor(req.headers['doctorid'])){
//         let appointmentDetails;
//         // const snapshot = await Appointments.orderBy('appointmentTime','desc').get();
//         const snapshot=  await Appointments.doc(req.body.appointmentId).get().then(snapshot => 
//             {
//                 appointmentDetails=snapshot.data();
//                 console.log("linkAppointment",appointmentDetails)
//             })
//         // const appointmentsRef= await Appointments.where('appointmentTime', '==', `${req.body.appointmentId}`).get();
//    //     console.log(appointmentsRef)
//         // const list = appointmentsRef.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//         // console.log(list[0].appointmentTime)
//      res.send(appointmentDetails);
//     }
//     else   res.send({ msg: "Failed ! Doctor UnAuthenticated" });
//  });


//  app.post("/createAppointment", async (req, res) => {
//     var appointmentId;
//     var autoIncrementalNum=001;
//   const snapshot = await Appointments.orderBy('createdDate','desc').limit(1).get();
//   const list =  snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//   if(list.length==0){
//       appointmentId="A-"+autoIncrementalNum;
//     //   console.log(autoIncrementalNum);

//   }
//   else{
//       autoIncrementalNum= parseInt(list[0].appointmentId.split("-")[1])+1;
//     //   console.log(autoIncrementalNum);
//       appointmentId="A-"+autoIncrementalNum;
//   }
// //   console.log("appointmentId",appointmentId);
//   const data = req.body;
//  // console.log(patientList)
//      await Appointments.add({ age:data.age,
//       appointmentStatus:data.appointmentStatus,
//       appointmentTime:data.appointmentTime,
//       contact:data.contact,
//       doctorId:data.doctorId,
//       firstName:data.firstName,
//       gender:data.gender,
//       lastName:data.lastName,
//       createdDate:Date.now(),
//       createdBy:data.createdBy,
//       updatedDate:Date.now(),
//       updatedBy:data.updatedBy,
//       appointmentId:appointmentId
//   });
//       res.send({ msg: "Appointment Booked " });
  

// });







// app.post("/updateAppointmentStatus", async (req, res) => {
//   if(await validateDoctor(req.headers['doctorid'])){
//   const data = req.body;
//  // console.log(patientList)
//      await Appointments.doc(data.id).update({
//         age:data.age,
//         appointmentStatus:data.appointmentStatus,
//         appointmentTime:data.appointmentTime,
//         contact:data.contact,
//         doctorId:data.doctorId,
//         firstName:data.firstName,
//         gender:data.gender,
//         lastName:data.lastName,
//         createdDate:Date.now(),
//         createdBy:data.createdBy,
//         updatedDate:Date.now(),
//         updatedBy:data.updatedBy,
//         appointmentId:data.appointmentId
//      })
//       res.send({ msg: "Appointment  Updated " });
  
// }
// else  res.send({ msg: "Failed ! Doctor UnAuthenticated" });
// });



app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));