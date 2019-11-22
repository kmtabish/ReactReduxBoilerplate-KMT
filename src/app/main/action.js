import {Main} from '../../constants/action';

export const mainClick = () => {
    return (dispatch) => {
        dispatch({type: Main.Success, data: {test: "This is test"}})
    }
}