import * as COLOR from './Color';

module.exports = {
  mainContainer: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingTop: 40
  },
  heading: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: COLOR.BG_BLUE
  },
  h1: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: COLOR.BG_BLUE
  },
  container: {
    flexDirection: 'row',
    marginLeft: 10
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.LIGHT_BLUE,
    paddingBottom: 20,
    marginRight: 10
  },
  item_h1: {
    color: "#fff",
    paddingTop: 10
  },
  one: {
    flex: 1,
    flexDirection: 'column'
  },
  three: {
    flex: 3,
    flexDirection: 'column',
    paddingLeft: 20
  },
  circle: {
    height: 100,
    width: 100,
    borderColor: COLOR.LIGHTEST_BLUE,
    borderWidth: 3
  },
  gap: {
    marginBottom: 20,
    color: COLOR.DARK_TEXT
  },
  repo_heading: {
    backgroundColor: COLOR.BG_BLUE,
    marginLeft: -10,
    paddingLeft: 20
  },
  default_text: {
    color: COLOR.DARK_TEXT,
    fontSize: 14
  }
};
