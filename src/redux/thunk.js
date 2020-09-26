import {todoApis} from '../redux/api';

import {todoActions} from '../redux/actions';

const todoThunks = {
  getAll: () => (dispatch) => {
    todoApis.getAll().then((tasks) => dispatch(todoActions.getAll(tasks)));
  },
};

export {todoThunks};
