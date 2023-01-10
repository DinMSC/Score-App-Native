import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

var width = Dimensions.get("window").width;
var height = Dimensions.get("window").height;

export default StyleSheet.create({


  textContainer: {
    color: "gray",
    fontSize: 48,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  mainTitle: {
    marginTop: "5%",
    marginLeft: 10,
    alignSelf: "flex-start",
    fontSize: 18,
    fontWeight: "bold",
    color: "#595959"
  },
  dataRow: {
    width: 110,
    height: 60,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  dataRowImage: {
    width: 110,
    height: 60,
    backgroundColor: "white",
  },
  dataRowGoals: {
    paddingLeft: 50
  },
  dataRowAssists: {
    paddingRight: 50
  },
  mainRowG: {
    paddingLeft: 50
  },
  dataRowPosition: {
    paddingLeft: 30
  },
  mainRowH: {
    paddingLeft: 30
  },
  mainRowA: {
    paddingRight: 50
  },
  mainRowP: {
    width: 170,
    paddingRight: 100
  },
  dataRowImageLogo: {
    width: 170,
  },
  textLogoStyle: {
    flex: 1
  },
  logoStyleContainer: {
    paddingTop: 17
  },
  textLogoStyleTeam: {
    paddingLeft: 35,
    fontSize: 12,
    paddingBottom: 8
  },
  textLogoStyleName: {
    paddingLeft: 31,
    fontSize: 12,
    paddingBottom: 5,
    fontWeight: "600"
  },
  rowMain: {
    flexDirection: "row",
    marginTop: "0.5%",
  },
  logoStyle: {
    width: 24,
    height: 24,
  },
  mainRow: {
    width: 110,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0E0E0",
    height: 50
  },
  pickerStyle: {
    width: 230,
    alignSelf: "flex-start",
    marginBottom: 10
  },
  textTest: {
    bottom: 100
  },
  wholeTable: {
    alignItems: "center"
  }
});