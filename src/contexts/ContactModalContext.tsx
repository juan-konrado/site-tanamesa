import React, { createContext, useContext, useState } from 'react';

interface ContactModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const ContactModalContext = createContext<ContactModalContextType>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
});

export const useContactModal = () => useContext(ContactModalContext);

export const ContactModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ContactModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </ContactModalContext.Provider>
    );
};