import PropTypes from 'prop-types';
import Button from './Button';

export default function ToggleGroup({ options, value, onChange }) {
  return (
    <div className="inline-flex rounded-lg border border-gray-200 p-1">
      {options.map((option) => (
        <Button
          key={option.value}
          variant="toggle"
          className={`
            ${value === option.value ? ' text-white' : 'bg-blue-600 text-gray-700'}
            min-w-[120px]
          `}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
}

ToggleGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

