import type { PersonalInfoFormValues } from './types';
import FormField from '@/component/cards/FormField';
import { User, Mail, MapPin, Phone } from 'lucide-react';
import { BackButton } from '@/components/ui/BackButton';


const PersonalInfo: React.FC = () => {

  const data: PersonalInfoFormValues = {
    name: 'kneeDue',
    email: 'kneeDue@untitledui.com',
    location: '200-250 Clipper St San Francisco',
    phone: '123-456-7890',
  };

  return (
    <div className="min-h-screen  p-6">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <BackButton to="/profile" />

        <div className="rounded-2xl p-px bg-linear-to-b from-brand-purple to-brand-pink">
          <div className="rounded-2xl bg-white p-9">
            <h2 className="font-poppins text-[26px] text-center "
  
>
  Personal Information
</h2>

            <div className="space-y-6 ">
              <FormField
                label="Name"
                name="name"
                type="text"
                value={data.name}
                icon={<User className="w-5 h-5 text-gray-400" />}
              />

              <FormField
                label="Email"
                name="email"
                type="email"
                value={data.email}
                icon={<Mail className="w-5 h-5 text-gray-400" />}
              />

              <FormField
                label="Location"
                name="location"
                type="text"
                value={data.location}
                icon={<MapPin className="w-5 h-5 text-gray-400" />}
              />

              <FormField
                label="Phone Number"
                name="phone"
                type="tel"
                value={data.phone}
                icon={<Phone className="w-5 h-5 text-gray-400" />}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PersonalInfo;
