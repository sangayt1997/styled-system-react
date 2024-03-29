export const defaultTheme = {
    breakpoints: ["599px", "959px", "1279px", "1919px"],
    fontSizes: {
        0: 0,
        xs: "12px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
    },
    /*If you want to specify space based on breakpoint variants*/
    /*space: {
        xxs: "12px",
        xs: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
    },*/
    space: {
        0: 0,
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        28: "28px",
        30: "30px",
        32: "32px",
        34: "34px",
        36: "36px",
    },

    /*We can use like this also, but it takes "dafaultTheme.space[index]" */
    /* space: [0, 4, 8, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 64],*/

    fontWeights: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
        800: 800,
        900: 900
    },

    lineHeights: {
        sm: 1.5,
        md: 1.8,
        lg: 2,
        xl: 2.5
    },

    borders: {
        2: "2px solid",
        4: "4px solid",
        6: "6px solid",
        8: "8px solid",
        10: "10px solid"
    },

    radii: {
        0: 0,
        2: "2px",
        4: "4px",
        6: "6px",
        8: "8px",
        10: "10px",
        12: "12px",
        14: "14px"
    },

    colors: {
        white: "#FFFFFF",
        black: "#000000",

        primary100: "#C6CAFF",
        primary200: "#5650EC",
        primary500: "#3B35DC",

        success100: "#E6FAE7",
        success200: "#52B45A",
        success500: "#2F9237",

        danger100: "#FFECEC",
        danger200: "#E02F32",
        danger500: "#BB1316",

        warning100: "#FFF5EF",
        warning200: "#F17D39",
        warning500: "#D35E1A",
    },
    buttons: {
        primary: {
            color: "white",
            backgroundColor: "#5650EC"
        },
        secondary: {
            color: "white",
            backgroundColor: "#52B45A"
        },
        danger: {
            color: "white",
            backgroundColor: "#E02F32"
        }
    },
    buttonSizes: {
        medium: {
            fontSize: "16px",
            padding: "8px 16px",
            borderRadius: "2px"
        },
        large: {
            fontSize: "18px",
            padding: "12px 24px",
            borderRadius: "6px"
        }
    }
};

export type AppTheme = typeof defaultTheme;
