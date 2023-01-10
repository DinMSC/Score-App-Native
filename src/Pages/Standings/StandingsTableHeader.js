import { DataTable } from "react-native-paper";
import styles from "./standings.js";

const StandingsTableHeader = () => {
  return (
    <DataTable.Header style={styles.tableHeader}>
      <DataTable.Title>#</DataTable.Title>
      <DataTable.Title>Team</DataTable.Title>
      <DataTable.Title numeric>Played</DataTable.Title>
      <DataTable.Title numeric>Won</DataTable.Title>
      <DataTable.Title numeric>Draw</DataTable.Title>
      <DataTable.Title style={styles.gamesLost}>Lost</DataTable.Title>
      <DataTable.Title>Goals</DataTable.Title>
      <DataTable.Title>PTS</DataTable.Title>
    </DataTable.Header>
  );
};

export default StandingsTableHeader;
