import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CommentList = ({ comments }) => {

  return (
    <Wrapper>
      <CommentListItem comments={comments}/>
    </Wrapper>
  );
};

export default CommentList;
