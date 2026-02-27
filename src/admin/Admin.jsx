import React from 'react'
import Dashboard from './component/dashboard/Dashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Sidebar from './component/sidebar/Sidebar';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

const Admin = () => {
  const location = useLocation();
  return (
   <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 bg-gray-50 overflow-hidden">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="*" element={<PageTransition><Dashboard /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}

export default Admin