import { useNavigate } from "react-router-dom";
import data from "../../Data";
import PostList from "../list/PostList";

const MainPage = () => {
  const navigate = useNavigate();
  
  const onClickItem = (item) => {
    const idx = data.findIndex((el) => el.title === item.title);
    navigate(`/post/${data[idx].id}`)
  }
  return (
    <>
      <div>
        <button>글 작성하기</button>
        <PostList posts={data} onClickItem={onClickItem}></PostList>
      </div>
    </>
  );
};

export default MainPage;