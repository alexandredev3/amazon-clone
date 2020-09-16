import React, {
  createContext,
  useReducer,
  useContext
} from 'react';

interface Reducer {
  basket: string[];
  count: number;
}

interface Props {
  reducer: any;
  initialState: Reducer;
}

interface Data {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: number;
}


interface ItemData {
  type: string;
  id?: number;
  item?: Data;
  user?: null | { email: string } | { email: null }
}

interface StateData {
  basket: [
    Data
  ];
  count: number;
  user: null | { email: string } | { email: null }
}

interface ContextData {
  data: StateData;
  dispatch: React.Dispatch<ItemData>;
}

// Preparação da Layer e tipagem(caso você estiver usando Typescirpt).
const StateContext = createContext<ContextData>({} as ContextData);

// Prover os dados.
export const StateProvider: React.FC<Props> = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let data = state as StateData;

  return (
    <StateContext.Provider
      value={{ data, dispatch }}
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