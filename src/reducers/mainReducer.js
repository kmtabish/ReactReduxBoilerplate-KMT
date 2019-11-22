import {Main, Groups, Quiz} from '../constants/action';
import _cloneDeep from 'lodash/cloneDeep';
const defaultObj = {
};

export const mainReducer = (state = defaultObj, action) => {
    let duplicateState = _cloneDeep(state);
    switch(action.type) {
     case Main.Success: 
          console.log("LLLL", action)
          duplicateState.main = action.data
          break;
     case Main.Failure: 
          duplicateState.main = {}
          break;
     default: 
          break;
    }
    return duplicateState;
   }
 