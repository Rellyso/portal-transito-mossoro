import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "PantonBlackCaps";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("../fonts/PantonBlackCaps.otf") format('otf');
      }

      @font-face {
        font-family: "Rede Rounded F31";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url("../fonts/RedeRoundedF31.ttf") format('ttf');
      }
    `}
  />
)

export default Fonts;