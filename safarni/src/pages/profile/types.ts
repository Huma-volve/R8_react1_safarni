// Types for ProfileMain 
export interface User {
  name: string;
  email: string;
  avatar: string;
  location?: string;
  phone?: string;
}

export interface MenuItem {
  id: string;
  title: string;
 icon: string;
   path: string;
}


// Form values for Personal Info page
export interface PersonalInfoFormValues {
  name: string;
  email: string;
  location: string;
  phone: string;
}
