import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import {
  FILTER_ACTION_TYPE,
  IColumn,
  Row,
  filterReducer,
  initialState,
} from '../reducers/filterReducer';
import Papa from 'papaparse';
// import csvFile from '../../public/data/dataset_small.csv';
type FilterContextProps = {
  children: ReactNode;
};

type FilterContextValue = {
  state: typeof initialState;
  dispatch: React.Dispatch<any>;
};

const FilterContext = createContext<FilterContextValue>({
  state: initialState,
  dispatch: () => {},
});

export const FilterProvider = ({ children }: FilterContextProps) => {
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const getData = async () => {
    const res = await fetch('/data/dataset_small.csv');
    const rawData = await res.text();
    const parsedData = Papa.parse(rawData).data as Array<Array<string>>;

    const columns: IColumn[] = [...parsedData[0]].map((c) => ({
      name: c,
      selector: (row: Row) => {
        return row[c];
      },
    }));
    const data = parsedData.slice(1);
    let rows: Row[] = [];

    for (let i = 0; i < data.length; i++) {
      let td = data[i];
      let obj = {};
      for (let j = 0; j < td.length; j++) {
        obj = { ...obj, id: i + 1, [columns[j].name]: td[j] };
      }
      rows.push(obj);
    }
    dispatch({
      type: FILTER_ACTION_TYPE.GET_DATA,
      payload: { columns: columns, data: rows },
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const value: FilterContextValue = {
    state,
    dispatch,
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilterContext = () => useContext(FilterContext);
