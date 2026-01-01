import type { PersonalInfoFormValues } from '../pages/profile/types';

interface Props {
  label: string;
  name: keyof PersonalInfoFormValues;
  type: string;
  value?: string; 
  icon?: React.ReactNode;
}

const FormField: React.FC<Props> = ({
  label,
  value,
  icon,
}) => {
  return (
    <div className="relative">
      <label className="mb-1 block text-sm font-medium text-[#373737] font-montserrat"
     >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}

        <input
          type="text"
          value={value}
          readOnly
          disabled
          className="w-full rounded-lg border border-gray-200 px-10 py-2.5 text-sm bg-white cursor-default text-gray-500 font-poppins"
        />
      </div>
    </div>
  );
};

export default FormField;
