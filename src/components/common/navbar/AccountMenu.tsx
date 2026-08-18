// FILE: src/components/Navbar/AccountMenu.tsx

"use client";

import React from "react";
import { useAppSelector, useAppDispatch } from "@/src/store/hooks";
import { logoutSuccess } from "@/src/store/slices/auth.slice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const AccountMenu = () => {
  const { currentUser, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showMenu, setShowMenu] = React.useState(false);

  const handleLogout = async () => {
    try {
      // CALL LOGOUT API
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      // DISPATCH LOGOUT
      dispatch(logoutSuccess());

      // SHOW SUCCESS MESSAGE
      toast.success("Logged out successfully!");

      // REDIRECT
      router.push("/");
      setShowMenu(false);
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  // NOT AUTHENTICATED
  if (!isAuthenticated || !currentUser) {
    return null;
  }

  // AUTHENTICATED
  return (
    <div className="relative">
      {/* USER AVATAR BUTTON */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition"
      >
        {/* AVATAR */}
        <Image
          src={currentUser.avatar || "./user.jpg"}
          alt={currentUser.name ?? "user-avatar"}
          width={32}
          height={32}
          className=" rounded-full"
        />
        {/* NAME (HIDDEN ON MOBILE) */}
        <span className="hidden sm:inline text-sm font-medium">
          {currentUser.name}
        </span>
      </button>

      {/* DROPDOWN MENU */}
      {showMenu && (
        <div className="absolute right-0 mt-2 w-48 bg-background border border-border rounded-lg shadow-lg py-2 z-50">
          {/* USER INFO */}
          <div className="px-4 py-2 border-b border-border">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground">{currentUser.email}</p>
          </div>

          {/* MENU ITEMS */}
          <Link
            href="/profile"
            className="block px-4 py-2 text-sm hover:bg-muted transition"
            onClick={() => setShowMenu(false)}
          >
            Profile
          </Link>

          <Link
            href="/dashboard"
            className="block px-4 py-2 text-sm hover:bg-muted transition"
            onClick={() => setShowMenu(false)}
          >
            Dashboard
          </Link>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-muted transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
