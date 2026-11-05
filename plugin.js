/**
 * Plugin de Tema Vegitto vs Gogeta para Kino TV
 * Adaptación temática inspirada en las fusiones Saiyajin.
 */

kino.on('init', () => {
    console.log('Plugin Vegitto vs Gogeta cargado con éxito en Kino TV.');
    
    // Inyección de variables CSS personalizadas para la interfaz
    const themeStyles = `
      :root {
        --kino-primary-bg: #0b0e14;
        --kino-secondary-bg: #141a24;
        --kino-accent-vegitto: #00e5ff;
        --kino-accent-gogeta: #ff9100;
        --kino-text-main: #ffffff;
        --kino-card-border: linear-gradient(135deg, #00e5ff, #ff9100);
      }

      body {
        background-color: var(--kino-primary-bg) !important;
        color: var(--kino-text-main) !important;
      }

      .kino-card:focus, .kino-button:focus {
        outline: 2px solid var(--kino-accent-vegitto) !important;
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.6) !important;
      }

      .kino-header {
        background: linear-gradient(90deg, rgba(0,229,255,0.15) 0%, rgba(255,145,0,0.15) 100%) !important;
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = themeStyles;
    document.head.appendChild(styleSheet);
});

kino.handle('getThemeConfig', () => {
    return {
        themeId: 'vegitto-vs-gogeta-fusion',
        name: 'Vegitto vs Gogeta Theme',
        author: 'FastGamer / Kino Community',
        colors: {
            vegittoBlue: '#00e5ff',
            gogetaOrange: '#ff9100',
            darkBackground: '#0b0e14'
        }
    };
});
