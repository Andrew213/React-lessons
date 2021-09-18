import React from 'react';

type CardMenuProps = {
    className: string;
    onChange: (value: string) => void;
};

const CardMenu: React.FC<CardMenuProps> = ({ onChange, className }) => {
    const menuList = [
        { id: 'edit', name: 'Edit' },
        { id: 'save', name: 'Save' },
        { id: 'multiselect', name: 'multiSelect' },
    ];
};
