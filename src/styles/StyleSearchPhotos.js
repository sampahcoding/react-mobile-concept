import * as COLOR from './Color';

module.exports = {
  item: {
    paddingBottom: 30,
    paddingLeft:15,
    paddingRight: 15,
    //alignItems: 'center'
  },
  item_image: {
    borderColor: COLOR.LIGHTEST_BLUE,
    borderWidth: 2
  },
  item_touch: {
    zIndex: 4
  },
  item_desc: {
    color: COLOR.DARK_TEXT,
    fontSize: 14,
    paddingLeft: 5,
    paddingRight: 10,
    textAlign: 'left'
  },
  item_ico_wrapper: {
    marginTop:10,
    marginBottom:10,
    textAlign: 'left'
  },
  item_ico_text: {
    paddingRight:10,
    paddingLeft: 10,
    color: COLOR.BG_BLUE
  },
  container: {
    paddingTop: 30,
    paddingBottom: 100,
    backgroundColor: COLOR.BG_BLUE
  },
  search_form: {
    paddingTop: 10,
    paddingBottom: 10
  },
  search_input: {
    height: 30,
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
    backgroundColor: COLOR.WHITE
  },
  result_wrapper: {
    backgroundColor: COLOR.WHITE,
    paddingTop: 30
  },
  not_found: {
    fontSize: 18,
    paddingTop: 30,
    color: COLOR.DARK_TEXT,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  loader_wrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%'
  },
  no_image: {
    height: 200,
    paddingTop: '50%',
    width: '100%',
    borderWidth: 4,
    borderRadius: 2,
    borderColor: COLOR.LIGHTEST_BLUE,
    position: 'absolute',
    zIndex: 2,
    color: COLOR.LIGHT_BLUE,
    fontSize:20,
    textAlign: 'center',
    marginTop: 30
  },
  cursor_up: {
    position: 'absolute',
    bottom: 60,
    right: 15
  }
}
