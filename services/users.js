import {db} from "./config"
import { collection, addDoc,doc, updateDoc,query, where, getDocs } from "firebase/firestore"; 

export const createUser=async ()=>{
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
export const UpdateUser=async ()=>{
    try {
        const washingtonRef = doc(db, "users", "ooNN293WuLduEl3KHYGD");
        const docRef = await updateDoc(washingtonRef, {'capital.code': false });
        console.log("Document written with ID: ", docRef);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
export const getUser=async ()=>{
    try {
        const q = query(collection(db, "users"), where("capital.code", "==", false));

        const querySnapshot = await getDocs(q);       
        querySnapshot.forEach((doc) => {        
            console.log(doc.id, " => ", doc.data());
        }); 
       
        // console.log("Document fetched: ", querySnapshot);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
export const createAdvert=async ()=>{
  try {
      let adv_data={ title: "Ada", description: "Lovelace", price: 1815, location: 'Uk', owner: 'mickel', view: 'fine', state: 'fine', owner_phone: '9090090909', owner_email: 'owner@email.com', user: 'ooNN293WuLduEl3KHYGD', advert_type:{ 'type':1, vehical:{ make:'HOnda', model:'dueo', color:'white', year:'2022', vehical_type:{ type:1, boat:{ category:"ruso", color:'red' } } }, accessories:{ v_make:'test', v_model:'test', v_color:'test', v_year:'test', }, pl_number:{ city:'city', number:'8000000' } } };

      const docRef = await addDoc(collection(db, "advert"), adv_data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}
export const UpdateAdvert=async ()=>{
  try {
      const washingtonRef = doc(db, "advert", "2Oi4KrjomU1xFF80MIbU");
      const docRef = await updateDoc(washingtonRef, {'advert_type.pl_number.city': 'Uk' });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}