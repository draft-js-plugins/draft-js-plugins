import React, { ReactElement, ReactNode, useEffect } from 'react';
import Prism from 'prismjs';
import Menu from '../Menu/Menu';
import Separator from '../Separator/Separator';
import SocialBar from '../SocialBar/SocialBar';
import Footer from '../Footer/Footer';

interface PluginPageFrameProps {
  children: ReactNode;
}

export default function PluginPageFrame({
  children,
}: PluginPageFrameProps): ReactElement {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div>
      <Menu />
      <Separator />
      {children}
      <SocialBar />
      <Footer />
    </div>
  );
}
