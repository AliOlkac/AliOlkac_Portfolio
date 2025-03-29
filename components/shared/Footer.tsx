'use client';

import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { navLinks, siteConfig } from '@/lib/constants';
import Link from 'next/link';
import Container from '@/components/ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/50 border-t border-primary/10 pt-12 pb-8">
      <Container>
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          {/* Logo ve Açıklama */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold neon-text text-primary">
                {siteConfig.siteName}
              </span>
            </Link>
            <p className="text-text-secondary mb-4">
              Modern web teknolojileri ve yazılım geliştirme konularında kendimi geliştiriyorum. 
              Kullanıcı deneyimine odaklanan, performans odaklı uygulamalar geliştirmeyi seviyorum.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href={siteConfig.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-xl" />
              </motion.a>
              <motion.a 
                href={siteConfig.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTwitter className="text-xl" />
              </motion.a>
              <motion.a 
                href={siteConfig.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-primary transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    href={link.path} 
                    className="text-text-secondary hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              İletişim
            </h3>
            <ul className="space-y-2">
              <li className="text-text-secondary">
                <span className="block">Email:</span>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-secondary transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li className="text-text-secondary">
                <span className="block">Konum:</span>
                <span className="block">Kütahya, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Bölüm */}
        <div className="border-t border-primary/10 pt-6 mt-6 text-center text-text-secondary text-sm">
          <p className="flex items-center justify-center">
            © {currentYear} {siteConfig.siteName}. Tüm hakları saklıdır.
            <span className="inline-flex items-center ml-2">
              <span className="mr-1">ile yapıldı</span>
              <FaHeart className="text-accent text-xs inline animate-pulse" />
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer; 