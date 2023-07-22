import DataTable from 'react-data-table-component';
import { useFilterContext } from '../contexts/FilterContext';
function TableView() {
  const { state } = useFilterContext();
  const { filteredData, columns } = state;
  console.log(state);
  return <DataTable pagination columns={columns} data={filteredData} />;
}

export default TableView;
