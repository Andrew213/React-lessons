import { CREATE_COMMENT, DELETE_COMMENT } from "./types";

export function createComment(comment) {
    return {
        type: CREATE_COMMENT,
        payload: comment
    }
}

export function deleteComment(comment, deletedComment_id) {
    return {
        type: DELETE_COMMENT,
        payload: comment,
        deletedComment_id
    }
}