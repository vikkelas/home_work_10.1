/* eslint-disable linebreak-style */
import json from './Json';
import read from './Read';

export default class GameSavingLoader {
  static load() {
    return read().then((value) => json(value));
  }
}
