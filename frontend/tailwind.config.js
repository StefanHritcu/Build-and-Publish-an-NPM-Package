function clamp(minSize, maxSize, minWidth = "320px", maxWidth = "1280px") {
  return `clamp(${minSize}, calc(${minSize} + (${
    parseFloat(maxSize) - parseFloat(minSize)
  }) * ((100vw - ${minWidth}) / (${
    parseFloat(maxWidth) - parseFloat(minWidth)
  }))), ${maxSize})`;
}

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        h1: clamp("2rem", "16rem"), // Responsive for h1
        h2: clamp("1.75rem", "15rem"), // Responsive for h2
        h3: clamp("1.5rem", "14.5rem"), // Responsive for h3
        h4: clamp("1.25rem", "14rem"), // Responsive for h4
        h5: clamp("1rem", "13.5rem"), // Responsive for h5
        h6: clamp("0.875rem", "13rem"), // Responsive for h6
        p: clamp("1rem", "12rem"), // Responsive for p
        small: clamp("0.75rem", "11.5rem"), // Responsive for small
        base: clamp("1rem", "11.5rem"), // Responsive base size
      },
            screens: {
        // Extra small phones and old devices
        xs: "320px",
        xs2: "350px",

        // Small smartphones (older iPhones, and small Android models)
        sm: "375px",
        sm2: "414px",

        // Medium to large smartphones (current generation devices)
        md: "480px",
        md2: "540px",

        // Tablets
        tablet: "600px",
        "tablet-lg": "768px",
        "tablet-xl": "900px",

        // Laptops and medium-sized devices
        laptop: "1024px",
        "laptop-md": "1100px",
        "laptop-lg": "1366px",

        // Desktops and monitors
        desktop: "1440px",
        "desktop-lg": "1600px",
        "desktop-xl": "1920px",

        // Ultra-large devices
        "ultra-desktop": "2560px",
      },
    },
  },
  plugins: [],
};
