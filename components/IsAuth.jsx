import { authState } from "@/utils/Auth";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const isAuthenticated = authState();
        console.log(isAuthenticated);

        if (!isAuthenticated) {
          router.push("/login");
        }

        const initializeAxios = () => {
          const token = localStorage.getItem("accessToken");
          if (token) {
            axios.defaults.headers.common["Authorization"] = token;
          }
        };

        initializeAxios();
      };

      checkAuth();
    }, []);

    return <Component {...props} />;
  };
}
