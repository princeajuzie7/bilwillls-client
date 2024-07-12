import React from "react";

export interface CustomDialogTypes { 
    isOpen: boolean;
    setIsOpen: (props: boolean) => void;
    children: React.ReactNode;
    Tittle : string
}