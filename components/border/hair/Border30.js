import React from "react";
import { G, Path } from "react-native-svg";

export default function Border30({ borderColor1 }) {
  return (
    <G scale="0.00001">
      <Path
        d="M53557 66666l-40448 0 0 -6469c0,-6592 4396,-12118 10372,-14229 -200,15 -406,-14 -604,-91 -191,-74 -355,-186 -489,-324 -101,175 -209,348 -322,517 -427,637 -1294,808 -1931,381 -638,-427 -809,-1295 -381,-1932 934,-1392 1241,-3062 1155,-4713 -979,-1954 -1651,-4053 -2088,-6191l-1213 -2135c-2565,-4512 -3257,-11311 1140,-14969 598,-498 1063,-1063 1504,-1680 -60,-206 -110,-414 -151,-624 -107,-556 -161,-1122 -143,-1688 -267,-1605 343,-3959 963,-5440 296,-707 1118,-1041 1824,-744 196,82 364,205 498,354 583,-4641 3876,-6190 8288,-5572 350,20 1477,-402 1862,-507 1681,-458 3212,-398 4757,465 889,496 1644,1132 2165,2019 199,338 306,700 471,1030 31,9 64,17 87,24 852,232 1717,556 2528,981 70,-100 155,-192 254,-273 595,-487 1482,-400 1965,200 339,417 665,906 951,1432 49,-16 99,-30 151,-40 751,-156 1489,328 1646,1079 335,1599 -4,3643 -1123,4897 -107,422 -259,831 -449,1223 1813,2321 2995,3484 3741,6802 281,1252 302,2567 197,3842 -132,1600 -463,3196 -903,4738 -278,973 -831,2430 -1779,3056 -261,1563 -704,3080 -1089,4619l-1 5c-590,2361 -644,5033 763,7130 428,637 257,1505 -381,1932 -637,426 -1504,256 -1931,-381 -114,-170 -221,-342 -322,-518 -134,138 -299,250 -490,324 -715,278 -1524,-76 -1803,-791 -32,-83 -61,-169 -88,-256 -429,457 -884,889 -1365,1291 6893,1543 12216,7506 12216,14759l0 6469zm-29429 -20912c376,-115 756,-217 1142,-305 -186,-155 -369,-315 -548,-479 -14,39 -28,77 -43,115 -112,287 -309,516 -552,669z"
        fill={borderColor1}
      />
    </G>
  );
}