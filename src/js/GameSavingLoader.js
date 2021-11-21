import json from "./json";
import read from "./read";

export default class GameSavingLoader {
  load() {
    read().then((value) => {
      return json(value)
    }).then().catch((err) => {
      err.toString()
    })
  }
}
// не понимаю правда зачем нужен catch
// если в промиссах нет reject
