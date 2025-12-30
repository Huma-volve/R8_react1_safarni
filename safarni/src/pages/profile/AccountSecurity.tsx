import { ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { BackButton } from '@/components/ui/BackButton';


const AccountSecurity: React.FC = () => {
 const [biometricEnabled, setBiometricEnabled] = useState(false);
const [faceIdEnabled, setFaceIdEnabled] = useState(false);


  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <BackButton to="/profile" />

        <div className="rounded-2xl p-px bg-linear-to-b from-brand-purple to-brand-pink max-w-6xl   ">
        
          <div className="rounded-2xl bg-white p-6 space-y-4">
            <h1 className="text-2xl  text-center font-poppins mb-6">
              Account & Security
            </h1>

            {/* Biometric ID */}
            <div className="flex items-center justify-between py-3">
  <h3 className="text-base font-medium text-gray-900 font-poppins">
    Biometric ID
  </h3>

  <label className="relative inline-flex items-center cursor-pointer">
   <input
  type="checkbox"
  checked={biometricEnabled}
  onChange={(e) => setBiometricEnabled(e.target.checked)}
  className="sr-only peer"
/>

    <div className="w-11 h-6 rounded-full bg-gray-200 peer-checked:bg-blue-600 transition-colors duration-200 relative
      after:content-[''] after:absolute after:top-0.5 after:left-0.5
      after:w-5 after:h-5 after:bg-white after:rounded-full after:shadow-md
      after:transition-transform after:duration-200
      peer-checked:after:translate-x-5">
    </div>
  </label>
</div>


            {/* Face ID */}
            <div className="flex items-center justify-between py-3">
              <h3 className="text-base font-medium text-gray-900 font-poppins">Face ID</h3>
              <label className="relative inline-flex items-center cursor-pointer">
  <input
  type="checkbox"
  checked={faceIdEnabled}
  onChange={(e) => setFaceIdEnabled(e.target.checked)}
  className="sr-only peer"
/>


  <div
    className="
      w-11 h-6 rounded-full
      bg-gray-200
      peer-checked:bg-blue-600
      transition-colors duration-200
      relative

      after:content-['']
      after:absolute
      after:top-0.5 after:left-0.5
      after:w-5 after:h-5
      after:bg-white
      after:rounded-full
      after:shadow-md
      after:transition-transform
      after:duration-200
      peer-checked:after:translate-x-5
    "
  ></div>
</label>

            </div>

            {/* Device Management */}
            <button className="w-full flex items-center justify-between py-2 bg-[#FFFFFF] border border-transparent shadow rounded-xl ">
              <div className="text-left p-1 ">
                <h3 className="text-base font-medium text-gray-900 font-poppins">Device Management</h3>
                <p className="text-sm text-gray-500 mt-1 font-poppins">
                  Manage your account on the various devices you own.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
            </button>

            {/* Deactivate Account */}
            <button className="w-full flex items-center justify-between  py-2 bg-[#FFFFFF] border border-transparent shadow rounded-xl">
              <div className="text-left p-1">
                <h3 className="text-base font-medium text-gray-900 font-poppins">Deactivate Account</h3>
                <p className="text-sm text-gray-500 mt-1 font-poppins">
                  Temporarily deactivate your account. Easily reactivate when you're ready.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
            </button>

            {/* Delete Account */}
            <button className="w-full flex items-center justify-between py-2 bg-[#FFFFFF] border border-transparent shadow rounded-xl">
              <div className="text-left p-1">
                <h3 className="text-base font-medium  text-red-400 font-poppins">Delete Account</h3>
                <p className="text-sm text-gray-500 mt-1 font-poppins">
                  Permanently remove your account and data from Tripmate. Proceed with caution.
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
            </button>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default AccountSecurity;
