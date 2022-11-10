import {
    DeckProviderProps,
    NewDeckProps,
    DeckTypes,
    CardProps
  } from 'types/Deck';
import { setSessionStorage } from 'hooks/useSession';
  import { createContext, useState } from 'react';
  import { DeckService } from 'service/DeckService';
import { ErrorProps } from 'types/Error';
  
  const DeckContext = createContext({} as DeckTypes);
  
  const DeckProvider = ({ children }: DeckProviderProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [deckId, setDeckId] = useState<NewDeckProps>('');
    const [cards, setCards] = useState<CardProps[]>([]);
    const [error, setError] = useState<ErrorProps>({});

    async function getNewDeck() {
      try {
        setLoading(true);
        const response = await DeckService.new();
        if(!!response?.data?.deck_id){
          const obj = {
            success: response.data.success,
            deck_id: response.data.deck_id,
            cards: response.data.cards,
            remaining: response.data.remaining
          };
          setDeckId(obj.deck_id);
          setCards(obj.cards);

          setSessionStorage('cards', obj.cards);
          return obj;
        } else {
          throw new Error('Request new deck error... try again later!');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    }

    const shuffleDeck = async (id : string) => {
      try {
        setLoading(true);
        const response = await DeckService.shuffle(id);
        console.log(response);
        if(!!response?.data?.deck_id){
          const obj = {
            success: response.data.success,
            deck_id: response.data.deck_id,
            shuffled: response.data.shuffled,
            remaining: response.data.remaining
          };
          // setCards(obj.cards);

          // setSessionStorage('cards', obj.cards);
          return obj;
        } else {
          throw new Error('Request shuffle deck error... try again later!');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    const drawNewCard = async () => {
      try {
        const response = await DeckService.drawCard(deckId);
        if(!!response?.data?.deck_id){
          const obj = {
            cards: response.data.cards[0],
            success: response.data.success,
            deck_id: response.data.deck_id,
            remaining: response.data.remaining
          };
          return obj;
        } else {
          throw new Error('Request new card error... try again later!');
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    return (
      <DeckContext.Provider
        value={{
          error,
          setError,
          loading,
          setLoading,
          deckId,
          setDeckId,
          cards,
          setCards,
          getNewDeck,
          shuffleDeck,
          drawNewCard
        }}
      >
        {children}
      </DeckContext.Provider>
    );
  };
  
  export { DeckContext, DeckProvider };