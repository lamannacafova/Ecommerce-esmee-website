// const initialState=[
//     {
//         id:1,
//         title:"salam",
//         description:"Hello",
//         img:"https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//     }
// ]
const initialState= localStorage.getItem("Blogs") ? JSON.parse(localStorage.getItem("Blogs")) :[]
export const AppReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_BLOG":
            return [...state ,action.payload]
            case "REMOVE_BLOG":
                return state.filter((item)=>item.id !== action.payload)
                case "EDIT_BLOG":
                    const myBlogForEdited=action.payload;
                    const updateBlogsArray=state.map((item)=>{
                        if(item.id === myBlogForEdited.id){
                            return myBlogForEdited
                        }
                        else{
                            return item
                        }
                    })
                    return (state=updateBlogsArray)
                    case "CLEAR_ALL_BLOG":
                        return (state = [])
                default:
                    return state
    }
}