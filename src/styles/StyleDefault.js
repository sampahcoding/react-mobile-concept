import * as COLOR from './Color';

module.exports = {
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40
  },
  heading: {
    alignItems: 'flex-start',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    color: '#47aee6'
  },
  h1: {
    fontSize: 22,
    marginBottom: 10,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: '#47aee6'
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
  half: {
    flex: 2,
    flexDirection: 'column'
  }
};
