// src/pages/Product.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Coffee, Moon, Sun, Activity, Shield, Zap } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Product = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4">
            MINTERA Essence
          </h1>
          <p className="text-gray-500 tracking-widest text-sm">
            200ml / 2 Month Supply
          </p>
        </motion.div>

        {/* 内容セクション（先に配置） */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-3xl font-serif text-center mb-10"
          >
            内容
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard>
              <div className="flex items-center mb-4">
                <Activity className="text-green-500 mr-3" />
                <h3 className="text-lg font-serif">高濃度酸素</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                水と一緒に摂取することで酸素を胃と腸から体液中に浸透させ、細胞に効率よく供給。
                酸素をミネラルでコーティングしているため、空気に触れても気化せず、酸素分子を100%無駄なく体内に送り込めます。
                溶解型酸素は分子が小さく、未端の細胞まで届きやすいのが特徴です。
                酸性の胃酸に反応して酸素が発生し、胃腸から体液中に浸透。
                <br />
                瞬時に全身の細胞へ酸素を供給できるため、慢性疲労・お肌の代謝・眼精疲労・脂肪燃焼・無呼吸症候群・スポーツ・登山・飲酒・長距離移動など、幅広くサポートします。
              </p>
            </GlassCard>

            <GlassCard delay={0.1}>
              <div className="flex items-center mb-4">
                <Zap className="text-blue-500 mr-3" />
                <h3 className="text-lg font-serif">ミネラル　イオン化原料</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                海水は地球上でもっとも多様な無機物元素を含み、主成分のほか、微量、超微量元素を100種類以上含みます。
                <br />
                成分多様性　約100種類のミネラルを含有
                <br />
                抽出方法　　蒸発・濃縮など物理的手法が主
                <br />
               成分表<br></br>
                マグネシウム　:3700mg/100ml<br></br>
                カリウム　　　:1300mg/100ml<br></br>
                ナトリウム　　:2700mg/100ml<br></br>
                海洋バランスで100種類以上を含む
              </p>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex items-center mb-4">
                <Shield className="text-emerald-500 mr-3" />
                <h3 className="text-lg font-serif">電子、振動、水のクラスター</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                科学的には、水分子は電子を含む原子が結合し常に振動する構造を持っています。テラヘルツ研究では、この振動が変化することで水分子同士の集まり＝水クラスターの大きさや配置が変わり、電子状態にも影響が及ぶことが報告されています。
                これにより、水の浸透性や反応性が変化し、生体内の水環境に作用し得る可能性が示唆されています。
              </p>
            </GlassCard>
          </div>
        </div>

        {/* 商品セクション（ページ下部・おしゃれめカード構成） */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="bg-[#FAFAFA] rounded-3xl border border-gray-100 shadow-sm px-6 py-10 md:px-10 md:py-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* テキスト側 */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Features</h2>
              <ul className="space-y-5 mb-10">
                {[
                  '海洋由来ミネラルを主成分に設計',
                  '独自の周波数加工による品質向上アプローチ',
                  '添加物に頼らないクリアな処方',
                  '日常の飲み物に合わせやすいクリアな使用感',
                  'ライフスタイルを選ばない軽量性と利便性',
                ].map((item, i) => (
                  <motion.li
                    key={i}
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

              <h2 className="text-2xl font-serif mb-6">How to Use</h2>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start p-4 bg-white rounded-xl border border-gray-100">
                  <Sun className="w-6 h-6 text-orange-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Morning</h3>
                    <p className="text-sm text-gray-500">
                      目覚めの水に1push。身体を内側から起動させます。
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-xl border border-gray-100">
                  <Coffee className="w-6 h-6 text-brown-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Daytime</h3>
                    <p className="text-sm text-gray-500">
                      仕事中のお水に。集中力をサポート。
                    </p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-xl border border-gray-100">
                  <Moon className="w-6 h-6 text-indigo-400 mr-4 mt-1" />
                  <div>
                    <h3 className="font-medium mb-1">Night</h3>
                    <p className="text-sm text-gray-500">
                      就寝前の一杯に。深いリラックスを。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ボトル画像側 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="relative h-[420px] md:h-[520px] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-blue-50/60 rounded-3xl" />
              <div className="absolute -inset-6 md:-inset-8 border border-white/60 rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.08)]" />
              <img
                src="/real-product-bottle.png"
                alt="Product Bottle"
                className="max-h-[80%] object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Product;
