import {WhiteBoardAction} from '../constants/actionTypes';
export default function (state = {images: [], pageNumber: -1, numPages: 0}, action) {
  switch (action.type) {
    case WhiteBoardAction.PDF_START:
      return state;
    case WhiteBoardAction.SET_IMAGES:
      return {...state, images: [...action.images], pageNumber: 0};
    case WhiteBoardAction.RESET_PAGE:
      return {...state, pageNumber: 0, numPages: action.numPages};
    case WhiteBoardAction.SET_PAGE:
      return {...state, pageNumber: action.pageNumber};
    default:
      return state;
  }
}