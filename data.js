// EZ SHOP CATALOG EDITOR
// Edit this file in GitHub, then click Commit changes to publish updates.
// Photos: upload images to an 'images' folder and set image: 'images/filename.jpg'.
// Remove demo products or replace them with verified inventory before public launch.
window.EZ_DATA = {

settings: {
  email: "izzy2v22@gmail.com",
  instagram: "https://www.instagram.com/izzy_2v/"
},

  vinyl: [
    { name: "Midnight Violet", 
     code: "EZ-V001", 
     finish: "Gloss", 
     hex: "#49316b", 
     image: "", 
     description: "DEMO COLOR — replace with confirmed stock and real swatch imagery." },
    
    { name: "Satin Forest", 
     code: "EZ-V002", 
     finish: "Satin", 
     hex: "#355b48", 
     image: "", 
     description: "DEMO COLOR — replace with confirmed stock and real swatch imagery." },
    
    { name: "Liquid Silver", 
     code: "EZ-V003", 
     finish: "Metallic", 
     hex: "#a4a9b5", 
     image: "", 
     description: "DEMO COLOR — replace with confirmed stock and real swatch imagery." }

    
    {
      name: "Gloss Midnight Blue",
      code: "EZ-V004",
      finish: "Gloss",
      hex: "#49416B",
      image: "",
      description: "Premium gloss purple automotive wrap vinyl." },

  ],
  parts: [
    { name: "Custom Interior Accessories", fitment: "Made for specific vehicles", image: "", description: "EXAMPLE CATEGORY — add actual parts and verified vehicle compatibility." },
    { name: "3D-Printed Vehicle Components", fitment: "Vehicle-specific requests", image: "", description: "EXAMPLE CATEGORY — request a custom quote and fitment review." }
  ],
  builds: [
    // Example after customer permission:
    // { vehicle: "2014 Infiniti Q50", color: "Midnight Violet", handle: "@customer", image: "images/q50-violet.jpg" }
  ],
  promos: [
    // Example: { code: "EZ10", title: "10% off select vinyl", description: "Mention EZ10 when requesting a quote. Subject to confirmation." }
  ]
};
