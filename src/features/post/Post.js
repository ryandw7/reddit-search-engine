import { useSelector } from "react-redux";
import { selectFetchPostStatus, selectCurrentPost } from "../listings/listingsSlice";
import PostBody from '../../components/post/PostBody.js'
export default function Post(){
    const currentPost = useSelector(selectCurrentPost);
    const status = useSelector(selectFetchPostStatus);
    const loading = <p>Loading...</p>
    const rejected = <p>Failed :/</p>
    const post = <PostBody post={currentPost} />
    const renderPost = () => {
        switch (status){
            case 'pending' : return loading;
           
            case 'fulfilled' : return post;
            
            case 'rejected' : return rejected;
        }
    }
  
    return (
        <div className="post">
             {renderPost()}
        </div>
    )
}