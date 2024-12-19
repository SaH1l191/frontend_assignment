import PropTypes from 'prop-types';
import Card from './Card';

export default function Stats({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl font-bold">{item.value}</div>
          <div className="text-gray-600 text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

Stats.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired
};

