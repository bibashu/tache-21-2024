
import React, { useEffect } from 'react';
import Navbar from 'Components/navbar/Navbar';
import Sidebar from 'Components/sidebar/Sidebar';
import './Layout.css'; // Pour structurer la mise en page
import Logo from 'Components/Logo';
/* global $ */
const Layout = ({ children, userData }) => {

  useEffect(() => {
    const isScriptLoaded = (src) => document.querySelector(`script[src="${src}"]`);
    const isStyleLoaded = (href) => document.querySelector(`link[href="${href}"]`);

    const cssFiles = [
      '/assets/css/bootstrap.min.css',
      '/assets/css/plugins.min.css',
      '/assets/css/kaiadmin.min.css'
    ];

    const jsFiles = [
      '/assets/js/plugin/jquery-scrollbar/jquery.scrollbar.min.js',
      '/assets/js/plugin/jquery.sparkline/jquery.sparkline.min.js',
      '/assets/js/plugin/chart.js/chart.min.js',
      '/assets/js/plugin/chart-circle/circles.min.js',
      '/assets/js/plugin/datatables/datatables.min.js',
      '/assets/js/plugin/bootstrap-notify/bootstrap-notify.min.js',
      '/assets/js/plugin/jsvectormap/jsvectormap.min.js',
      '/assets/js/core/popper.min.js',
      '/assets/js/core/bootstrap.min.js',
      '/assets/js/plugin/sweetalert/sweetalert.min.js',
      '/assets/js/kaiadmin.min.js'
    ];

    // Charger jQuery en premier
    const jqueryScript = document.createElement('script');
    jqueryScript.src = '/assets/js/core/jquery-3.7.1.min.js';
    jqueryScript.async = false;  // Important : désactiver le chargement asynchrone pour jQuery
    document.body.appendChild(jqueryScript);

    // Une fois que jQuery est chargé, charger les autres fichiers JS
    jqueryScript.onload = () => {
      jsFiles.forEach(file => {
        if (!isScriptLoaded(file)) {
          const script = document.createElement('script');
          script.src = file;
          script.async = true;
          document.body.appendChild(script);
        }
      });

      // Initialiser les plugins qui dépendent de jQuery
      const initializeJQueryPlugins = () => {
        if (window.jQuery && typeof window.jQuery.fn.scrollbar === 'function') {
          $('.scrollbar-container').scrollbar();
        }
      };

      initializeJQueryPlugins();
    };

    cssFiles.forEach(file => {
      if (!isStyleLoaded(file)) {
        const link = document.createElement('link');
        link.href = file;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }
    });
    const webFontScript = document.createElement('script');
    webFontScript.src = '/assets/js/plugin/webfont/webfont.min.js';
    webFontScript.async = true;
    document.body.appendChild(webFontScript);

    // Charger les polices après le chargement du script WebFont
    webFontScript.onload = () => {
      if (window.WebFont) {
        window.WebFont.load({
          google: {
            families: ['Public Sans:300,400,500,600,700']
          },
          custom: {
            families: [
              'Font Awesome 5 Solid',
              'Font Awesome 5 Regular',
              'Font Awesome 5 Brands',
              'simple-line-icons',
            ],
            urls: ['/assets/css/fonts.min.css'],
          },
          active: function () {
            sessionStorage.fonts = true;
          }
        });
      }
    };


    return () => {
      // Clean up
      const script = document.querySelector(`script[src="/assets/js/core/jquery-3.7.1.min.js"]`);
      if (script) document.body.removeChild(script);

      jsFiles.forEach(file => {
        const script = document.querySelector(`script[src="${file}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);


  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main-panel">
        <div className="main-header">
          <div className="main-header-logo">
            <Logo />
          </div>
          <Navbar userDatas={userData} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;

