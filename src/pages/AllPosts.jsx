import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { PostCard, Container } from "../components";
import { useDispatch, useSelector } from "react-redux";

function AllPosts() {
    const dispatch = useDispatch()
    const userStatus = useSelector((state) => state.auth.status)
    const allPosts = useSelector((state) => state.auth.posts)  
    const userData = useSelector((state) => state.auth.userData)
    const [posts, setPosts] = useState([])

    const updateStoreWithPosts = async () => {
        const newPosts = await appwriteService.getPosts()
        const userPost = newPosts.documents.filter(post => post.userId == userData.$id); 
        setPosts(userPost)
        const updatedStoreData = {
            userData: userData,
            posts: newPosts
        }
        dispatch(login(updatedStoreData))
    }

    
    useEffect(() => {
        if(userStatus) {
            if(allPosts) {
                const userPost = allPosts.documents.filter(post => post.userId == userData.$id); 
                setPosts(userPost)
            } else {
                updateStoreWithPosts()
            }
        }
    }, [])

    return (
        <div className="">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts