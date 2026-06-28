export type App = {
  name: string;
  subtitle: string;
  platform: string;
  appStoreUrl: string;
};

export const apps: App[] = [
  { name: "Whoooshh", subtitle: "Collaborative and immersive drawing canvas", platform: "visionOS", appStoreUrl: "https://apps.apple.com/it/app/whoooshh-draw-with-friends/id6774649423" },
  { name: "ATRIA", subtitle: "Spatial workspace for medical pre-operative meetings", platform: "visionOS", appStoreUrl: "https://apps.apple.com/it/app/atria-heart-team-meetings/id6766910179" },
  { name: "Roundeo", subtitle: "Rounded corners and frames for videos", platform: "macOS", appStoreUrl: "https://apps.apple.com/it/app/roundeo-round-corners-videos/id6761580158?mt=12" },
  { name: "Liquid", subtitle: "Money transactions for people with dyscalculia", platform: "iOS", appStoreUrl: "https://apps.apple.com/it/app/liquid-spending-made-simple/id6759966864" },
  { name: "Gennit", subtitle: "Food parties accounting for allergies", platform: "iOS", appStoreUrl: "https://apps.apple.com/it/app/gennit-food-allergy-parties/id6760315666" },
  { name: "Nowhat?", subtitle: "Sketch your ideas quickly!", platform: "iOS", appStoreUrl: "https://apps.apple.com/it/app/nowhat-ideas-organizer/id6744868925" },
  { name: "Airchestra", subtitle: "Explore spatial sound from musical planets", platform: "visionOS", appStoreUrl: "https://apps.apple.com/it/app/airchestra/id6754012641" },
  { name: "Duidu", subtitle: "Drawing canvas for visually impaired people", platform: "iOS", appStoreUrl: "https://apps.apple.com/it/app/duidu-accessible-drawing/id6746523814" },
];
