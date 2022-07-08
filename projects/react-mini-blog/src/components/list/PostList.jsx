import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const PostList = (props) => {
    const { posts, onClickItem } = props;

    return (
        <Wrapper>
            {posts.map((item) => {
                return (
                    <PostListItem
                        key={item.id}
                        post={item}
                        onClick={() => onClickItem(item)}
                    />
                )
            })}
            
        </Wrapper>
    )
}

export default PostList;