import { database } from "@/firebase";
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default async function deleteBlogPost(req, res) {
    const {userID, postID} = req.body
    
    const blogRef = doc(database, 'blogPosts', postID)
    const userRef = doc(database, "userData", userID)

    await deleteDoc(blogRef).then(async (resp)=>{
        await getDoc(userRef).then(async (docSnap)=> {
            const {posts} = docSnap.data()
            
            for(let i=0; i<posts.length; i++){
                const curr = posts[i]
                if(curr == postID){
                    posts.splice(i, 1)
                }
            }

            await updateDoc(userRef, {posts})
            res.send({successful: true, completed: 100})
        })
        res.send({successful: true, completed: 50})
    }).catch((e)=>{
        console.log("Failed to delete")
        console.log(e)
        res.send({successful: false})
    })
}