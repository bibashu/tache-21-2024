

import axios from "axios";

const URL_Quiz = "https://tache-21-2024.onrender.com/Quizz/api_quizz";

export class QuizAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_Quiz}`)).data

  }
  static async fetchByID(QuizId) {
    return (await axios.get(`${URL_Quiz}/${QuizId}`)).data

  }
}