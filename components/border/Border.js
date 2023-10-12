import React, { useMemo } from "react";

import EarringsBorder1 from "./earrings/Border1";
import EarringsBorder2 from "./earrings/Border2";
import EarringsBorder3 from "./earrings/Border3";
import EarringsBorder4 from "./earrings/Border4";
import HairBorder0 from "./hair/Border0";
import HairBorder1 from "./hair/Border1";
import HairBorder2 from "./hair/Border2";
import HairBorder3 from "./hair/Border3";
import HairBorder4 from "./hair/Border4";
import HairBorder5 from "./hair/Border5";
import HairBorder6 from "./hair/Border6";
import HairBorder7 from "./hair/Border7";
import HairBorder8 from "./hair/Border8";
import HairBorder9 from "./hair/Border9";
import HairBorder10 from "./hair/Border10";
import HairBorder11 from "./hair/Border11";
import HairBorder12 from "./hair/Border12";
import HairBorder13 from "./hair/Border13";
import HairBorder14 from "./hair/Border14";
import HairBorder15 from "./hair/Border15";
import HairBorder16 from "./hair/Border16";
import HairBorder17 from "./hair/Border17";
import HairBorder18 from "./hair/Border18";
import HairBorder19 from "./hair/Border19";
import HairBorder20 from "./hair/Border20";
import HairBorder21 from "./hair/Border21";
import HairBorder22 from "./hair/Border22";
import HairBorder23 from "./hair/Border23";
import HairBorder24 from "./hair/Border24";
import HairBorder25 from "./hair/Border25";
import HairBorder26 from "./hair/Border26";
import HairBorder27 from "./hair/Border27";
import HairBorder28 from "./hair/Border28";
import MouthBorder11 from "./mouth/Border11";
import NecklaceBorder3 from "./necklace/Border3";

export default function Border({
  borderColor1,
  earrings,
  hair,
  mouth,
  necklace,
}) {
  const hairBorders = useMemo(
    () => [
      HairBorder0,
      HairBorder1,
      HairBorder2,
      HairBorder3,
      HairBorder4,
      HairBorder5,
      HairBorder6,
      HairBorder7,
      HairBorder8,
      HairBorder9,
      HairBorder10,
      HairBorder11,
      HairBorder12,
      HairBorder13,
      HairBorder14,
      HairBorder15,
      HairBorder16,
      HairBorder17,
      HairBorder18,
      HairBorder19,
      HairBorder20,
      HairBorder21,
      HairBorder22,
      HairBorder23,
      HairBorder24,
      HairBorder25,
      HairBorder26,
      HairBorder27,
      HairBorder28,
    ],
    [],
  );

  const extraBorders = useMemo(
    () => ({
      earrings: {
        1: EarringsBorder1,
        2: EarringsBorder2,
        3: EarringsBorder3,
        4: EarringsBorder4,
      },
      mouth: {
        11: MouthBorder11,
      },
      necklace: {
        3: NecklaceBorder3,
      },
    }),
    [],
  );

  // Note we do not use - 1 here since.
  const HairBorder = hairBorders[hair || 0];

  const NecklaceBorder = extraBorders?.necklace[necklace];
  const EarringsBorder = extraBorders?.earrings[earrings];
  const MouthBorder = extraBorders?.mouth[mouth];

  return (
    <>
      {HairBorder && <HairBorder borderColor1={borderColor1} />}
      {NecklaceBorder && <NecklaceBorder borderColor1={borderColor1} />}
      {EarringsBorder && <EarringsBorder borderColor1={borderColor1} />}
      {MouthBorder && <MouthBorder borderColor1={borderColor1} />}
    </>
  );
}
