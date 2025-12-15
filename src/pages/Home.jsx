import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { scrollY } = useScroll();
  const opacityHero = useTransform(scrollY, [0, 200], [1, 0]);

  const strengths = [
    {
      label: 'POINT 01',
      title: '制作のきっかけ',
      desc: '酵素風呂で働く者たちが、見てきた現場。 あらゆる疾患、不調の根元にあったもの、それが『ミネラル不足』だったことに気がついた。体内ですぐに使える、イオン化ミネラルなくてはならない、微量でありながら痛理作用のある希少ミネラル。 毛細血管まで瞬時に届く、高濃度酸素。参加した身体を環元する、マイナス電子の補給。',
      linkTo: '/story', // 詳細ページ（必要に応じて変更OK）
    },
    {
      label: 'POINT 02',
      title: '商品情報',
      desc: 'MINTERAは、高濃度の溶解型酸素と海洋由来ミネラル、そして電子・振動・水クラスターの研究に基づいた設計により、からだ本来のコンディションづくりをサポートします。  水に溶け込んだ酸素を効率よく届ける設計と、イオン化したミネラル、振動エネルギーの視点を組み合わせることで、自然の力を科学的アプローチで引き出すことを目指しています。',
      linkTo: '/product',
    },
    {
      label: 'POINT 03',
      title: '科学的根拠',
      desc: 'MINTERAは、海洋由来ミネラルと溶解型酸素を中心に、日々のコンディション維持を科学的視点からサポートします。酵素の働きを助けるミネラル、全身へ行き届く酸素、そして振動エネルギーの観点を組み合わせた新しいアプローチです。',
      linkTo: '/science',
    },
    {
      label: 'POINT 04',
      title: 'お客様の声',
      desc: 'MINTERAを日々取り入れた多くのお客様から、「朝の目覚めが変わった」「仕事中の集中が続く」「疲れにくくなった」など、体感に関する嬉しい声が届いています。感じ方には個人差がありますが、毎日のコンディションづくりをサポートする実感の一例です。',
      linkTo: '/faq',
    },
  ];

  return (
    <div className="w-full overflow-hidden">

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center border-b border-gray-200">
        <div className="absolute inset-0 -z-10">
          <img src="/real-hero-bg.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />
        </div>

        <motion.div style={{ opacity: opacityHero }} className="text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 mb-6 leading-snug"
          >
            <br className="md:hidden" />
            酵素風呂の現場から生まれた<br></br>
           イオン化ミネラルリキッド
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8"
          >
            {/* MINTERA は、たった7滴で「内側から整える」という、
            新しいミネラル美容のカタチです。 */}
          </motion.p>
        </motion.div>
      </section>

      {/* 強みセクション（4つ） */}
      <section className="py-24 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.25em] text-gray-600 uppercase mb-3">
              Strength
            </p>
          <h2 className="text-[1.85rem] md:text-[2.5rem] font-serif mb-4 whitespace-nowrap">
            MINTERA が選ばれる理由。
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              続けやすさ、純度、安心感。  
              毎日飲むものとしての、理想を追求しました。
            </p>
          </div>

          <div className="space-y-10">
            {strengths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-sm px-6 md:px-8 py-8 border border-gray-100"
              >
                <span className="inline-block text-[11px] tracking-[0.2em] text-gray-500 uppercase mb-2">
                  {item.label}
                </span>
                <h3 className="text-xl md:text-2xl font-serif mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                  {item.desc}
                </p>

                {/* 小さめの「詳しく見る」リンク */}
                <div className="text-right">
                  <Link
                    to={item.linkTo}
                    className="text-[11px] md:text-xs text-gray-500 underline underline-offset-4 hover:text-gray-800"
                  >
                    詳しく見る
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
      </section>

      {/* 商品 & 購入セクション（最後） */}
      <section className="py-32 bg-white text-center border-t border-gray-100">
        <div className="container mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-serif mb-6">
            次の一杯から、<br className="md:hidden" />
            内側のケアを始めませんか。
          </h2>
          

          {/* 価格欄 */}
          <div className="mb-10">
            <p className="text-xs tracking-[0.25em] text-gray-500 uppercase mb-2">
              Price
            </p>
            <p className="text-3xl md:text-4xl font-mono">
              ¥13,500
              <span className="text-xs md:text-sm text-gray-500 ml-2">
                （税込）
              </span>
            </p>
            {/* 実際の価格に合わせて変更してください */}
          </div>
          <Link
            to="/product"
            className="inline-flex items-center px-10 py-3 bg-black text-white rounded-full hover:bg-gray-900 transition-all tracking-widest text-xs md:text-sm"
          >
            MINTERAについて詳しく見る
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>

          <div className="max-w-xs mx-auto mb-14">
            <img
              src="/real-product-bottle.png"
              alt="MINTERA Essence ボトル"
              className="w-full drop-shadow-2xl"
            />
          </div>

          <a
            href="https://autumn-leaves-shop.square.site/product/mintera-/Z2UUJCMYYKR24ETEB533X64T?cs=true&cst=custom"
            target="_blank"
            rel="noopener noreferrer"
            className="px-16 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all tracking-widest text-xs md:text-sm inline-block"
          >
            購入はこちら
            
          </a>

        </div>
      </section>

    </div>
  );
};

export default Home;
