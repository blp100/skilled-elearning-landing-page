tailwind.config = {
  theme: {
    colors: {
      "dark-blue": "#13183f",
      purple: "#666ca3",
      white: "#ffffff",
      "body-gray": "#83869a",
      "link-color": "#f74780",
      "link-hover-color": "#ffa7c3",
      "grad-purple": "#f02aa6",
      "grad-orange": "#ff6f48",
      "grad-blue": "#4851ff",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      "h-xl": [
        "3.5rem",
        {
          lineHeight: "4.375rem",
          fontWeight: "800",
        },
      ],
      "h-l": [
        "2.5rem",
        {
          lineHeight: "51px",
          fontWeight: "800",
        },
      ],
      "h-m": [
        "2rem",
        {
          lineHeight: "2.5rem",
          fontWeight: "800",
        },
      ],
      "h-s": [
        "1.5rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "800",
        },
      ],
      "b-m": [
        "1.125rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "500",
        },
      ],
      "b-s": [
        "1rem",
        {
          lineHeight: "1.75rem",
          fontWeight: "700",
        },
      ],
      /* mobile and laptop body paragraph size */
      "b-m-mt": [
        "1rem",
        {
          lineHeight: "1.625rem",
          fontWeight: "500",
        },
      ],
    },
    extend: {
      dropShadow: {
        sp: "0px 34px 54px rgba(6, 22, 141, 0.158854)",
        "sp-content": "0px 25px 50px rgba(6, 22, 141, 0.0442381)",
      },
      backgroundImage: {
        "btn-grad": "linear-gradient(180deg, #4851FF 0%, #F02AA6 100%);",
        "btn-grad-hover":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851FF -54.32%, #F02AA6 100%)",
      },
    },
  },
};
