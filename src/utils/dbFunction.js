import { auth } from "@/firebase"
import { signOut } from "firebase/auth"
import { generalFunctions } from "./storeControllers/generalFunctions"


export function logOut({router, setGeneralAlpha}){
    signOut(auth).then(()=>{
        localStorage.removeItem('userID')
        localStorage.removeItem('userData')

        setGeneralAlpha("userID", null)
        setGeneralAlpha("userData", null)

        router.push("/")
    }).catch((err)=>{
        console.log("Error from Sign-out");
        console.log(err);
    })
}