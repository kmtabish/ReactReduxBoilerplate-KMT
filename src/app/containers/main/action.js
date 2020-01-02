import {Main} from '../../../constants/action';
import { httpRequest, findApiConfigByName } from '../../../utils/request';
import { ApiNames } from '../../../utils/network'

export const mainClick = () => {
    return (dispatch) => {
        const _data = {};
        const currencyConfig = findApiConfigByName(ApiNames.Currency);
        httpRequest(currencyConfig.url, null, { data: _data})
        .then(data => {
            dispatch({type: Main.Success, data: {test: data}})
        })
        .catch(error => {
            dispatch({type: Main.Failure, error: error});
        })
    }        
}