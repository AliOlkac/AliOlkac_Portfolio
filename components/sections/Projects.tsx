"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectModal from "../ProjectModal";

// Proje tipi tanımlaması
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

// Projeler - Aboutme.md dosyasından alınan bilgilerle oluşturulmuştur
const projects: Project[] = [
  {
    id: 1,
    title: "Algoritmik Trade Botları",
    description:
      "Kripto para ticaretinde kullanılan bir otomatik alım-satım botu, piyasa verilerini analiz etmek için çeşitli teknik göstergeleri (RSI, MACD, Bollinger Bantları gibi) kullanarak, alım ve satım işlemlerini otomatik olarak gerçekleştirir. Bot, Binance API entegrasyonu sayesinde gerçek zamanlı olarak piyasa verilerini takip eder ve belirlenen stratejilere göre alım ve satım yapar.",
    image: "/projects/algo-trading.jpg",
    tags: ["Python", "Trading", "Binance API"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 2,
    title: "Yapay Zeka Film Öneri Web Sitesi",
    description: `Makine öğrenimi tabanlı bir film öneri platformu, kullanıcıların film tercihlerini analiz ederek, benzer zevklere sahip diğer kullanıcıları bulur ve onlardan film önerileri sunar. Bu sistemin temelinde Collaborative Filtering (işbirlikçi filtreleme) tekniği bulunur.

Collaborative Filtering, bir kullanıcının beğendiği filmleri, aynı filmleri beğenen diğer kullanıcılarla karşılaştırarak, zevk profilleri benzer olan kişilerden öneriler alır.

Örneğin, bir kullanıcı belirli bir film türünü beğenmişse, aynı türde başka filmler izleyen ve benzer tercihlere sahip diğer kullanıcılardan öneriler alınır.

Bu yaklaşımda, kullanıcıların geçmişteki film tercihlerine göre "coinüs benzerliği" gibi metrikler kullanılarak, benzerlik ölçümleri yapılır.

Bu sayede, her bir kullanıcı için, sadece sistemdeki mevcut en popüler filmler değil, gerçekten kendi zevklerine hitap eden kişiselleştirilmiş film önerileri sunulur.`,
    image: "/projects/ai-movies.jpg",
    tags: ["Machine Learning", "Web Development", "Next.js"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 3,
    title: "Zombi Temalı Oyun (Game Jam)",
    description: `Zombi temalı oyun, ekip olarak katıldığımız bir Game Jam etkinliğinde geliştirdiğimiz bir projedir. Bu oyun, sınırlı bir zaman diliminde, yaratıcı çözümler ve hızlı geliştirme teknikleriyle oluşturulmuştur. Teması, zombi kıyameti sonrası hayatta kalmaya çalışan karakterlerin mücadelelerine dayanır. Oyun, oyunculara aksiyon dolu, heyecan verici bir deneyim sunarken aynı zamanda strateji ve kaynak yönetimini de öne çıkarır.

Game Jam gibi etkinlikler, hızla prototip oluşturmayı, takım çalışmasını ve yaratıcı düşünmeyi geliştirmek için mükemmel bir fırsattır. Bu projede, tasarımdan kodlamaya kadar her aşamada aktif olarak yer aldım, zorlu zaman kısıtlamalarına rağmen ekip olarak başarılı bir sonuç ortaya koyduk.`,
    image: "/projects/zombie-game.jpg",
    tags: ["Unity", "C#", "Game Development"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 4,
    title: "OSGB Şirketi Web Sitesi",
    description:
      `İş Sağlığı ve Güvenliği Şirketi İçin Kurumsal Web Sitesi, bir şirketin ihtiyaçlarına yönelik tamamen özelleştirilmiş bir çözüm olarak tasarlandı ve geliştirildi. Bu proje, şirketin hizmetlerini, vizyonunu ve misyonunu dijital ortamda etkin bir şekilde sunmayı hedefliyordu.

Web sitesi, kullanıcı dostu bir arayüze sahip olup, hizmetlerin tanıtımı, yasal mevzuatlar, eğitim programları, iş güvenliği raporları ve diğer önemli içerikleri kolayca erişilebilir hale getirir. Aynı zamanda, modern web teknolojileri kullanılarak responsive tasarım, SEO optimizasyonu ve hızlı yükleme süreleri gibi önemli performans kriterlerine dikkat edilmiştir.

Proje sürecinde, kullanıcı deneyimini ön planda tutarak, kullanıcı dostu navigasyon, görsel öğelerle desteklenen içerik ve mobil uyumlu tasarım gibi unsurların üzerinde yoğunlaşıldı. Bu site, şirketin dijital varlığını güçlendirerek, hedef kitlesine güvenilir ve profesyonel bir imaj sunmasına olanak sağlamaktadır.`,
    image: "/projects/osgb-website.jpg",
    tags: ["Web Development", "HTML/CSS", "JavaScript"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 5,
    title: "Amazon Affiliate Kamera Öneri Sitesi",
    description:
      `Amazon Affiliate Ortaklık Programı kapsamında gelir elde etmek için oluşturduğum kamera öneri web sitesi, kullanıcılara çeşitli kamera modelleri hakkında kapsamlı incelemeler ve öneriler sunar. Web sitesi, Amazon'un affiliate programı kullanılarak, ziyaretçilerin önerilen ürünleri satın alması durumunda gelir elde etmeyi amaçlar.

Site, kapsamlı ürün incelemeleri, kullanıcı yorumları, ve karşılaştırmalar ile ziyaretçilerin doğru kamerayı seçmelerine yardımcı olmayı hedefler. Her bir kamera için detaylı özellikler, avantajlar ve kullanım alanları üzerinde durulmuş, ziyaretçilerin bilinçli bir karar vermelerini sağlamak amacıyla rehberlik edilmiştir.

Affiliate bağlantılar aracılığıyla, kullanıcılar ürünleri doğrudan Amazon üzerinden satın aldıklarında, sitenin sahibi olarak gelir elde edilir. Bu süreç, sürekli güncellenen içerik ve ürünler aracılığıyla sürdürülebilir bir gelir modeli oluşturulmasına olanak tanır.`,
    image: "/projects/amazon-affiliate.jpg",
    tags: ["Web Development", "Affiliate Marketing", "Next.js"],
    link: "https://github.com/AliOlkac",
  },
  {
    id: 6,
    title: "Ses Analizi ile Hastalık Tespiti",
    description:
      "Üniversitede hocalar ve doktorlarla birlikte ses analizi kullanarak hastalık tespiti yapabilen bir mobil uygulama projesi...",
    image: "/projects/sound-analysis.jpg",
    tags: ["Mobile Development", "Machine Learning", "React Native"],
    link: "https://github.com/AliOlkac",
  },
];

// Proje kartı bileşeni
const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({
  project,
  onClick,
}) => {
  return (
    <motion.div
      className="flip-card w-full h-[320px] cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: project.id * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
    >
      <div className="flip-card-inner relative w-full h-full">
        {/* Ön yüz */}
        <div className="flip-card-front absolute w-full h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="z-0 brightness-[0.25]"
            />
            <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-primary/20 text-highlight rounded-full border border-highlight/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-white neon-text">
                {project.title}
              </h3>
            </div>
            <div className="absolute inset-0 border-3 border-highlight/60 rounded-lg z-20 glow-border"></div>
          </div>
        </div>

        {/* Arka yüz */}
        <div className="flip-card-back absolute w-full h-full">
          <div className="relative w-full h-full rounded-lg overflow-hidden glass-effect">
            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-bold text-highlight mb-4">
                  {project.title}
                </h3>
                <p className="text-sm text-white/90">{project.description}</p>
              </div>
              <button
                className="mt-4 self-center py-2 px-4 bg-highlight/20 text-highlight border border-highlight/50 rounded-md hover:bg-highlight/30 transition-colors duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
              >
                Daha Fazla Bilgi
              </button>
            </div>
            <div className="absolute inset-0 border-3 border-highlight/60 rounded-lg z-20 glow-border"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 neon-text">Projelerim</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Geliştirdiğim başlıca projeler ile yazılım dünyasındaki
            deneyimlerimi keşfedin.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
