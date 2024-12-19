import PropTypes from 'prop-types';

export default function UserBadge({ name, variant = 'default' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white'
  };

  return (
    <span className={`
      px-2 py-0.5 rounded text-sm font-medium
      ${variants[variant]}
    `}>
      {name}
    </span>
  );
}

UserBadge.propTypes = {
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'success', 'warning'])
};

