// import { useEffect, useState } from 'react';

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     const savedTheme = localStorage.getItem('theme') || 'dark';
    
//     const root = window.document.documentElement;
//     root.classList.remove('light', 'dark');
//     root.classList.add(savedTheme);
    
//     return savedTheme;
//   });

//   useEffect(() => {
//     const root = window.document.documentElement;
    
//     root.classList.remove('light', 'dark');
//     root.classList.add(theme);
    
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
//   };

//   return { theme, toggleTheme };
// }