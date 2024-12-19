import { useState } from 'react';

export default function LandingPage() {
  const [deploymentType, setDeploymentType] = useState('saas');

  const stats = [
    { value: '30+', label: 'Language Support' },
    { value: '10K+', label: 'Developers' },
    { value: '100K+', label: 'Hours Saved' }
  ];

  const deploymentOptions = [
    { value: 'saas', label: 'SAAS' },
    { value: 'self-hosted', label: 'Self Hosted' }
  ];

  const saasOptions = [
    { name: 'Sign in with GitHub', icon: 'github_icon.svg', color: 'text-black' },
    { name: 'Sign in with Bitbucket', icon: 'bitbucket_icon.svg', color: 'text-[#2684FF]' },
    { name: 'Sign in with Azure DevOps', icon: 'azuredevops_icon.svg', color: 'text-[#0078D4]' }
  ];

  const selfHostedOptions = [
    { name: 'Self Hosted GitLab', icon: 'gitlab_icon.svg', color: 'text-[#FC6D26]' },
    { name: 'Sign in with SSO', icon: 'sso_icon.svg', color: 'text-black' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex  h-screen">
        {/* Left Column */}
        <div className="w-1/2 hidden md:flex items-center bg-white border-r-2">
          <div className="relative w-full items-center justify-center flex">
            {/* Main Card */}
            <div className="items-center flex justify-center absolute -bottom-full">
              <div className="bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6">
                <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
                  <img src="Subtract_logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
                  <h2 className="text-xl font-semibold text-[#1a1a1a]">
                    AI to Detect & Autofix Bad Code
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-8">
                  {stats.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-[#1a1a1a]">{item.value}</div>
                      <div className="text-sm text-[#666666]">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
             
             
              <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-6 absolute -bottom-40 -right-1/4 transform -translate-x-1/2 w-3/5">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-start">
                    <div className="bg-[#F3F4F6] rounded-full p-3 mb-3">
                      <img className="w-6 h-6" src="Vector.svg" alt="Vector" />
                    </div>
                    <p className="text-[#666666] text-sm mb-1">Issues Fixed</p>
                    <div className="text-3xl font-bold text-[#1a1a1a]">500K+</div>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-blue-600 font-bold text-lg">↑ 14%</div>
                    <p className="text-sm text-[#666666]">This week</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img
          src="Subtract.svg"
          className="absolute bottom-0 left-0 hidden md:block"
          alt="Background"
        />

        {/* Right Column */}
        <div className="md:w-1/2  w-full flex items-center justify-center p-8">
          <div className="w-4/5">
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-8">
              <div className="flex items-center justify-center gap-3 mb-8">
                <img className="w-8 h-8" src="Subtract_logo.svg" alt="CodeAnt Logo" />
                <p className="text-xl font-semibold text-[#1a1a1a]">CodeAnt AI</p>
              </div>

              <h1 className="text-[32px] font-bold mb-10 text-center text-[#1a1a1a]">
                Welcome to CodeAnt AI
              </h1>

              <div className="flex rounded-lg overflow-hidden border border-[#E5E7EB] text-lg mb-10">
                {deploymentOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`
                      flex-1 px-8 py-3.5 font-medium transition-colors text-base
                      ${deploymentType === option.value
                        ? 'bg-[#2563EB] text-white'
                        : 'bg-white text-[#4B5563] hover:bg-gray-50'
                      }
                    `}
                    onClick={() => setDeploymentType(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {/* Render SAAS or Self Hosted Options */}
              {deploymentType === 'saas' && (
                <div className="space-y-3">
                  {saasOptions.map((option) => (
                    <button
                      key={option.name}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 
                        bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#4B5563]
                        hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={option.icon}
                        alt={option.name}
                        className={`w-5 h-5 ${option.color}`}
                      />
                      {option.name}
                    </button>
                  ))}
                </div>
              )}

              {deploymentType === 'self-hosted' && (
                <div className="space-y-3">
                  {selfHostedOptions.map((option) => (
                    <button
                      key={option.name}
                      className="w-full flex items-center justify-center gap-3 px-4 py-3 
                        bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#4B5563]
                        hover:bg-gray-50 transition-colors"
                    >
                      <img
                        src={option.icon}
                        alt={option.name}
                        className={`w-5 h-5 ${option.color}`}
                      />
                      {option.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-[#6B7280]">
                <span className="text-black">By signing up you agree to the{' '}</span>
                <span href="#" className="text-black font-bold hover:underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
