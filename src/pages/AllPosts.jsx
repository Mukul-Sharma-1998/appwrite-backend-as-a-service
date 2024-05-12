import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { PostCard, Container } from "../components";

function AllPosts() {

    const [posts, setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
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