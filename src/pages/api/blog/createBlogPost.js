import { database } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";


export default async function createBlogPost(req, res) {
    const {userID, postID, title, date, name, content, imageUrl} = req.body
    // console.log("blog");
    // res.send({})
    // return
    
        // const userRef = doc(database, "userData", userID)
    const blogRef = doc(database, 'blogPosts', postID)
    await setDoc(blogRef, {userID, postID, title, date, name, content, imageUrl}).then(async (result)=>{
        const userRef = doc(database, "userData", userID)
        await getDoc(userRef).then(async (docsnap)=>{
            const data = docsnap.data()
            const posts = data?.posts||[]
            posts.push(postID)
            await updateDoc(userRef, {posts})
        })
        res.send({successful: true, message: "success"})
    }).catch((e)=>{
        console.log("create post error");
        console.log(e);
        res.send({successful: false, message: "Error Encountered from server"})
    })
}