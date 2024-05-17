import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { PostCard, Container } from "../components";
import { useDispatch, useSelector } from "react-redux";

function AllPosts() {
    const dispatch = useDispatch()

    const userData = useSelector((state) => state.auth.userData)
    console.log("all posts userData",userData)

    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getUserPosts(userData.$id).then((posts) => {
            if(posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    console.log("#############posts length", posts.length)
    return (
        <div className="">
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div className="p-2 w-1/4">
                            <PostCard {...post}/>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts