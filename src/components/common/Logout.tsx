import { logout } from "@/src/services/oprations/auth/logout-api";
import { useAppDispatch } from "@/src/store/hooks";
import { logoutSuccess, setLoading } from "@/src/store/slices/auth.slice";

const Logout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = async () => {
    try {
      dispatch(setLoading(true));
      await logout(dispatch);
    } finally {
      dispatch(setLoading(false));
      dispatch(logoutSuccess());
    }
  };
  return (
    <button
      onClick={handleLogout}
      className="hover:bg-muted w-full px-4 py-2 text-left text-sm text-red-500 transition"
    >
      Logout
    </button>
  );
};

export default Logout;
