//글, 댓글, 댓글작성기능
import { useParams, useNavigate } from "react-router-dom";
import CommentList from "../list/CommentList";
import data from "../../Data";

const PostViewPage = (props) => {
  const { postId } = useParams();

  const post = data.find((item) => item.id === parseInt(postId));

    return (
      <div>
        <div>{post.title}</div>
        <div>{post.content}</div>
        <div>
          <CommentList comments={post.comments}/>
        </div>
        <div>댓글 내용 입력</div>
      </div>
    );
  };
  
  export default PostViewPage;