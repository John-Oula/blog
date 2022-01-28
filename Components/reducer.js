
export const initialState = {
    // States

    search_results:[],
}

const reducer = (state, action) =>{
    switch(action.type){
        case "SET_SEARCH_RESULTS":
            return{
                ...state,
                search_results: [...state.search_results,action.search_results ]
            }

        default:
            return state;

    }
}

export default reducer;