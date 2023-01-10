import { DataTable } from "react-native-paper";
import StandingsTableHeader from "./StandingsTableHeader";
import StandingsTableRow from "./StandingsTableRow";

const StandingsTableBody = ({ standingsData }) => {
  return (
    <DataTable>
      <StandingsTableHeader />

      {standingsData.map((team) => (
        <StandingsTableRow team={team} />
      ))}
    </DataTable>
  );
};

export default StandingsTableBody;
