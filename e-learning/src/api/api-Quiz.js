

import axios from "axios";

const URL_Quiz = "http://localhost:5000/Quiz/api_cours";

export class QuizAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_Quiz}`)).data

  }
  static async fetchByID(QuizId) {
    return (await axios.get(`${URL_Quiz}/${QuizId}`)).data

  }
}