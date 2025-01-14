import React from 'react';
import { ThemeToggle } from '@/components/theme-toggle';

const SettingsPage: React.FC = () => {
    return (
        <div>
            <h1 className="mb-4">Settings</h1>
            <ThemeToggle />
        </div>
    );
};

export default SettingsPage;