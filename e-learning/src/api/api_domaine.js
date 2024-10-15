

import axios from "axios";

const URL_DOMAINE = "https://tache-21-2024.onrender.com/domaine/api_domaine";

export class domaineAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_DOMAINE}`)).data

  }
  static async fetchByID(domaineId) {
    return (await axios.get(`${URL_DOMAINE}/${domaineId}`)).data

  }
}