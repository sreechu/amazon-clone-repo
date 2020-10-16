export const initialState = {
  basket: [],
  //added this property to the state after firebase authentication functionality !
  user: null,
};

//when we have a data layer -
//reducers "dispatch" actions into the data layer in order to update tha sttae
const reducer = (state, action) => {
  //switch is based on action.types
  switch (action.type) {
    case "ADD_TO_CART":
      //append the new item to the state
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      console.log(action.id);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let basket = [...state.basket];
      if (index >= 0) {
        //splice the first item at the index
        basket.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove product of (id: ${action.id}) from the basket`
        );
      }
      return {
        ...state,
        basket: basket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return { ...state };
  }
};

export default reducer;
