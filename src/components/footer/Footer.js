import React from 'react';
import './footer.scss';

export const Footer = () => {
    return (
        <footer className="footer bg-secondary">
            <div className="container">
                <div className="row align-items-center">
                    <span>Copyright &copy; {new Date().getFullYear()} ShahNur Software</span>
                </div>
            </div>
        </footer>
    );
};