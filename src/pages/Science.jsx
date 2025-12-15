// src/pages/Science.jsx
import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';
import { Activity, Shield, Zap, Award, Microscope, FileText } from 'lucide-react';

const Science = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-20"
        >
          <span className="text-sm text-blue-900 tracking-widest uppercase mb-4 block">
            Evidence
          </span>
          <h1 className="text-4xl md:text-5xl font-serif mb-8">
            科学が証明する、<br />自然の力。
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600 leading-loose">
            MINTERAは、感覚だけでなく、確かなエビデンスに基づいた製品開発を行っています。
            <br />
            自然の恵みを、科学の力で最大限に引き出す。
            <br />
            それが私たちの哲学です。
          </p>
        </motion.div>


        {/* ② TERAQOL技術 & 生体利用率 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24 items-start">
          <GlassCard>
            <h3 className="text-xl font-serif mb-4 flex items-center">
              <Microscope className="mr-3 text-purple-500" size={20} />
              イオン化技術のメカニズム（TERAQOL®加工）
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              TERAQOL®技術は、テラヘルツ領域の振動エネルギーを利用し、液体中の電子状態に働きかける独自の周波数加工技術です。
              物質は本来、原子・電子レベルで固有の振動を有しており、その振動が乱れることで物性が不安定になる場合があります。
              本技術では、特定の周波数情報を水系原料に付与することで、電子振動を整え、電子活性および分子レベルの共振性を高めることを目指しています。
              <br />
              <br />
              このプロセスにより、ミネラル成分は水中でより安定したイオン状態を保持しやすい環境へと整えられ、
              体内での吸収性やエネルギー伝達の効率向上に寄与するとされています。
              また、周波数加工によって得られた物性変化が長期間持続する点は、TERAQOL®技術の大きな特徴として紹介されています。
            </p>
          </GlassCard>

          <GlassCard delay={0.1}>
            <h3 className="text-xl font-serif mb-4 flex items-center">
              <Activity className="mr-3 text-green-500" size={20} />
              科学的・生理学的な観点から
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              ・吸収率：ミネラルがイオン化された状態で存在し、細胞への浸透性が高い<br></br>
              ・生体親和性：血液中の電解質バランスに類似し、自然な形で利用される
              こうした要素が重なり合うことで、少量でも効率的なミネラル補給が期待できます。
            </p>
          </GlassCard>

          <GlassCard delay={0.1}>
            <h3 className="text-xl font-serif mb-4 flex items-center">
              <Activity className="mr-3 text-green-500" size={20} />
              生体利用率 (Bioavailability)
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              TERAQOL®技術により電子状態が調整されたミネラルは、水中でのイオン安定性が高まり、
              溶解度および吸収効率に寄与すると考えられます。一般に、イオン化ミネラルは消化管上皮での輸送過程に適した形態であり、
              生体利用率の向上に関連することが知られています。
              <br />
              <br />
              さらに、周波数加工に伴う分子振動の整流化は、水分子クラスターおよびミネラルとの相互作用に影響を与え、
              吸収・分配過程がより効率的に進行し得る環境を形成すると推察されます。
              これらの要素が複合的に作用することで、ミネラルの利用効率が高まりうる点が、本技術の特徴として位置づけられます。
            </p>
          </GlassCard>
        </div>

        {/* ③ 主要成分の科学的根拠 */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            className="text-3xl font-serif text-center mb-12"
          >
            主要成分の科学的根拠
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <GlassCard delay={0.1}>
              <div className="text-4xl font-serif text-gray-200 absolute top-4 right-4">
                Mg
              </div>
              <h3 className="text-xl font-serif mb-4 text-blue-900">
                ミネラルが支える健やかな代謝バランス
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  本製品に使用している海洋由来ミネラルは、体内の酵素反応やエネルギー代謝に欠かせない成分です。
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  なかでもマグネシウムは300種類以上の酵素の働きを助け、毎日のコンディションづくりを内側からサポートします。
                  自然の恵みをそのまま活かしたミネラル補給は、現代人の乱れがちなバランスを整えるうえでも大切な役割を担います。
                </li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.2}>
              <h3 className="text-xl font-serif mb-4 text-blue-900">
                溶解型酸素によるすみずみまで届くクリアなエネルギー
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  水に溶け込んだ酸素は、消化管から体液へと浸透し、細胞へと届けられます。
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  本製品では、独自の技術により酸素分子が水中にとどまりやすい状態を保ち、
                  からだのすみずみまでクリアな酸素エネルギーを届けることを目指しています。
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  日常の疲れやパフォーマンス維持をサポートする、次世代の“飲む酸素”としてご活用いただけます。
                </li>
              </ul>
            </GlassCard>

            <GlassCard delay={0.3}>
              <h3 className="text-xl font-serif mb-4 text-blue-900">
                振動エネルギーの観点から見た新しいアプローチ
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  すべての物質は固有の振動を持ち、水はその振動を伝える優れた媒体とされています。
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  本製品は、特定の振動エネルギーを取り込ませるアプローチにより、
                  心身の調和をサポートする新しい可能性を追求しています。
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-400">•</span>
                  振動や周波数が生体に影響を与えるという物理的原理に基づき、
                  からだ本来のリズムを整える手助けを目指しています。
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>


        {/* ④ 品質と安全性 */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">
                  品質と安全性へのこだわり
                </h2>
                <p className="text-gray-600 leading-loose mb-6">
                  毎日取り入れるものだからこそ、原料と工程に一切の妥協をしません。
                  海洋由来ミネラルの選定から独自周波数加工、仕上げの充填まで、
                  厳しい基準のもと丁寧に品質を守り続けています。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Shield className="text-green-500 mr-3" />
                    <span className="text-sm font-medium">
                      国際特許申請中の先進技術
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-green-500 mr-3" />
                    <span className="text-sm font-medium">
                      厳選素材・ナチュラル原料の採用
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Shield className="text-green-500 mr-3" />
                    <span className="text-sm font-medium">
                      独自の振動／波動加工・定着技術
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-serif text-xl mb-4 flex items-center">
                  <Award className="mr-2 text-yellow-500" />
                  安心して続けるための情報開示
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  原料の由来や製造工程、社内外での検証結果など、
                  お客様が安心して選択できるよう、できる限りの情報開示に努めています。
                  疑問点があれば、いつでもお問い合わせいただける体制を整えています。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ⑥ モニター調査結果（グラフ・一番下） */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-serif text-center mb-12"
          >
            モニター調査結果
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard>
              <div className="flex items-start mb-4">
                <FileText className="text-gray-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    睡眠の質に関する主観的評価
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    対象: 30–50代男女 100名 / 期間: 4週間
                  </p>
                </div>
              </div>
              <div className="flex items-end justify-center h-48 space-x-8">
                <div className="text-center w-1/3">
                  <div className="text-sm text-gray-500 mb-2">開始前</div>
                  <div className="h-24 bg-gray-200 rounded-t-lg w-full mx-auto relative">
                    <span className="absolute bottom-2 left-0 right-0 text-center text-xs">
                      Baseline
                    </span>
                  </div>
                </div>
                <div className="text-center w-1/3">
                  <div className="text-sm text-blue-600 font-bold mb-2">
                    +42%
                  </div>
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: '8rem' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="bg-blue-400 rounded-t-lg w-full mx-auto relative"
                  >
                    <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-white">
                      After
                    </span>
                  </motion.div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600 text-center">
                「朝の目覚めが良くなった」「深く眠れた気がする」と回答した割合が増加しました。
                体感には個人差がありますが、継続摂取による変化の一例として示しています。
              </p>
            </GlassCard>

            <GlassCard delay={0.2}>
              <div className="flex items-start mb-4">
                <FileText className="text-gray-400 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-2">
                    日中の集中力・疲労感
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">
                    対象: デスクワーカー 50名 / 期間: 2週間
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>集中力の持続</span>
                    <span className="font-bold text-blue-600">
                      88%が実感
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '88%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.4 }}
                      className="h-full bg-blue-400 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>夕方の疲労軽減</span>
                    <span className="font-bold text-blue-600">
                      92%が実感
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '92%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.6 }}
                      className="h-full bg-blue-400 rounded-full"
                    />
                  </div>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                「いつもより仕事がはかどった」「夕方のだるさが軽くなった」といった主観的な変化に関するアンケート結果です。
                医薬品ではないため効果効能を保証するものではありませんが、継続使用時の傾向として参考値を掲載しています。
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Science;
