# Vegito & Gogeta — temas para Kino TV

Plugin de **temas para toda la app** (`apiVersion 18`) con dos aspectos inspirados en la fusión de Dragon Ball:

| Tema | `id` | Look |
|------|------|------|
| **Vegito Blue** | `vegito-blue` | Azul Dios Super Saiyan sobre fondo navy, detalles dorados (Potara), bordes y esquinas angulares, botones del reproductor redondeados. |
| **Gogeta Fusión** | `gogeta-fusion` | Oro sobre violeta profundo (Danza de la Fusión), esquinas suaves, botones del reproductor circulares, foco celeste. |

Cada tema cambia colores, fondo en degradado, redondeo de esquinas, bordes, tamaño de texto, sombras, movimiento, controles del reproductor y **el logo de Kino** (menú lateral, cabecera del celular y riel del TV) con un logo vectorial propio.

> Proyecto de fans, sin relación con Toei, Bird Studio, Shueisha ni Bandai. No incluye imágenes ni arte con derechos de autor: el logo y el ícono son formas vectoriales originales (picos de cabello, pendientes Potara, rayo, estallido de energía). Es gratis (sin `price`) y no cobra kinos.

## Requisitos

- **Kino 0.9.81 o posterior** (`"apiVersion": 18`). Los Kino anteriores muestran «Este plugin necesita una versión más nueva de Kino».
- Bordes (`*Border`, `colors.border`) con **Kino 0.9.82**; en 0.9.81 se ignoran y el tema se ve igual, sin bordes.
- Sin capacidades de red ni de datos: `"hosts": []`. La única capacidad es `screen`, para la pantalla de presentación.

## Instalación

1. Publica esta carpeta en un repositorio de GitHub (por ejemplo `tu-usuario/kino-theme-vegito-gogeta`).
2. En Kino: **Ajustes ▸ Plugins ▸ Agregar** y escribe `tu-usuario/kino-theme-vegito-gogeta`.
3. Activa un tema en **Ajustes ▸ Apariencia** (o desde la pantalla del plugin: **Ajustes ▸ Plugins ▸ Vegito & Gogeta ▸ Ver temas**).

Para volver al aspecto original: **Apariencia ▸ Tema de Kino**, o el botón *Desactivar* de la pantalla del plugin.

## Archivos

```
kino-plugin.json   Manifiesto con los dos appThemes (colores, logo, ajustes...)
plugin.js          Pantalla de presentación con go.useTheme (no toca los temas)
README.md          Este archivo
icon.png           Ícono 128×128 del plugin
icon.svg           Fuente editable del ícono (opcional, Kino lo ignora)
```

## Qué puede ajustar la persona

En **Apariencia ▸ Personalizar** (solo lo marcado como `adjustable`):

- Color de acento (muestras, aptas para control remoto) y color de foco del TV.
- Redondeo de las tarjetas.
- Escala del texto (0,9 – 1,3).
- Tamaño de los botones del reproductor.
- Fondo.

Todas las muestras de color superan los contrastes que exige Kino (texto 4,5:1, acento 3:1).

## Paleta

| | Vegito Blue | Gogeta Fusión |
|---|---|---|
| Acento | `#29B6FF` | `#FFB300` |
| Texto sobre acento | `#00121F` | `#1A0A00` |
| Fondo (degradado) | `#050A1C → #0B2A5B` | `#0A0618 → #2A0F4A` |
| Superficie | `#0D1630` | `#150F2E` |
| Foco (TV) | `#FFC107` | `#4FD8FF` |
| Borde | `#2F8CFF` | `#FFB300` |

## Logo propio

- `wordmark` (180×40): el logo largo, con la palabra **KINO** en letras angulares + la marca del tema.
- `mark` (40×40): solo la marca (riel cerrado del TV).
  - Vegito: cabello en picos, pendientes Potara y rayo.
  - Gogeta: estallido de energía de 8 puntas.
- Solo vectores (`M L H V Z`), con `fill` ligado al tema (`accent`, `textPrimary`, `onAccent`) o colores fijos en el Potara. Kino mantiene su propio logo en la pantalla de inicio, la puerta de entrada y las pantallas que piden una decisión.

## Probar en local

Con el kit del repositorio [kinotvapp/kino-plugins](https://github.com/kinotvapp/kino-plugins):

```bash
node sdk/validate.mjs .                                        # formato y advertencias (celular y TV)
node sdk/run.mjs --context '{"activeTheme":"vegito-blue"}' . screen
node sdk/run.mjs . screenEvent activate --trigger tap
```

El kit no dibuja colores: revisa el resultado en Kino (**Ajustes ▸ Apariencia ▸ vista previa**) en un celular y en un TV.

## Notas para quien edite el tema

- **Nunca cambies los `id` de los temas** (`vegito-blue`, `gogeta-fusion`) tras publicar: de ellos cuelgan la elección y los ajustes de cada persona.
- Un valor fuera de rango no rompe nada: Kino lo descarta con una advertencia. Un error de formato (token desconocido, tipo equivocado) rechaza todo el manifiesto.
- Fondo oscuro obligatorio salvo que el tema traiga su propio `textPrimary`/`textSecondary` legibles.
- Si cambias el manifiesto, súbelo con una versión nueva (`version`) para que Kino vuelva a resolver los temas.

## Estructura de los temas (resumen)

```jsonc
{
  "id": "vegito-blue",
  "name": { "es": "Vegito Blue", "en": "Vegito Blue" },
  "experience": "full",                  // Kino pregunta si activar la experiencia completa
  "colors": { ... },                     // 19 tokens
  "background": { "type": "gradient", "colors": ["#050A1C", "#0B2A5B"], "angle": 180 },
  "shape": { "cardRadius": 8, "dialogBorder": 2, ... },
  "typography": { "scale": 1.0, "titleScale": 1.08 },
  "elevation": { "cardShadow": 0.6, ... },
  "motion": { "focusZoom": 1.08, "crossfadeMs": 350, "heroDrift": "on" },
  "player": { "playButtonScale": 1.3, "buttonShape": "rounded", ... },
  "tv": { ... },                         // sobrescribe solo en TV
  "adjustable": { "colors.accent": { "swatches": [...] }, ... },
  "logo": { "wordmark": {...}, "mark": {...} }
}
```

Documentación oficial: <https://kinotvapp.github.io/kino-plugins/themes/>

## Licencia

Código y manifiesto bajo MIT. Dragon Ball y sus personajes pertenecen a sus respectivos dueños.
