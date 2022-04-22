import { act } from "react-dom/test-utils"

export default (state, action) => {  
    switch(action.type){
        case "ADD_MOVIE_TO_WATCHLIST":
            return{
                ...state, //... = spread operator - returns existing state
                watchlist:[action.payload,...state.watchlist] //adds movie to an existing watchlist
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie=>movie.id !== action.payload) //return every movie except the one with ID that we deleted
            }
        case "ADD_MOVIE_TO_WATCHED":
            return{
                ...state,
                watchlist: state.watchlist.filter(movie=>movie.id !== action.payload.id),
                watched: [action.payload,...state.watched],

            }    
        case "MOVE_TO_WATCHLIST":
            return{
                ...state,
                watched:state.watched.filter(movie =>movie.id!== action.payload.id),
                watchlist:[action.payload, ...state.watchlist],
            }
            case "REMOVE_FROM_WATCHED":
                return{
                    ...state,
                    watched:state.watched.filter(movie=>movie.id!==action.payload) //no need for payload id since we are passing the id only (above we pass whole movie)
                }        

            
        default:
            return state
    }
}