

import axios from "axios";

const URL_DOMAINE = "http://localhost:5000/domaine/api_domaine";

export class domaineAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_DOMAINE}`)).data

  }
  static async fetchByID(domaineId) {
    return (await axios.get(`${URL_DOMAINE}/${domaineId}`)).data

  }
}