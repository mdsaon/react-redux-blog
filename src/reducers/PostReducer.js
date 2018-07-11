const initialState = {
  posts: [
    {
      title:'My day in Integrify',
      category:'Work',
      description:'Some descriptions about the posts'

    },
    {
      title:"No Title",
      category:"No Category",
      description:"No Decription"
    }
  ],
};
const PostReducer =(state = initialState, action) =>{
   switch (action.type) {
     case "DISPLAY":
       state ={
         ...state,
       };
       break;

     case "ADD":
      state ={
        ...state,
        posts:[...state.posts,action.payload]
      };
      break;
    case "DELETE":
      state ={
        ...state,
         posts:[...state.posts.splice(action.payload,1)]
       //posts:state.posts.filter((post) =>post.id!==action.id)
      }
      //state.posts.splice(action.payload,1)
      break;
  }
    return state;
}
export default PostReducer;
