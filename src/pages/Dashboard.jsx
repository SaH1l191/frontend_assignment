import { useState } from 'react';
import { Home, Code2, Cloud, FileText, Settings, Phone, LogOut, Search, RefreshCw, Plus, ChevronDown, X, Menu } from 'lucide-react';

const repositories = [
    { name: 'design-system', language: 'React', size: '7320 KB', status: 'Public', updated: '1 day ago' },
    { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', status: 'Private', updated: '2 days ago' },
    { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', status: 'Private', updated: '5 days ago' },
    { name: 'mobile-app', language: 'Swift', size: '3096 KB', status: 'Public', updated: '3 days ago' },
    { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', status: 'Private', updated: '6 days ago' },
    { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', status: 'Public', updated: '4 days ago' },
    { name: 'social-network', language: 'PHP', size: '5432 KB', status: 'Private', updated: '7 days ago' },
];

const navigationItems = [
    { icon: Home, label: 'Repositories', active: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Cloud, label: 'Cloud Security' },
    { icon: FileText, label: 'How to Use' },
    { icon: Settings, label: 'Settings' }
];
const navigationItemsMobile = [
    { icon: Home, label: 'Repositories', active: true },
    { icon: Code2, label: 'AI Code Review' },
    { icon: Cloud, label: 'Cloud Security' },
    { icon: FileText, label: 'How to Use' },
    { icon: Settings, label: 'Settings' },
    { icon: Phone, label: 'Support' },
    { icon: LogOut, label: 'Logout' },
];

const bottomNavigationItems = [
    { icon: Phone, label: 'Support' },
    { icon: LogOut, label: 'Logout' },
];

export default function Dashboard() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRepositories = repositories.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-50">
           
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)} />
            )}


            <div className={`fixed top-0 left-0 w-full bg-white z-50 flex flex-col md:hidden
                transform transition-transform duration-200 ease-in-out
                ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="p-4 border-b flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="Subtract_logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
                        <span className="font-semibold text-lg">CodeAnt AI</span>
                    </div>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                        <X className="w-6 h-6" />
                    </button>
                </div>


                <div className="p-4 border-b">
                    <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100">
                        <span>UtkarshDhairyaPanwar</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>

                <nav className="flex-1 overflow-y-auto">
                    <div className="p-4">
                        {navigationItemsMobile.map((item, index) => (
                            <button
                                key={index}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1
                                ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
            
            <div className="flex h-screen">
                
                <div className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r bg-white">
                    <div className="p-4 border-b">
                        <div className="flex items-center gap-2 mb-4">
                            <img src="Subtract_logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
                            <span className="font-semibold text-lg">CodeAnt AI</span>
                        </div>
                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-gray-100">
                            <span>UtkarshDhairyaPanwar</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                    </div>
                    <nav className="flex-1 flex flex-col overflow-y-auto p-4">
                        
                        
                        {navigationItems.map((item, index) => (
                            <button
                                key={index}
                                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1
                                ${item.active ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                <item.icon className="w-5 h-5" />
                                {item.label}
                            </button>
                        ))}


                        <div className="mt-auto">
                            {bottomNavigationItems.map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg mb-1
                                    text-gray-700 hover:bg-gray-100`}>
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </nav>
                </div>
                
                <div className="flex-1 md:ml-64">
                    <div className="h-screen flex flex-col">
                        {/* Mobile Header */}
                        <div className="flex items-center justify-between p-4 bg-white border-b md:hidden">
                            <div className="flex items-center gap-2">
                                <img src="Subtract_logo.svg" alt="CodeAnt AI" className="w-8 h-8" />
                                <span className="font-semibold text-lg">CodeAnt AI</span>
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2">
                                <Menu className="w-6 h-6" />
                            </button>
                        </div>
                       
                       
                        <div className="flex-1 overflow-y-auto p-4">
                            <div className="">
                               
                               
                                <div className="bg-white shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6 gap-4">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6">
                                        <div className='flex flex-col gap-2'>
                                            <h1 className="text-xl font-semibold text-[#1a1a1a]">Repositories</h1>
                                            <span className="text-sm text-gray-600">33 total repositories</span>
                                        </div>
                                        <div className="flex items-center gap-2 order-last md:order-none w-auto">
                                            <button
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border-2 shadow-sm text-blue-600 hover:bg-blue-50 rounded-lg text-sm sm:text-base"
                                            >
                                                <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                                                <span className="hidden xs:inline">Refresh All</span>
                                                <span className="xs:hidden">Refresh</span>
                                            </button>
                                            <button
                                                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 border-2 shadow-sm text-white bg-blue-600 hover:bg-blue-800 rounded-lg text-sm sm:text-base"
                                            >
                                              
                                              
                                                <span className=" md:inline">Add Repository</span>
                                            </button>
                                        </div>
                                    </div>
                                
                                
                                    <div className="relative w-full mt-4 md:mt-4 ">
                                        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Search Repositories"
                                            className=" pl-10 pr-4 py-2 border rounded-lg"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                    </div>
                                </div>

                             
                             
                                {filteredRepositories.map((repo, index) => (
                                    <div key={index} className="bg-white  shadow-[0_2px_8px_rgba(0,0,0,0.1)] p-6">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <h3 className="font-medium text-lg text-[#1a1a1a]">{repo.name}</h3>
                                                    <span className={`px-2 py-1 text-xs rounded-full
                                                    ${repo.status === 'Public' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`} >
                                                        {repo.status}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-[#666666]">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                                        {repo.language}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <FileText className="w-4 h-4" />
                                                        {repo.size}
                                                    </div>
                                                    <div>Updated {repo.updated}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

