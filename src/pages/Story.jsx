import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <span className="text-sm text-blue-900 tracking-widest uppercase mb-4 block">Our Philosophy</span>
                    <h1 className="text-4xl md:text-5xl font-serif mb-8">水のように、ありのままへ。</h1>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        // initial={{ opacity: 0, x: -20 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="h-[300px] md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden relative"
                    >
                        <img src="/real-hero-bg.jpg" alt="Nature" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div
                        // initial={{ opacity: 0, x: 20 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-6">原点への回帰</h2>
                        <p className="text-gray-600 leading-loose mb-6 text-sm md:text-base">
                            酵素風呂で働く者たちが、見てきた現場。
                            あらゆる疾患、不調の根元にあったもの、それが『ミネラル不足』だったことに気がついた。
                        </p>
                        <p className="text-gray-600 leading-loose text-sm md:text-base">
                            改善へのスイッチであり、土台であるミネラル。
                            すでに、エネルギーをなくしている身体に、鉱物のまま摂取してもイオン化(電子化:からだで使える状態)にできない。
                             だから、MINTERAは最初からイオン化し、身体がどんな状態でも使えるイオン化ミネラルとしてボトリング。
                            身体の土台が変わる瞬間を体感してほしいそんな思いからはじまりました。
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 md:flex-row-reverse">
                    <motion.div
                        // initial={{ opacity: 0, x: 20 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2 }}
                        className="h-[300px] md:h-[500px] bg-gray-200 rounded-2xl overflow-hidden relative md:order-2"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-blue-100 flex items-center justify-center text-gray-400">
                            <img src="/nature-water.png" alt="Process" className="w-full h-full object-cover opacity-80 scale-110" />
                        </div>
                    </motion.div>
                    <motion.div
                        // initial={{ opacity: 0, x: -20 }}
                        // whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: 0.2 }}
                        className="md:order-1"
                    >
                        <h2 className="text-2xl md:text-3xl font-serif mb-6">静寂をボトリングする</h2>
                        <p className="text-gray-600 leading-loose mb-6 text-sm md:text-base">
                            体内ですぐに使える、イオン化ミネラル<br></br>
                            なくてはならない、微量でありながら痛理作用のある希少ミネラル。
                            毛細血管まで瞬時に届く、高濃度酸素。参加した身体を環元する、マイナス電子の補給。
                        </p>
                        <p className="text-gray-600 leading-loose text-sm md:text-base">
                            体を構成する水のクラスター整列と妥協なき選択。<br></br>
                            MINTERAに溶ける透明な1滴が冷え、だるさ、取れない疲れ、身体のあらゆるサインに応えます。
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Story;
