import { Link } from 'react-router-dom';
import { User, Calendar, Globe, Lock, LogOut, ChevronRight, Camera } from 'lucide-react';
import { useState } from 'react';
import type { User as UserType, MenuItem } from './types';

const ProfileMain: React.FC = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const user: UserType = {
    name: 'Knee Due',
    email: 'kneedue@gmail.com',
    avatar: '/src/assets/Avatar.png' 
  };

  const menuItems: MenuItem[] = [
    { id: '1', title: 'Personal Info', icon: 'user', path: 'personal-info' },
    { id: '2', title: 'My Booking', icon: 'calendar', path: 'my-booking' },
    { id: '4', title: 'Account & Security', icon: 'lock', path: 'account-security' }
  ];

  const handleLogoutClick = (): void => {
    setShowLogoutModal(true);
  };

  const handleConfirmLogout = (): void => {
    console.log('Logging out');
    setShowLogoutModal(false);
  };

  const handleCancelLogout = (): void => {
    setShowLogoutModal(false);
  };

  const getIcon = (iconName: MenuItem['icon']) => {
    const icons: { [key: string]: React.ReactNode } = {
      user: <User className="w-5 h-5" />,
      calendar: <Calendar className="w-5 h-5" />,
      globe: <Globe className="w-5 h-5" />,
      lock: <Lock className="w-5 h-5" />
    };
    return icons[iconName];
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Header البروفايل */}
        <div className="rounded-2xl p-px bg-linear-to-b from-[#687ad3] to-[#da437a]">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="relative rounded-full p-px bg-linear-to-b from-[#687ad3] to-[#da437a]">
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <button 
                  className="absolute top-1/2 -right-3 -translate-y-1/2 bg-[#FFFFFFB8] rounded-full p-0.5 shadow-md border border-gray-200 transition-colors"
                >
                  <Camera className="w-4 h-4 text-[#687ad3]" />
                </button>
              </div>

              <div>
                <h2 className="text-xl font-sans font-semibold text-[#4B5563] pb-2">{user.name}</h2>
                <p className="text-[16px] font-medium text-[#6B6E80]">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        {/* القائمة */}
        <div className="rounded-2xl p-px bg-linear-to-b from-[#687ad3] to-[#da437a]">
          <div className="bg-white rounded-2xl shadow-sm p-6 space-y-4">
            {menuItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.path} 
                className="flex items-center justify-between p-4 mb-3 border border-gray-100 rounded-lg 
                shadow bg-white font-normal font-sans"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#374151]">
                    {getIcon(item.icon)}
                  </div>
                  <span className="text-[#111928] font-medium">{item.title}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-[#374151]" />
              </Link>
            ))}

            <button 
              onClick={handleLogoutClick}
              className="w-full flex items-center gap-3 p-4 text-red-600 border border-gray-100 rounded-lg 
                shadow bg-white font-normal"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium font-sans">Logout</span>
            </button>
          </div>
        </div>
      </div>

    {/* Logout Modal */}
{showLogoutModal && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-out">
    <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8
                    transform transition-all duration-300 ease-out scale-95 opacity-0
                    animate-modal-in">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center mb-4 sm:mb-6">
        Do You Want To Register The Exit Already ?
      </h3>

      <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
        <button
          onClick={handleConfirmLogout}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 sm:px-6 rounded-lg transition-colors"
        >
          Yes, Log Me Out
        </button>

        <button
          onClick={handleCancelLogout}
          className="flex-1 bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-4 sm:px-6 rounded-lg border border-gray-300 transition-colors"
        >
          No
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default ProfileMain;