import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  testAction(item){
    dispatch({
      actionType: AppConstants.TEST_ACTION, 
      item: item
    })
  }
}