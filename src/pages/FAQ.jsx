// src/pages/FAQ.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "40代・男性",
    title: "朝のスッキリ感が全然違う！",
    body:
      "飲んで2～3分後、脳がスッと軽くなるような感覚がありました。仕事中の集中力が続くようになり、気づけば味覚まで正常に戻ってきたと感じました。"
  },
  {
    name: "30代・女性",
    title: "味の邪魔をしないから続けられる",
    body:
      "レモン水やお茶にサッと入れるだけ。クセが少なく毎日自然と続けられるのが嬉しいです。肌の乾燥が気になりづらくなりました。"
  },
  {
    name: "30代・男性",
    title: "日々のコンディションが安定",
    body:
      "朝と夜の飲み物に少し足すだけ。生活リズムを変えずに取り入れられて、身体全体が整ってくる感覚があります。"
  },
  {
    name: "妊娠中・女性",
    title: "家族みんなでシェアしています",
    body:
      "医師に相談のうえで少量から。自分も、夫も子供も同じボトルで。家族みんなで手軽にミネラル補給しています。"
  },
  {
    name: "40代・女性",
    title: "保存が手軽なのも良いです",
    body:
      "常温保存でOKなのが嬉しい。キッチンに置いておいて、気づいたときに飲める気軽さで毎日が楽になります。"
  },
  {
    name: "20代・女性",
    title: "こまめに摂るだけで変化を実感",
    body:
      "お薬ではないからいつでも飲める。1日を通してコンディションが安定してきたように感じています。"
  }
];

const FAQ = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4">
          {/* ヘッダービジュアル */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-xs tracking-[0.3em] text-gray-500 mb-3">
              VOICES
            </p>
            <h1 className="text-3xl md:text-4xl font-serif tracking-[0.2em] mb-6">
              お客様の声
            </h1>
           <p className="text-gray-600 leading-relaxed">
  MINTERAをご愛用いただいているお客様の
  <br className="hidden md:inline" />
  “リアルな体験”をご紹介します。
  <br />
  Q＆Aは購入同封のチラシ参照
</p>
          </motion.div>

          {/* カードレイアウト */}
          <div className="grid gap-10 md:grid-cols-2">
            {testimonials.map((t, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8"
              >
                <h2 className="text-lg font-semibold mb-2 text-gray-900">
                  {t.title}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{t.name}</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t.body}
                </p>
              </motion.article>
            ))}
          </div>

          {/* 注意書き */}
          <div className="max-w-3xl mx-auto text-center mt-20">
            <p className="text-xs text-gray-500 leading-relaxed">
              ※感じ方には個人差があります。<br />
              ※本品は疾病の診断、治療、予防を目的としたものではありません。
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
