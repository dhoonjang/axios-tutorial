import React, {useState, useEffect} from 'react';
import { PostWrapper, Navigator, Post, Warning } from '../../components';
import * as service from '../../services/post';
import { toast } from 'react-toastify';


const PostContainer = () => {
    const [postId, setPostId] = useState(1);
    const [fetching, setFetching] = useState(false);
    const [post, setPost] = useState({title:null, body: null});
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchPostInfo(1);
    }, []);

    const fetchPostInfo = async (postId) => {
        setFetching(true);
        
        try{
            const info = await Promise.all([
                service.getPost(postId),
                service.getComments(postId)
            ]);
            
            console.log(info);
    
            const {title, body} = info[0].data; 
                                                
            const comments = info[1].data;
    
            setPostId(postId);
            setPost({title, body});
            setComments(comments);
            setFetching(false);
        } catch(e) {
            setFetching(false);
            console.log('error occurred', e);
            toast.success("That Post not existed!");
        }
    }

    const handleNavigateClick = (type) => {
        if(type === 'NEXT') {
            fetchPostInfo(postId+1);
        } else {
            fetchPostInfo(postId-1);
        }
    }
    
    return (
        <PostWrapper>
            <Navigator 
                postId = {postId}
                disabled = {fetching}
                onClick={handleNavigateClick}
            />
            <Post
                title={post.title}
                body={post.body}
                comments={comments}
            />
        </PostWrapper>
    )
}

export default PostContainer;