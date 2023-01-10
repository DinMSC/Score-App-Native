import { useState, useEffect } from "react";
import StandingsTableBody from "./StandingsTableBody";
import Api from "../../api";

const Standings = () => {
  const [standingsData, setStandingsData] = useState([]);

  useEffect(() => {
    Api.get(`/standings/season/19735?include=league`).then((response) => {
      setStandingsData(response.data.data[0].standings.data);
    });
  }, []);

  return <StandingsTableBody standingsData={standingsData} />;
};

export default Standings;
