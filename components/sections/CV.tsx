'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaEye } from 'react-icons/fa';

const CV = () => {
  // CV PDF'inin yolu
  const cvPdfPath = '/cv/AliOlkac_CV.pdf';
  // CV görsel önizleme resimlerinin yolları (birden fazla sayfa için)
  const cvPreviewImages = ['/cv/cv-preview.png'];

  return (
    <section id="cv" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-orange orange-pulse">Özgeçmişim</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Eğitim ve deneyimlerime dair detaylı bilgileri içeren özgeçmişimi inceleyebilir ve PDF olarak indirebilirsiniz.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-6xl mx-auto">
          {/* CV Önizleme Bölümü */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-gray-900/50 glass-effect rounded-lg p-4 border-3 border-orange/60 border-orange-glow">
              <div className="grid gap-4">
                {cvPreviewImages.map((image, index) => (
                  <div key={index} className="relative aspect-[1/1.414] w-full shadow-lg">
                    <Image
                      src={image}
                      alt={`CV Sayfası ${index + 1}`}
                      fill
                      className="object-contain rounded"
                      priority={index === 0}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
              
              {/* Önizleme Büyütme Butonu */}
              <Link 
                href={cvPreviewImages[0]} 
                target="_blank" 
                className="absolute top-6 right-6 p-3 bg-black/40 rounded-full text-orange hover:bg-orange/20 transition-colors duration-300 shadow-orange-neon"
                aria-label="CV'yi tam boyutta görüntüle"
              >
                <FaEye size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Sağ Taraf - Bilgiler ve İndirme Butonu */}
          <motion.div 
            className="w-full lg:w-1/3 glass-effect rounded-lg p-6 border-3 border-orange/60 border-orange-glow relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Arka plan dekoratif öğeler */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange/5 rounded-full -mr-10 -mt-10 z-0"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange/5 rounded-full -ml-20 -mb-20 z-0"></div>
            
            <div className="relative z-10">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center mb-8 border-b border-orange/20 pb-4"
              >
                <div className="w-16 h-16 rounded-full bg-orange/10 flex items-center justify-center mr-4 shadow-orange-neon">
                  <span className="text-3xl font-bold text-orange">AO</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-orange">Ali Olkaç</h3>
                  <p className="text-white/70">Bilgisayar Mühendisi</p>
                </div>
              </motion.div>
              
              <div className="space-y-7">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex"
                >
                  <div className="mr-4 text-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange/90 mb-2 flex items-center">
                      Eğitim
                      <span className="inline-block ml-2 w-12 h-[1px] bg-orange/30"></span>
                    </h4>
                    <div className="pl-2 border-l-2 border-orange/30">
                      <p className="text-white/90 font-medium">Balıkesir Üniversitesi</p>
                      <p className="text-white/90">Bilgisayar Mühendisliği</p>
                      <p className="text-orange/70 text-sm">2021 - 2025</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex"
                >
                  <div className="mr-4 text-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange/90 mb-2 flex items-center">
                      Deneyim
                      <span className="inline-block ml-2 w-12 h-[1px] bg-orange/30"></span>
                    </h4>
                    <div className="space-y-3">
                      <div className="pl-2 border-l-2 border-orange/30">
                        <p className="text-white/90 font-medium">2KEKGAMES</p>
                        <p className="text-white/70">Stajyer</p>
                        <p className="text-orange/70 text-sm">2023</p>
                        <p className="text-white/80 text-sm mt-1">Algoritmik trading üzerine staj deneyimi</p>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30">
                        <p className="text-white/90 font-medium">ELI (Ege Linyit İşletmeleri)</p>
                        <p className="text-white/70">Stajyer</p>
                        <p className="text-orange/70 text-sm">2022</p>
                        <p className="text-white/80 text-sm mt-1">Web sitesi tasarımı üzerine staj deneyimi</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex"
                >
                  <div className="mr-4 text-orange">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-orange/90 mb-2 flex items-center">
                      Beceriler
                      <span className="inline-block ml-2 w-12 h-[1px] bg-orange/30"></span>
                    </h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">JavaScript/TS</span>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">React/Next.js</span>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">Python</span>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">C#</span>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">Node.js</span>
                      </div>
                      <div className="pl-2 border-l-2 border-orange/30 flex items-center">
                        <div className="w-2 h-2 bg-orange/60 rounded-full mr-2"></div>
                        <span className="text-white/90">Unity</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* İndirme Butonu */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={cvPdfPath}
                  download="AliOlkac_CV.pdf"
                  className="mt-8 w-full py-3 px-6 flex items-center justify-center bg-orange/20 hover:bg-orange/30 text-orange border border-orange/60 rounded-lg transition-all duration-300 shadow-orange-neon hover:shadow-[0_0_20px_rgba(255,165,0,0.9)] group"
                >
                  <FaDownload className="mr-2 group-hover:animate-bounce" /> CV&apos;yi İndir (PDF)
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CV; 