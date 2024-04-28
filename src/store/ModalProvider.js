import React, { createContext, useState, useContext } from 'react';

// Create the modal context
const ModalContext = createContext();

// Custom hook to access the modal context
export function useModal() {
  return useContext(ModalContext);
}

// Modal provider that wraps the application
export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    show: false,
    response: false,
  });

  // Function to show the modal with response
  const showModal = (response) => {
    setModal({
      show: true,
      response: response,
    });
  };

  // Function to hide the modal
  const hideModal = () => {
    setModal({
      show: false,
      response: modal.response,
    });
  };

  return (
    <ModalContext.Provider value={{ modal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
}
