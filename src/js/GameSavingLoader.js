/* eslint-disable linebreak-style */
import json from './Json';
import read from './Read';
import SaveGaming from './GameSaving';

export default class GameSavingLoader {
  static load() {
    return read().then((value) => json(value)).then((value2) => {
      const valueJson = JSON.parse(value2);
      const saveObj = new SaveGaming(valueJson.id, valueJson.created, valueJson.userInfo);
      return saveObj;
    }).catch((err) => {
      err.toString();
    });
  }
}
// не понимаю правда зачем нужен catch
// если в промиссах нет reject
