import { CREATE_COMMENT, DELETE_COMMENT } from "./types"

const initialState = {
    comments: []
}

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_COMMENT:
            return { ...state, comments: [...state.comments, action.payload] }
        case DELETE_COMMENT:
            let filteredArr = action.payload.filter(comment => comment.id !== action.deletedComment_id)
            console.log(filteredArr)
            // action.payload.filter(el => el.id)
            return { ...state, comments: [...state.comments = filteredArr] }
        default: return state
    }
}