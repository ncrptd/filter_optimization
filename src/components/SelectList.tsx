import { useFilterContext } from '../contexts/FilterContext';
import Select from './Select';

const SelectList = () => {
  const {
    state: { columns },
  } = useFilterContext();

  return (
    <div className="flex gap-4 ">
      {columns.map((column) => (
        <Select selectName={column.name} key={column.name} />
      ))}{' '}
    </div>
  );
};
export default SelectList;
