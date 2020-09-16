interface Action {
  type: string;
  id?: number;
  item?: string;
  user?: null | {};
}

interface State {
  basket: [
    { 
      id: number;
      title: string;
      image: string;
      price: number;
      rating: number;
    }
  ];
  count: number;
  user: null | {}
  loading: boolean;
}

const initialState = {
  basket: [],
  count: 0,
  user: null,
}

// ele vai jogar os items para dentro da Array dentro da constante initialState.
const reducer = (state: State, action: Action) => {
  // Adicinar produto na cesta.
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
        count: state.count + 1,
      };

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (product) => product.id === action.id

        /**
         * product.id e o id que estamos passando la no dispach do CheckoutProduct
         * action.id e o id do produto que esta salvo.
         */
      );
      let newBasket = [...state.basket]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`);
      }

      return {
        ...state,
        basket: newBasket,
        count: state.count - 1
      }

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
  }
}

export { initialState, reducer };