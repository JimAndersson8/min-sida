import comfyUiExempel from "../assets/comfyui1.jpg";

// Tillfälligt innehåll som visar hur kategorier och verk hänger ihop.
// Byt ut exempelbilden och texten när du har valt dina portfolioverk.
export const grafiskaKategorier = [
  {
    slug: "comfyui",
    namn: "ComfyUI",
    beskrivning: "Exempel på bilder och arbetsflöden skapade med ComfyUI.",
    omslagsbild: comfyUiExempel,
    verk: [
      {
        id: "comfyui-exempel",
        titel: "Exempelbild – ComfyUI-workflow",
        beskrivning: "Tillfällig bild medan vi bygger upp galleriet.",
        bild: comfyUiExempel,
        alt: "Skärmbild av ett arbetsflöde i ComfyUI",
        taggar: ["ComfyUI", "Workflow"],
      },
    ],
  },
  {
    slug: "photoshop",
    namn: "Photoshop",
    beskrivning: "Exempel på bilder redigerade i Photoshop.",
    omslagsbild: comfyUiExempel,
    verk: [
      {
        id: "photoshop-exempel",
        titel: "Exempelbild – tillfällig platshållare",
        beskrivning: "Vi använder samma bild tills du väljer ett Photoshop-exempel.",
        bild: comfyUiExempel,
        alt: "Tillfällig exempelbild av ett arbetsflöde i ComfyUI",
        taggar: ["Photoshop", "Exempel"],
      },
    ],
  },
];
