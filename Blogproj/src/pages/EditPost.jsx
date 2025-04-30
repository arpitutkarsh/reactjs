import React from 'react'
import { useEffect, useState } from 'react'
import { Container, PostForm } from '../components';
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
function EditPost() {
    // const [user, setUser] = useState('');
    // const ud = useSelector(state => state.auth.userData)
    const [post, setPosts] = useState(null)
    //we also need slug values, when the user clicks on any post the slug value becomes the url and t fetch value from url we use useParams
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            appwriteService.getPost(slug).then((post) => {
                if(post){
                    setPosts(post)
                }
            })
        }
        else{
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost