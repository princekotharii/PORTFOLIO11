// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Set token in localStorage
export const setToken = (token) => {
  localStorage. setItem('token', token);
};

// Remove token from localStorage
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Check if user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  try {
    // Decode token to check expiration (optional)
    const payload = JSON.parse(atob(token. split('.')[1]));
    const isExpired = payload.exp * 1000 < Date.now();
    
    if (isExpired) {
      removeToken();
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error checking authentication:', error);
    removeToken();
    return false;
  }
};