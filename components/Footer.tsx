import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black border-t border-slate-800">
            <div className="max-w-screen-xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <div className="text-center text-sm text-slate-500">
                    <p>&copy; {currentYear} Heudjeu Mbelkeutchie Christian Steve. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;