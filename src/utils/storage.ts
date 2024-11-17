import { useMMKV } from 'react-native-mmkv';

export const saveGameState = (gameState: any) => {
  const mmkv = useMMKV();
  mmkv.set('gameState', JSON.stringify(gameState));
};

export const loadGameState = () => {
  const mmkv = useMMKV();
  const savedGameState = mmkv.getString('gameState');
  return savedGameState ? JSON.parse(savedGameState) : null;
};