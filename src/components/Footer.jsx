import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-24">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-serif mb-8 tracking-widest">MINTERA</h2>
                        <p className="text-gray-400 leading-loose mb-8 max-w-md">
                            自然の恵みを、科学の力で。<br />
                            MINTERAは、あなたの本来の輝きを引き出す<br />
                            プレミアム・ミネラルリキッドです。
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold tracking-widest mb-8 text-gray-500 uppercase">Links</h3>
                        <ul className="space-y-6">
                            <li><Link to="/story" className="text-gray-300 hover:text-white transition-colors">Story</Link></li>
                            <li><Link to="/product" className="text-gray-300 hover:text-white transition-colors">Product</Link></li>
                            <li><Link to="/science" className="text-gray-300 hover:text-white transition-colors">Science</Link></li>
                            <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link to="/Purchase" className="text-gray-300 hover:text-white transition-colors">購入はこちら</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold tracking-widest mb-8 text-gray-500 uppercase">Contact</h3>
                        <ul className="space-y-6 text-gray-300">
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2024 MINTERA. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
