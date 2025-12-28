import { Routes, Route } from 'react-router-dom';
import PersonalInfo from './PersonalInfo';
import MyBooking from './MyBooking';
import AppLanguage from './AppLanguage';
import AccountSecurity from './AccountSecurity';
import ProfileMain from './ProfileMain';

const Profile: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ProfileMain />} />
      <Route path="personal-info" element={<PersonalInfo />} />
      <Route path="my-booking" element={<MyBooking />} />
      <Route path="app-language" element={<AppLanguage />} />
      <Route path="account-security" element={<AccountSecurity />} />
    </Routes>
  );
};

export default Profile;
