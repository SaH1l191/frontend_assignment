import PropTypes from 'prop-types';

export default function SignInButton({ children, icon, provider, onClick }) {
  const providerColors = {
    github: 'text-black',
    gitlab: 'text-orange-600',
    bitbucket: 'text-blue-500',
    azure: 'text-blue-600'
  };

  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 
        bg-white border border-gray-200 rounded-lg font-medium text-gray-700
        hover:bg-gray-50 transition-colors"
    >
      <span className={`w-5 h-5 ${providerColors[provider]}`}>
        {icon}
      </span>
      {children}
    </button>
  );
}

SignInButton.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.node.isRequired,
  provider: PropTypes.oneOf(['github', 'gitlab', 'bitbucket', 'azure']).isRequired,
  onClick: PropTypes.func
};

