interface State {
  basket: string[]
}

interface Action {
  type: string;
  item: string
}

const initialState = {
  basket: [],
}

// ele vai jogar os items para dentro da Array dentro da constante initialState.
const reducer = (state: State, action: Action) => {
  console.log(action)
  // Adicinar produto na cesta.
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
  }
}

export { initialState, reducer };