/* eslint-disable no-unused-vars */
import React, { SetStateAction } from 'react';
import { ErrorProps } from './Error';

export type DeckProviderProps = {
  children: React.ReactNode;
};


export type NewDeckProps = string;

type ImagesProps = {
  svg: string;
  png: string;
}

export type CardProps = {
  code: string;
  image: string; 
  images: ImagesProps;
  value: string;
  suit: string;
}

export type DeckResultProps = {
    success: boolean;
    deck_id: string;
    cards: CardProps[];
    remaining: number;
};

export type DeckShuffleProps = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}

export type DrawCardProps = {
  success: boolean;
  deck_id: string; 
  cards: CardProps;
  remaining: number;
}

export type DeckTypes = {
  loading: boolean; 
  setLoading: React.Dispatch<SetStateAction<boolean>>;
  deckId: NewDeckProps;
  cards: CardProps[];
  error: ErrorProps;
  setError: React.Dispatch<SetStateAction<ErrorProps>>;
  setCards: React.Dispatch<SetStateAction<CardProps[]>>;
  setDeckId: React.Dispatch<SetStateAction<string>>;
  getNewDeck:  () => Promise<DeckResultProps>;
  shuffleDeck: (id: string) => Promise<DeckShuffleProps>;
  drawNewCard: () => Promise<DrawCardProps>;
  counterDraw: number;
  setCounterDraw: React.Dispatch<SetStateAction<number>>;
}