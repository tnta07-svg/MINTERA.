import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Purchase = () => {
    const [plan, setPlan] = useState('subscription'); // 'subscription' or 'onetime'

    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">

                    {/* Product Image Section */}
                    <div className="lg:w-1/2">
                        <div className="bg-[#FAFAFA] rounded-3xl p-12 h-[600px] flex items-center justify-center shadow-sm border border-gray-100 sticky top-32 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-gray-50"></div>
                            <img src="/real-product-bottle.png" alt="MINTERA" className="max-h-[90%] object-contain drop-shadow-2xl relative z-10" />
                        </div>
                    </div>

                    {/* Purchase Form Section */}
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <h1 className="text-4xl font-serif mb-2">MINTERA Essence</h1>
                            <p className="text-gray-500 mb-8">200ml / 2 Month Supply</p>

                            <div className="space-y-4 mb-8">
                                {/* Subscription Option */}
                               

                                {/* One-time Option */}
                                <div
                                    className={`border rounded-xl p-6 cursor-pointer transition-all ${plan === 'onetime'
                                        ? 'border-blue-400 bg-blue-50/50 ring-1 ring-blue-400'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    onClick={() => setPlan('onetime')}
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center">
                                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${plan === 'onetime' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                                                }`}>
                                                {plan === 'onetime' && <Check size={12} className="text-white" />}
                                            </div>
                                            <span className="font-medium">MINTERA (200ml)</span>
                                        </div>
                                        <span className="font-bold text-lg">¥13.500</span>
                                    </div>
                                </div>
                            </div>

                            <a
  href="https://autumn-leaves-shop.square.site/product/mintera-/Z2UUJCMYYKR24ETEB533X64T?cs=true&cst=custom"  // ←ここに外部URLを入れる
  target="_blank"
  rel="noopener noreferrer"
  className="w-full block bg-gray-900 text-white py-4 rounded-full text-sm tracking-widest hover:bg-gray-800 transition-colors mb-6 shadow-lg hover:shadow-xl text-center"
>
  購入はこちら
</a>

                            {/* <p className="text-xs text-gray-400 text-center leading-relaxed">
                                ※ 定期コースは最低購入回数の縛りはございません。<br />
                                ※ 次回お届け予定日の7日前までなら、マイページからいつでも解約可能です。
                            </p> */}

                            <div className="mt-12 pt-12 border-t border-gray-200">
                                <h3 className="font-serif text-lg mb-4">Description</h3>
                                <p className="text-sm text-gray-600 leading-loose mb-6">
                                    大自然の恵みを、そのまま一滴に。MINTERA Essenceは、現代人に不足しがちなミネラルを、イオン化された状態で高濃度に配合しました。毎日の飲み物に数滴混ぜるだけで、身体の内側からバランスを整えます。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;
