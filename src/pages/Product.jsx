import React from 'react';
import { motion } from 'framer-motion';
import { Check, Clock, Coffee, Moon, Sun } from 'lucide-react';

const Product = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-serif mb-6">MINTERA Essence</h1>
                    <p className="text-gray-500 tracking-widest text-sm">200ml / 2 Month Supply</p>
                </motion.div>

                {/* Product Detail */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.1 }}
                        className="bg-[#FAFAFA] rounded-3xl h-[500px] md:h-[700px] relative flex items-center justify-center overflow-hidden border border-gray-100"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50"></div>
                        <img src="/real-product-bottle.png" alt="Product Bottle" className="max-h-[80%] object-contain drop-shadow-2xl relative z-10" />
                    </motion.div>

                    <div>
                        <h2 className="text-2xl font-serif mb-8">Features</h2>
                        <ul className="space-y-6 mb-12">
                            {[
                                "海洋由来ミネラルを主成分に設計",
                                "独自の周波数加工による品質向上アプローチ",
                                "添加物に頼らないクリアな処方",
                                "日常の飲み物に合わせやすいクリアな使用感",
                                "ライフスタイルを選ばない軽量性と利便性"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    // initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center text-gray-600"
                                >
                                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-600">
                                        <Check size={14} />
                                    </div>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <h2 className="text-2xl font-serif mb-8">How to Use</h2>
                        <div className="grid grid-cols-1 gap-6">
                            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
                                <Sun className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Morning</h3>
                                    <p className="text-sm text-gray-500">目覚めの水に一push。身体を内側から起動させます。</p>
                                </div>
                            </div>
                            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
                                <Coffee className="w-6 h-6 text-brown-400 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Daytime</h3>
                                    <p className="text-sm text-gray-500">仕事中のお水に。集中力をサポート。</p>
                                </div>
                            </div>
                            <div className="flex items-start p-6 bg-gray-50 rounded-xl">
                                <Moon className="w-6 h-6 text-indigo-400 mr-4 mt-1" />
                                <div>
                                    <h3 className="font-medium mb-2">Night</h3>
                                    <p className="text-sm text-gray-500">就寝前の一杯に。深いリラックスを。</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
