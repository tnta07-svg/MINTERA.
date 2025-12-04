import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';
import { ArrowRight, Droplets, ShieldCheck, Sparkles } from 'lucide-react';

const Home = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="w-full overflow-hidden">
            {/* Hero Section */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background - Real Image with Elegant Overlay */}
                <div className="absolute inset-0 z-0">
                    <img src="/real-hero-bg.png" alt="MINTERA in Nature" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/10 to-white/60 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]"></div>
                </div>

                <motion.div
                    style={{ y: y1, opacity }}
                    className="relative z-10 text-center px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.1 }}
                        className="mb-8"
                    >
                        <span className="inline-block py-1 px-3 border border-gray-500/30 rounded-full text-xs tracking-[0.3em] text-gray-700 bg-white/30 backdrop-blur-md uppercase">
                            Mineral Supplement
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-serif text-gray-800 mb-8 leading-tight drop-shadow-sm"
                    >
                        一滴、<br className="md:hidden" />澄みわたる。
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1, delay: 0.3 }}
                        className="text-gray-700 mb-12 max-w-md mx-auto leading-loose font-light text-base md:text-lg drop-shadow-sm"
                    >
                        静寂を、飲む。<br />
                        からだの奥に、光を灯す。<br />
                        水と生きる、ミネラルの力。
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.1, delay: 0.4 }}
                    >
                        <Link
                            to="/product"
                            className="group inline-flex items-center px-10 py-4 bg-gray-900/90 text-white rounded-full hover:bg-gray-800 transition-all tracking-widest text-sm backdrop-blur-sm hover:scale-105 duration-300"
                        >
                            DISCOVER MINTERA <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Introduction Section */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1 }}
                            className="text-3xl md:text-4xl font-serif mb-12 leading-relaxed"
                        >
                            生命のリズムを静かに乱しています。
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.1, delay: 0.1 }}
                            className="text-gray-600 leading-loose mb-16"
                        >
                            MINTERA は、ミネラルをイオン化することで、からだが利用しやすい“吸収しやすい形”へと整えています。
                            イオン化されたミネラルは、水と自然に馴染み、すばやく分散。
                            そのままの状態よりも、からだへスムーズに届くことを目指して設計されています。
                        </motion.p>
                        <Link to="/story" className="text-gray-900 border-b border-gray-900 pb-1 hover:opacity-70 transition-opacity tracking-widest text-sm">
                            READ OUR STORY
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-32 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <GlassCard delay={0.1} className="text-center hover:shadow-xl transition-shadow duration-500">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-900">
                                <Droplets size={24} />
                            </div>
                            <h3 className="text-xl font-serif mb-4">たった7滴で整う</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                高濃度ミネラル配合。<br />
                                毎日の飲み物に混ぜるだけで、<br />
                                手軽にミネラルチャージ。
                            </p>
                        </GlassCard>
                        <GlassCard delay={0.3} className="text-center hover:shadow-xl transition-shadow duration-500">
                            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-900">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="text-xl font-serif mb-4">国内生産・無添加</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                厳選された水源と徹底した管理。<br />
                                保存料・着色料は一切不使用。<br />
                                安心してお飲みいただけます。
                            </p>
                        </GlassCard>
                        <GlassCard delay={0.5} className="text-center hover:shadow-xl transition-shadow duration-500">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-900">
                                <Sparkles size={24} />
                            </div>
                            <h3 className="text-xl font-serif mb-4">高い吸収率</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                イオン化されたミネラルが、<br />
                                身体の隅々まで素早く浸透。<br />
                                効率よく吸収されます。
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Product Teaser */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 h-[700px] bg-[#FAFAFA] rounded-2xl overflow-hidden relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-transparent opacity-50"></div>
                            <img src="/real-product-bottle.png" alt="Product" className="max-h-[90%] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-sm text-blue-900 tracking-widest uppercase mb-4 block">The Product</span>
                            <h2 className="text-5xl font-serif mb-8">MINTERA Essence</h2>
                            <p className="text-gray-600 leading-loose mb-8 text-lg">
                                毎日の水分補給を、美容と健康の時間へ。<br />
                                
                            </p>
                            <ul className="space-y-6 mb-12 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                                    海洋由来ミネラルをバランスよく含有
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                                    毎日のケアに長く使える容量設計
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-4"></span>
                                    持ち歩けるシンプル＆コンパクト設計
                                </li>
                            </ul>
                            <Link
                                to="https://autumn-leaves-shop.square.site/product/mintera-/Z2UUJCMYYKR24ETEB533X64T?cs=true&cst=custom"
                                className="px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all tracking-widest text-sm inline-block shadow-lg hover:shadow-xl"
                            >
                                購入はこちら
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
