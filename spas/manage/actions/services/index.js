import { push, goBack } from 'react-router-redux'

export const goBackToServices = () => dispatch => {
    dispatch(goBack());
}