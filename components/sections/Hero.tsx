'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import StarsCanvas from '@/components/ui/StarBackground'
import { Suspense, useEffect, useState } from 'react';
// Direkt import'u kaldırıp, koşullu import kullanacağız

const Hero = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    // Tarayıcı ortamında olduğumuzdan emin olalım
    if (typeof window !== 'undefined') {
      // İlk yüklemede ekran genişliğini kontrol et
      const checkIsDesktop = () => window.innerWidth >= 768;
      setIsDesktop(checkIsDesktop());

      // Ekran boyutu değiştiğinde güncelle
      const handleResize = () => {
        setIsDesktop(checkIsDesktop());
      };

      window.addEventListener('resize', handleResize);
      
      // Sayfa yüklendikten 2 saniye sonra 3D modeli yüklemeye izin ver
      const timer = setTimeout(() => {
        if (checkIsDesktop()) {
          setSplineLoaded(true);
        }
      }, 2000);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Yıldızlı arka plan */}
      <StarsCanvas />
      
      {/* Spline 3D Arka Plan - Sadece masaüstünde göster ve içerik yüklendikten sonra */}
      {isDesktop && splineLoaded && (
        <div className="absolute inset-0 z-10">
          <Suspense fallback={<div className="w-full h-full bg-transparent" />}>
            {/* Bu kısım sadece tarayıcı tarafında çalışacak */}
            <SplineDynamic />
          </Suspense>
        </div>
      )}
      
      {/* İçerik */}
      <Container className="relative z-30">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-4 neon-text"
            >
              Ali Olkaç
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-gradient"
            >
              Full-Stack Ninja Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-text-secondary max-w-2xl"
            >
             Modern teknolojilerle sağlam, ölçeklenebilir çözümler geliştiriyorum. Kod yazarken sadece çözüm değil, değer üretmeye odaklanıyorum —  <span className="text-orange">Ninja disipliniyle .</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-6"
          >
            <Button 
              size="lg" 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="neon-button"
            >
              Projelerimi Gör
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="neon-button border-secondary text-secondary hover:bg-secondary hover:shadow-neon-purple"
            >
              İletişime Geç
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1 hover:border-primary hover:shadow-neon-blue transition-all duration-300">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

// Client tarafında dinamik olarak yüklenen bileşen
const SplineDynamic = () => {
  const [SplineComponent, setSplineComponent] = useState<any>(null);
  
  useEffect(() => {
    // Client tarafında dinamik import
    import('@splinetool/react-spline')
      .then((module) => {
        setSplineComponent(() => module.default);
      })
      .catch(error => {
        console.error('Spline yüklenemedi:', error);
      });
  }, []);
  
  if (!SplineComponent) {
    return <div className="w-full h-full bg-transparent" />;
  }
  
  return (
    <SplineComponent 
      scene="https://prod.spline.design/C-8uoB8bQZdwZag5/scene.splinecode"
      className="w-full h-full"
    />
  );
}

export default Hero; 