

import axios from "axios";

const URL_SOUSDOMAINE = "https://tache-21-2024.onrender.com/sousDomaine/api_sousdomaine";

export class sousDomaineAPI {
  static async fetchAll() {
    return (await axios.get(`${URL_SOUSDOMAINE}`)).data

  }
  static async fetchByID(sousdomaineId) {
    return (await axios.get(`${URL_SOUSDOMAINE}/${sousdomaineId}`)).data

  }
}