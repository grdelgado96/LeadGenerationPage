"use client";
import React, { createContext, useState, useContext } from "react";

/**
 * Provides a modal context and functionality for managing modals within the application.
 * @module ModalProvider
 */

const ModalContext = createContext();

/**
 * Custom hook to access the modal context.
 * @returns {Object} An object containing modal state and functions to show and hide modals.
 */

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({
    show: false,
    response: false,
  });

  function showModal(response) {
    setModal({
      show: true,
      response: response,
    });
  }

  function hideModal() {
    setModal({
      show: false,
      response: modal.response,
    });
  }

  return (
    <ModalContext.Provider value={{ modal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
}
