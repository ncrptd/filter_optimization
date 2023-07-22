export interface Row {
  [key: string]: string;
}

export interface IColumn {
  name: string;
  selector: (row: Row) => string;
}

export interface SelectedOption {
  [key: string]: string[];
}

export type FilterStateType = {
  columns: IColumn[] | [];
  data: Row[] | [];
  selectedOptions: SelectedOption;
  selectedValues: string[];
  filteredData: Row[];
};

export const initialState: FilterStateType = {
  columns: [],
  data: [],
  filteredData: [],
  selectedOptions: {},
  selectedValues: [],
};

export const enum FILTER_ACTION_TYPE {
  GET_DATA,
  ADD_SELECT_OPTION,
  REMOVE_SELECT_OPTION,
  GET_FILTER_DATA,
}

export type ReducerAction = {
  type: FILTER_ACTION_TYPE;
  payload?: any;
};

interface SelectedOptions {
  [key: string]: any;
}

export const filterReducer = (
  state: FilterStateType,
  action: ReducerAction
): FilterStateType => {
  switch (action.type) {
    case FILTER_ACTION_TYPE.GET_DATA: {
      return {
        ...state,
        columns: action.payload.columns,
        data: action.payload.data,
        filteredData: action.payload.data,
      };
    }

    case FILTER_ACTION_TYPE.ADD_SELECT_OPTION: {
      const { selectedList, selectName, selectItem } = action.payload;
      let list: SelectedOptions = { ...state.selectedOptions };
      if (selectName === null) {
        list = { ...list, ['number']: selectedList };
      } else {
        list = { ...list, [selectName]: selectedList };
      }
      return {
        ...state,
        selectedOptions: list,
        selectedValues: [...state.selectedValues, selectItem],
      };
    }
    case FILTER_ACTION_TYPE.REMOVE_SELECT_OPTION: {
      const { optionsList, selectName } = action.payload;

      const newOptions = { ...state.selectedOptions };

      if (optionsList.length <= 0) {
        delete newOptions[selectName];
      } else {
        newOptions[selectName] = optionsList;
      }

      return { ...state, selectedOptions: newOptions };
    }
    case FILTER_ACTION_TYPE.GET_FILTER_DATA: {
      return { ...state, filteredData: action.payload.filteredData };
    }

    default: {
      return state;
    }
  }
};
