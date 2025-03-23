import React, { createContext, useContext, useState } from "react";

// Create Context
const DocumentContext = createContext();

// Provider Component
export const DocumentProvider = ({ children }) => {
    const [documentData, setDocumentData] = useState(null);

    return (
        <DocumentContext.Provider value={{ documentData, setDocumentData }}>
            {children}
        </DocumentContext.Provider>
    );
};

// Custom Hook to use context
export const useDocument = () => useContext(DocumentContext);
