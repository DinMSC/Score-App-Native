import { Text } from "react-native";
import { DataTable } from "react-native-paper";
import styles from "./standings.js";

const StandingsTableRow = ({ team }) => {
  return (
    <DataTable.Row>
      <DataTable.Cell>{team.position}</DataTable.Cell>

      <Text style={styles.teamName}>{team.team_name}</Text>
      <DataTable.Cell>{team.overall.games_played}</DataTable.Cell>
      <DataTable.Cell>{team.overall.won}</DataTable.Cell>
      <DataTable.Cell>{team.overall.draw}</DataTable.Cell>
      <DataTable.Cell>{team.overall.lost}</DataTable.Cell>
      <DataTable.Cell>{team.total.goal_difference}</DataTable.Cell>
      <DataTable.Cell>{team.overall.points}</DataTable.Cell>
    </DataTable.Row>
  );
};

export default StandingsTableRow;
