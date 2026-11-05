// Vegito & Gogeta — plugin de temas para Kino TV (apiVersion 18).
//
// Los temas (colores, fondo, bordes, logo...) viven como DATOS en kino-plugin.json
// (campo "appThemes"): no corren código ni usan la red.
// Este archivo solo dibuja una pantalla de presentación con botones para activar
// cada tema con go.useTheme (se abre desde Ajustes > Plugins > Vegito & Gogeta).

const THEMES = [
  {
    id: "vegito-blue",
    title: "Vegito Blue",
    titleEn: "Vegito Blue",
    text: "Azul Dios Super Saiyan, pendientes Potara dorados y bordes angulares.",
    textEn: "Super Saiyan Blue, golden Potara accents and sharp borders.",
    icon: "bolt",
  },
  {
    id: "gogeta-fusion",
    title: "Gogeta Fusión",
    titleEn: "Gogeta Fusion",
    text: "Oro y violeta de la Danza de la Fusión, esquinas suaves y botones redondos.",
    textEn: "Gold and violet from the Fusion Dance, soft corners and round buttons.",
    icon: "star",
  },
];

function themeCard(theme, activeTheme) {
  const on = activeTheme === theme.id;
  return {
    type: "Card",
    key: "card-" + theme.id,
    variant: "outlined",
    children: [
      { type: "Text", text: theme.title, textEn: theme.titleEn, style: "h3" },
      { type: "Text", text: theme.text, textEn: theme.textEn, color: "muted" },
      {
        type: "ElevatedButton",
        key: "btn-" + theme.id,
        icon: on ? "check" : theme.icon,
        labelText: on ? "Desactivar" : "Activar",
        labelTextEn: on ? "Turn off" : "Turn on",
        // Solo se acepta desde la pulsación de la persona: null vuelve al tema de Kino.
        onPressed: { go: { useTheme: { theme: on ? null : theme.id } } },
      },
    ],
  };
}

export async function screen({ activeTheme } = {}) {
  return {
    type: "SingleChildScrollView",
    children: [
      {
        type: "Column",
        padding: 16,
        gap: 12,
        children: [
          { type: "Text", text: "Vegito & Gogeta", textEn: "Vegito & Gogeta", style: "h2" },
          {
            type: "Text",
            text: "Elige un aspecto para toda la app. También lo encuentras en Ajustes > Apariencia, donde puedes personalizar colores, esquinas y tamaño del texto.",
            textEn: "Pick a look for the whole app. You can also find it in Settings > Appearance, where you can tweak colors, corners and text size.",
            color: "muted",
          },
          ...THEMES.map((t) => themeCard(t, activeTheme)),
        ],
      },
    ],
  };
}

// Los botones ya llevan su go.useTheme; no hay eventos propios.
export async function screenEvent() {
  return null;
}
