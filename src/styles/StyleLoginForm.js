import * as COLOR from './Color';

module.exports = {
  search_input: {
    height: 40,
    width:'90%',
    paddingLeft:10,
    borderColor: COLOR.BLUE,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    marginLeft:'5%',
    marginRight:'5%',
    color: COLOR.DARK_TEXT,
    backgroundColor: COLOR.WHITE,
    marginBottom: 10,
  },
  error: {
    borderColor: '#fb8d88'
  },
  button: {
    width:'100%',
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: COLOR.DARK_BLUE,
    color: COLOR.WHITE,
    fontWeight: 'bold',
    backgroundColor: COLOR.DARK_BLUE,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 10
  },
  text: {
    color: COLOR.LIGHT_BLUE,
    textAlign: 'center',
    fontSize: 14,
    padding: 10,
    fontWeight: 'bold'
  },
  gap: {
    marginTop: 20
  },
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.BG_BLUE
  },
  btn_wrapper: {
    width: '90%',
    borderRadius: 4
  },
  hr: {
    borderBottomColor: COLOR.WHITE,
    borderBottomWidth: 1,
    width: '35%',
    marginBottom: 40,
    borderRadius: 10

  }
}
