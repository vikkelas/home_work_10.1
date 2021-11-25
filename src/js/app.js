/* eslint-disable linebreak-style */
import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

GameSavingLoader.load().then((value) => {
  const obj = JSON.parse(value);
  const save = new GameSaving(obj.id, obj.created, obj.userInfo);
  return save;
});
