import { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";

const GoogleCallback = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;

    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const userStr = params.get("user");

    if (token) {
      processedRef.current = true;
      let userData = {
        token,
        name: "User",
        email: "",
        avatar: undefined,
      };

      if (userStr) {
        try {
          const parsed = JSON.parse(userStr);
          // Handle various possible backend response structures
          const userObj = parsed.user || parsed;
          userData = {
            ...userData,
            name: userObj.name || "User",
            email: userObj.email || "",
            avatar: userObj.avatar || userObj.profile_image || userObj.picture,
          };
        } catch (e) {
          console.error("Failed to parse user data from Google callback", e);
        }
      }

      // Save to AuthContext
      login(userData);
      toast.success(`Welcome ${userData.name}!`);

      // Redirect to home
      navigate("/", { replace: true });
    } else {
      toast.error("Google authentication failed. No token received.");
      navigate("/login", { replace: true });
    }
  }, [location, login, navigate]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Authenticating...
        </h2>
        <p className="text-gray-600">
          Please wait while we log you in with Google.
        </p>
      </div>
    </div>
  );
};

export default GoogleCallback;
