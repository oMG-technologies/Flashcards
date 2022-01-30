import { createContext } from 'react';

export type ContextType = {
  questionsRandom: never[];
  answersGood: number;
  answersBad: number;
  IdontknowClick: () => void;
  IknowClick: () => void;
  numberElementInFlipCards: number;
  reset: () => void;
  stop: () => void;
  arrOfAnswers: boolean[];
  time: { ms: number; s: number; m: number; h: number };
  flip: boolean;
  setFlip: (arg: boolean) => void;
  setFlipButtonsOnCard: (arg: boolean) => void;
  flipButtonsOnCard: boolean;
  isSignOut: () => JSX.Element | undefined;
  removeUserFromApplication: () => void;
};

export const MainContext = createContext<ContextType>({} as ContextType);
