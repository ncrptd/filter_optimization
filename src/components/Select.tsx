import Multiselect from 'multiselect-react-dropdown';
import { useFilterContext } from '../contexts/FilterContext';
import { useMemo, useEffect } from 'react';
import {
  FILTER_ACTION_TYPE,
  Row,
  SelectedOption,
} from '../reducers/filterReducer';

type PropsType = {
  selectName: string;
};

function Select({ selectName }: PropsType) {
  const { state, dispatch } = useFilterContext();
  const { data, filteredData, selectedOptions } = state;

  const optionsData = useMemo((): string[] => {
    let options = new Set<string>();

    for (let i = 0; i < filteredData.length; i++) {
      let d: string | undefined = filteredData[i][selectName];
      if (d) {
        options.add(d);
      }
    }
    return Array.from(options);
  }, [filteredData, selectName]);

  const handleAddSelect = (
    selectedList: string[],
    selectItem: string
  ): void => {
    dispatch({
      type: FILTER_ACTION_TYPE.ADD_SELECT_OPTION,
      payload: {
        selectedList: selectedList,
        selectName: selectName,
        selectItem: selectItem,
      },
    });
  };
  const handleRemoveSelect = (optionsList: string[]) => {
    dispatch({
      type: FILTER_ACTION_TYPE.REMOVE_SELECT_OPTION,
      payload: { optionsList, selectName },
    });
  };
  const getFilterData = (data: Row[], selectedOptions: SelectedOption) => {
    if (
      Object.keys(selectedOptions).length === 0 &&
      selectedOptions.constructor === Object
    ) {
      return dispatch({
        type: FILTER_ACTION_TYPE.GET_FILTER_DATA,
        payload: { filteredData: data },
      });
    }

    const filteredData = data.filter((row) => {
      for (const mod in selectedOptions) {
        if (mod !== 'number') {
          const selectedValues = selectedOptions[mod];
          const modValue = parseInt(mod.slice(3));
          const numberValue = parseInt(row.number);
          const isTrue = selectedValues.some((selectedValue: string) => {
            const modResult = numberValue % modValue;
            if (modResult.toString() === selectedValue) {
              return true;
            }
          });
          if (isTrue) {
            return true;
          } else {
            return false;
          }
        } else {
          const selectedValues = selectedOptions[mod];
          const numberValue = parseInt(row.number);
          return selectedValues.includes(numberValue.toString());
        }
      }
    });
    dispatch({
      type: FILTER_ACTION_TYPE.GET_FILTER_DATA,
      payload: { filteredData: filteredData },
    });
  };

  useEffect(() => {
    getFilterData(data, selectedOptions);
  }, [selectedOptions]);

  return (
    <div>
      <Multiselect
        selectedValues={selectedOptions[selectName]}
        isObject={false}
        options={optionsData} // Options to display in the dropdown
        onSelect={handleAddSelect} // Function will trigger on select event
        onRemove={handleRemoveSelect} // Function will trigger on remove event
        showCheckbox={true}
        placeholder={selectName}
        closeOnSelect
      />
    </div>
  );
}

export default Select;
