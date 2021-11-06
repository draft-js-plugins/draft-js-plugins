import Prism from 'prismjs';
import React, { ReactElement, ReactNode, useEffect } from 'react';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Separator from '../Separator/Separator';
import SocialBar from '../SocialBar/SocialBar';

interface PluginPageFrameProps {
  children: ReactNode;
  filePath: string;
}

export default function PluginPageFrame({
  children,
  filePath,
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
      <SocialBar filePath={filePath} />
      <Footer />
    </div>
  );
}
