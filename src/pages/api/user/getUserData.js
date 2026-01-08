// const { database } = require("@/firebase")
// const { doc, getDoc } = require("firebase/firestore")
import { database } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function getUserData(req, res) {
    const {userID} = req.body
    
    const userRef = doc(database, 'userData', userID)
    await getDoc(userRef).then((docsnap)=>{
        if(docsnap.exists()){
            const user = {...docsnap.data()}
            res.send({successful: true, user})
        } else {
            res.send({successful: false, message: 'user data not found'})
        }
    }).catch((e)=>{
        console.log(e);
        console.log("error at getdata");
        res.send({successful: false, message: 'Server error: user not found'})
    })
}