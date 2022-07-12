import {CommentTitle, CommentInfo, CommentInput, AddCommentBtnDiv  } from "../components/addComment/CommentForm"
import styled from "styled-components"

function AddReview() {
    return <ReviewContainer>
        <CommentTitle> 이용후기 등록 </CommentTitle>
        <CommentInfo></CommentInfo>
        <CommentInput commentType="이용후기 등록" placeholder="이용후기를 작성해주세요. (200자 이내)"></CommentInput>
        <AddCommentBtnDiv></AddCommentBtnDiv>
    </ReviewContainer>
}


const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5vw 15vw;
    align-items:center;
`

export default AddReview;