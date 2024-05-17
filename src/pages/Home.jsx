import React, {useState, useEffect} from "react";
import appwriteService from "../appwrite/appwriteConfig";
import { PostCard, Container } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/authSlice";

function Home() {

    const [posts, setPosts] = useState([])
    const dispatch = useDispatch()
    const userStatus = useSelector((state) => state.auth.status)
    const allPosts = useSelector((state) => state.auth.posts)  
    const  userData = useSelector((state) => state.auth.userData)

    const updateStoreWithPosts = async () => {
        const newPosts = await appwriteService.getPosts()
        setPosts(newPosts.documents)
        const updatedStoreData = {
            userData: userData,
            posts: newPosts
        }
        dispatch(login(updatedStoreData))
    }

    useEffect(() => {
        if(userStatus) {
            if(allPosts) {
                setPosts(allPosts.documents)
            } else {
                updateStoreWithPosts()
            }
        }

    }, [])

    if(posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    } else {
        return (
            <div className="w-full py-8">
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post) => (
                            <div key={post.$id} className='p-2 w-1/4'>
                                <PostCard {...post} />
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home