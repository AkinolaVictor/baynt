import { auth, database } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";


export default async function createAccount(req, res) {
    const {email, password, name} = req.body
    
    // console.log({email, password});
    // res.send({successful: false})
    // return 
    
    await createUserWithEmailAndPassword(auth, email, password).then(async(resp)=>{
        console.log("account created");
        const {uid} = resp?.user||{}
        // router.push("/blog")
        // console.log({uid});
        const userID = uid

        const userData = {
            name,
            email,
            userID,
            date: new Date().toISOString(),
            posts: []
        }
        
        const userRef = doc(database, "userData", userID)
        await setDoc(userRef, {...userData}).then(()=>{
            console.log("created Data");
        }).catch((e)=>{
            console.log("failed to create data");
            console.log(e);
        })

        res.send({successful: true, userID, userData})
    }).catch((err)=>{
        // console.log("signup error");
        // console.log(err.code);
        let message = ""
        if(err.code === 'auth/invalid-email') message = 'Email was badly formatted'
        else if(err.code === 'auth/invalid-password') message = 'Incorrect username or password'
        else if(err.code === 'auth/email-already-in-use') message = 'This email address has already been used'
        else if(err.code === 'auth/wrong-password') message = 'Incorrect username or password'
        else if(err.code === 'auth/network-request-failed') message = 'Kindly check your network, there seem to be a network problem'
        else if(err.code === 'auth/user-not-found') message = 'Sorry, you have no account, sign up to create a new account'
        else return message = err.code

        res.send({successful: false, message})
    })
}