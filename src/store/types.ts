// USER - INTERFACE
export interface USER {
  id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
}

// AUTH STATE - INTERFACE
export interface AUTH {
  isLoading: boolean;
  isAuthenticated: boolean;
  currentUser: USER | null;
}
