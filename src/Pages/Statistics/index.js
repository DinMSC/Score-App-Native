import * as React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import { Picker } from "@react-native-picker/picker";
import { DataTable, Provider as PaperProvider } from 'react-native-paper';
import styles from "./styles"
import Api from "../../api"

function Statistics() {
  const numberOfItemsPerPageList = [5, 10, 15];
  const [data, setData] = useState([])
  const [selectedValue, setSelectedValue] = useState();
  const [page, setPage] = useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, data.length);

  let id;

  id = (selectedValue == "DSL") ? "19686" : "19735"

  const assistscorersApiUrl = `/topscorers/season/${id}?include=assistscorers.player&include=assistscorers.player.team`;
  const goalscorersApiUrl = `/topscorers/season/${id}?include=goalscorers.player&include=goalscorers.player.team`;

  const fetchData = async (goalscorersApi, assistscorersApi) => {

    try {
      const goalscorersResponse = await Api.get(goalscorersApi);
      const assistscorersResponse = await Api.get(assistscorersApi);

      goalscorersResponse.data.data.goalscorers.data.map((row) => {
        var filterAssistscorers =
          assistscorersResponse.data.data.assistscorers.data.filter(
            (f) => f.player_id == row.player_id
          );

        if (filterAssistscorers.length > 0) {
          row.assists = filterAssistscorers.find(
            (f) => f.player_id == row.player_id
          ).assists;
        } else {
          row.assists = 0;
        }
      });

      setData(goalscorersResponse.data.data.goalscorers.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setPage(0);

    fetchData(goalscorersApiUrl, assistscorersApiUrl)


  }, [numberOfItemsPerPage, selectedValue]);


  return (

    <PaperProvider>
      <View style={styles.parentContainer}>
        <ScrollView >
          <Text style={styles.mainTitle}>Goals & Assists</Text>
          <Picker
            selectedValue={selectedValue}
            style={styles.pickerStyle}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedValue(itemValue)
            }
            }>
            <Picker.Item label="Scottish Premiership" value="SPS" />
            <Picker.Item label="Danish Superleague" value="DSL" />
          </Picker>
          <View style={styles.wholeTable}>
            <View style={styles.rowMain} >
              <View style={[styles.mainRow, styles.mainRowH]}>
                <Text>#</Text>
              </View>
              <View style={[styles.mainRow, styles.mainRowP]}>
                <Text >Player</Text>
              </View>
              <View style={[styles.mainRow, styles.mainRowG]}>
                <Text >G</Text>
              </View>
              <View style={[styles.mainRow, styles.mainRowA]}>
                <Text >A</Text>
              </View>
            </View>
            <View>
              {data
                .slice(
                  page * numberOfItemsPerPage,
                  page * numberOfItemsPerPage + numberOfItemsPerPage
                ).map((row) => (
                  <View
                    key={row.player.data.player_id}
                  >
                    <View style={styles.rowMain} >
                      <View style={[styles.dataRow, styles.dataRowPosition]}>
                        <Text>{row.position}</Text>
                      </View>
                      <View style={[styles.dataRowImage, styles.dataRowImageLogo]}>
                        <Text style={styles.textLogoStyle} >
                          <View style={styles.logoStyleContainer}>
                            <Image
                              key={row.player.data.player_id}
                              style={styles.logoStyle}
                              source={{ uri: row.player.data.team.data.logo_path }}
                            /></View>
                        </Text>
                        <Text style={styles.textLogoStyleName}> {row.player.data.display_name}</Text>
                        <Text style={styles.textLogoStyleTeam}>{row.player.data.team.data.name}</Text>
                      </View>
                      <View style={[styles.dataRow, styles.dataRowGoals]}>
                        <Text >{row.goals}</Text>
                      </View>
                      <View style={[styles.dataRow, styles.dataRowAssists]}>
                        <Text >{row.assists}</Text>
                      </View>
                    </View>
                  </View>
                ))}
            </View>
          </View>
          <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(data.length / numberOfItemsPerPage)}
            onPageChange={page => setPage(page)}
            label={`${from + 1}-${to} of ${data.length}`}
            showFastPaginationControls
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={numberOfItemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            selectPageDropdownLabel={'Rows per page'}
          />
        </ScrollView>
      </View>
    </PaperProvider>
  );

} export default Statistics;