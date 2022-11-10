import React from 'react';
import { DeckProvider } from './providers/Deck';

type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[];
};

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <DeckProvider>{children}</DeckProvider>
  );
};

export default AppProvider;