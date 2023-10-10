import React from "react";
import { G, Path } from "react-native-svg";

export default function Glasses2({ glassesColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M32125 24554c-879,-718 -3341,-2366 -7704,-2657 -4491,-299 -6748,704 -6378,2375 2583,11661 14710,10370 14581,2011 -11,-747 1366,-717 1351,0 -176,8404 11994,9673 14581,-2011 370,-1670 -1887,-2674 -6378,-2375 -4364,291 -6825,1939 -7704,2657 -1174,607 -1174,607 -2348,0zm2583 809c0,0 1981,-2108 6489,-2409 3608,-241 5420,566 5123,1911 -2185,9887 -12879,8209 -11612,497zm-2819 0c0,0 -1980,-2108 -6489,-2409 -3608,-241 -5420,566 -5123,1911 2185,9887 12879,8209 11612,497z"
        fill={glassesColor1}
      />
      <Path
        d="M30332 24269c-1059,-564 -2680,-1165 -4931,-1315 -559,-37 -1075,-50 -1546,-39 -20,143 -30,289 -30,438 0,1798 1487,3255 3320,3255 1509,0 2783,-987 3187,-2339z"
        fill="#fff"
      />
      <Path
        d="M36265 24269c1059,-564 2680,-1165 4931,-1315 559,-37 1075,-50 1546,-39 20,143 30,289 30,438 0,1798 -1487,3255 -3320,3255 -1509,0 -2783,-987 -3187,-2339z"
        fill="#fff"
      />
    </G>
  );
}
