import PropTypes from 'prop-types';

function DataList({ dataList, Child }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 w-full'>
      {dataList.map((dataItem) => (
        <Child key={dataItem._id} dataItem={dataItem} />
      ))}
    </div>
  );
}

DataList.propTypes = {
  dataList: PropTypes.array,
  Child: PropTypes.object,
};

export default DataList;
