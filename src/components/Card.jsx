import PropTypes from 'prop-types';

export default function Card({ children, className = '', elevated = false }) {
  return (
    <div className={`
      rounded-xl bg-white p-6
      ${elevated ? 'shadow-lg' : 'border border-gray-200'}
      ${className}
    `}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  elevated: PropTypes.bool
};

