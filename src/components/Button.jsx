import PropTypes from 'prop-types';

export default function Button({ 
  children, 
  variant = 'primary', 
  className = '',
  icon,
  ...props 
}) {
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50',
    toggle: 'bg-transparent hover:bg-gray-100'
  };

  return (
    <button
      className={`
        px-4 py-2 rounded-lg font-medium transition-colors
        flex items-center justify-center gap-2
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'toggle']),
  className: PropTypes.string,
  icon: PropTypes.node
};

