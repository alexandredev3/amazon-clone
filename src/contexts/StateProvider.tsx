import React, {
  createContext,
  useReducer,
  useContext
} from 'react';

interface Reducer {
  basket: string[];
}

interface Props {
  reducer: any;
  initialState: Reducer;
}

interface ItemData {
  type: string;
  item: {
    id: number;
    title: string;
    image: string;
    price: number;
    rating: number;
  }
}

interface StateData {
  basket: [
    {
      id: number;
      title: string;
      image: string;
      price: number;
      rating: number;
    }
  ];
}

interface ContextData {
  products: StateData;
  dispatch: React.Dispatch<ItemData>;
}

// Preparação da Layer e tipagem(caso você estiver usando Typescirpt).
const StateContext = createContext<ContextData>({} as ContextData);

// Prover os dados.
export const StateProvider: React.FC<Props> = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const products = state as StateData;

  return (
    <StateContext.Provider
      value={{ products, dispatch }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Criando nosso proprio Hook.
export function useStateValue() {
  const context = useContext(StateContext);

  return context;
}