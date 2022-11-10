import { useContext } from "react";
import { DeckTypes } from 'types/Deck';
import { DeckContext } from "contexts/providers/Deck";


const useDeckContext = (): DeckTypes => {
    const context = useContext(DeckContext);
  
    if (!context) {
      throw new Error('useDeckContext must be used whit DeckContext');
    }
  
    return context;
  };
  
  export default useDeckContext;