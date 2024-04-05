import axios from "axios";


export default function fetchData(key, pair) {
  let response;

  if (key === "end_year") {
    response = axios
      .get(`/end_year?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "topic") {
    response = axios
      .get(`/topic?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "sector") {
    response = axios
      .get(`/sector?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "region") {
    response = axios
      .get(`/region?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "pestle") {
    response = axios
      .get(`/pestle?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "source") {
    response = axios
      .get(`/source?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }
  if (key === "country") {
    response = axios
      .get(`/country?query=${pair}`)
      .then((response) => {
        const { data } = response;
        return data;
      })
      .catch((err) => {
        return err;
      });
  }

  return response;
}
