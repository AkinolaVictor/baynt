import { database } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export default async function getBlogPosts(req, res) {
    
    const usersRef = collection(database, 'blogPosts')
    await getDocs(usersRef).then((docsnap)=>{
        const arr = []
        for(let i=0; i<docsnap.docs.length; i++){
            const each = {...docsnap.docs[i].data()}
            arr.push(each)
        }
        
        res.send({successful: true, data: arr})
    }).catch((e)=>{
        console.log("Error while fetching blog posts");
        console.log(e);
        res.send({successful: false, message: "Error from the server"})
    })
}