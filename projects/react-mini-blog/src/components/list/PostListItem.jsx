import styled from "styled-components";

const Wrapper = styled.div``;

const TitleText = styled.p``;

const PostListItem = (props) => {
    const { post, onClick } = props;

    return (
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    )
}

export default PostListItem;