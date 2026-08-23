// FILE: src/components/Navbar/AccountMenu.tsx

"use client";

import React from "react";
import { useAppSelector } from "@/src/store/hooks";
import Link from "next/link";
import Image from "next/image";
import Logout from "../Logout";

const AccountMenu = () => {
  const { currentUser, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );
  const [showMenu, setShowMenu] = React.useState(false);

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
        className="hover:bg-muted flex items-center gap-2 rounded-lg px-3 py-2 transition"
      >
        {/* AVATAR */}
        <Image
          src={currentUser.avatar || "./user.jpg"}
          alt={currentUser.name ?? "user-avatar"}
          width={32}
          height={32}
          className="rounded-full"
          unoptimized
        />
        {/* NAME (HIDDEN ON MOBILE) */}
        <span className="hidden text-sm font-medium sm:inline">
          {currentUser.name}
        </span>
      </button>

      {/* DROPDOWN MENU */}
      {showMenu && (
        <div className="bg-background border-border absolute right-0 z-50 mt-2 w-48 rounded-lg border py-2 shadow-lg">
          {/* USER INFO */}
          <div className="border-border border-b px-4 py-2">
            <p className="text-sm font-medium">{currentUser.name}</p>
            <p className="text-muted-foreground text-xs">{currentUser.email}</p>
          </div>

          {/* MENU ITEMS */}
          <Link
            href="/profile"
            className="hover:bg-muted block px-4 py-2 text-sm transition"
            onClick={() => setShowMenu(false)}
          >
            Profile
          </Link>

          <Link
            href="/dashboard"
            className="hover:bg-muted block px-4 py-2 text-sm transition"
            onClick={() => setShowMenu(false)}
          >
            Dashboard
          </Link>

          {/* LOGOUT BUTTON */}
          <Logout />
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
