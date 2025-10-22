// theme.d.ts
import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    myCustom: true;
  }
}

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      background: {
        slate50: string;
        blue50: string;
        indigo50: string;
        slate950: string;
        slate900: string;
        indigo950: string;

      };
      texts: {
        white : string;
        slate900: string;
        slate600: string;
        slate400: string;
        slate500: string;
        slate300: string;
        amber600: string;
        amber500: string;
      };
      buttons: {
        blue400: string;
        blue500: string;
        blue600: string;
        blue700: string;
        indigo500:string;
        indigo600:string;
        indigo700:string;
        red50: string;
        red400: string;
        red500: string;
        red950: string;
        slate600: string;
      };
      cards: {
        white: string;
        slate100: string;
        slate200: string;
        slate900: string;
        slate800: string;
        slate700: string;
      }
    };
  }

  interface PaletteOptions {
   custom?: {
      background?: {
        slate950?: string;
        slate900?: string;
        slate50?: string;
        blue50?: string;
        indigo50?: string;
        indigo950?: string;

      };
      texts?: {
        white?: string;
        slate900?: string;
        slate600?: string;
        slate400?: string;
        slate500?: string;
        slate300?: string;
        amber500?: string;


        amber600?: string;
      };
      buttons?: {
        blue400?: string;
        blue500?: string;
        blue600?: string;
        blue700?: string;
        indigo500?:string;
        indigo600?:string;
        indigo700?:string;
        red50?: string;
        red400?: string;
        red500?: string;
        red950?: string;
        slate600?: string;

      };
      cards?: {
        white?: string;
        slate100?: string;
        slate200?: string;
        slate900?: string;
        slate800?: string;
        slate700?: string;

      }
    };
  }
}
