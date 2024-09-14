

import axios from "axios";

const URL_COURS = "http://localhost:5000/cours/api_cours";

export class coursAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_COURS}`)).data

  }
  static async fetchByID(coursId) {
    return (await axios.get(`${URL_COURS}/${coursId}`)).data

  }
}