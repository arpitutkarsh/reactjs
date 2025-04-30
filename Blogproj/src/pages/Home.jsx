import React, {useEffect, useState} from 'react'
import appwriteService from '../appwrite/config';
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';
import authService, { AuthService } from '../appwrite/auth';
import { Link } from 'react-router-dom';
function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.status)
    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    }, [posts, userData])
    //const userData = useSelector((state) => state.auth.status)
    
    if(!userData){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Please Login to Read POSTS
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    if(posts.length === 0 && userData){
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                <Link
                                to="/add-post"
                                >
                                    Create Your First Post
                                </Link>
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return(
        <div className='w-full py-8'>
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

export default Home