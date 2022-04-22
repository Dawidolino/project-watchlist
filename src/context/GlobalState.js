import React, {createContext, useEffect, useReducer} from "react"
import AppReducer from "./AppReducer"
//initial state - storage
const initialState={
    watchlist:localStorage.getItem('watchlist')? JSON.parse(localStorage.getItem('watchlist')):[], //if there was an item in localstorage, retrieve it, if not, create an empty array
    watched:localStorage.getItem('watched')? JSON.parse(localStorage.getItem('watched')):[],
}

//create context
export const GlobalContext = createContext(initialState)

//provider components
export const GlobalProvider = props =>{
    const[state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(()=>{  //whenever a movie is added to a watchlist
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist)) //saving watchlist on local storage (needs to be a string)
        localStorage.setItem('watched',JSON.stringify(state.watched))
    },[state]) //passing state since we are accessing it 

//actions 
    const addMovieToWatchlist = movie =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST",payload:movie}) 
    }
    const removeMovieFromWatchlist = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST",payload: id})
    }
    const addMovieToWatched = movie =>{
        dispatch({type: "ADD_MOVIE_TO_WATCHED",payload:movie})
    }
    const moveToWatchlist = movie =>{
        dispatch({type: "MOVE_TO_WATCHLIST",payload:movie})
    }
    const removeMovieFromWatched = id =>{
        dispatch({type: "REMOVE_FROM_WATCHED",payload:id})
    }

    return( //global access from every component
        <GlobalContext.Provider value={{
        watchlist: state.watchlist, 
        watched: state.watched, 
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchlist,
        removeMovieFromWatched,

        }}>  
            {props.children}
        </GlobalContext.Provider>
    ) 
}