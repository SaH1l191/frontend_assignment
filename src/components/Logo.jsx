import PropTypes from 'prop-types';

export default function Logo({ className = '', size = 'default' }) {
  const sizes = {
    small: 'w-8 h-8',
    default: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/placeholder.svg?height=40&width=40" 
        alt="CodeAnt AI" 
        className={`${sizes[size]}`}
      />
      <span className="font-semibold text-xl">CodeAnt AI</span>
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'default', 'large'])
};

