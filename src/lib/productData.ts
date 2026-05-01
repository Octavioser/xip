// AUTO-GENERATED from _migration/dumps/XIP_PROD*.csv via _migration/convert-product-data.mjs
// Replaces /shop/shopR002 (selectProdList) and /shop/shopR003 (selectDetailProdList).
// Edit the CSV + rerun the script rather than hand-editing this file.

export interface ProductVariant {
  readonly prodCdD: string;
  readonly size: string;
  readonly soldQty: number;
  readonly totalQty: number;
}

export interface Product {
  readonly prodCd: string;
  readonly name: string;
  readonly price: number;
  readonly usPrice: number;
  readonly sizeOpt: readonly string[];
  readonly status: string;
  readonly line: string;
  readonly season: string;
  readonly prodDesc: readonly string[];
  readonly prodDescD: readonly string[];
  readonly imageSrc: string;
  readonly images: readonly string[];
  readonly variants: readonly ProductVariant[];
}

export const PRODUCTS: readonly Product[] = [
  {
    prodCd: "XPH24SJ13TL08",
    name: "3L Shell jacket",
    price: 650000,
    usPrice: 610,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "3 layered waterproof shell jacket",
      "Black / Gray"
    ],
    prodDescD: [
      "Articulated construction",
      "3m reflective parts",
      "Gusset sleeve",
      "2way zipped front pocket",
      "Adjustable sleeve",
      "2 way adjustable hood (size & shape)",
      "High neck collar",
      "YKK waterproof 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SJ13TL08/XPH24SJ13TL08.gif",
    images: [
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_1.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_2.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_3.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_4.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_5.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_6.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_7.webp",
      "xItem/i/shop/products/XPH24SJ13TL08/detail/XPH24SJ13TL08_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SJ013TL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ113TL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ213TL08", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SJ313TL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ413TL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ513TL08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SJ14TL06",
    name: "3L Shell jacket",
    price: 650000,
    usPrice: 610,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "3 layered waterproof shell jacket",
      "Gray / Red"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "2way zipped front pocket",
      "Adjustable sleeve",
      "2 way adjustable hood (size & shape)",
      "High neck collar",
      "YKK waterproof 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SJ14TL06/XPH24SJ14TL06.gif",
    images: [
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_1.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_2.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_3.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_4.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_5.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_6.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_7.webp",
      "xItem/i/shop/products/XPH24SJ14TL06/detail/XPH24SJ14TL06_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SJ014TL06", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ114TL06", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ214TL06", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SJ314TL06", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ414TL06", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ514TL06", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SP29TL08",
    name: "3L shell pants",
    price: 620000,
    usPrice: 600,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "3 layered waterproof shell pants",
      "Black / Gray"
    ],
    prodDescD: [
      "Articulated construction",
      "3m reflective parts",
      "Gusset crotch",
      "2 side pockets, 2 thigh cargo pockets ",
      "Gusset pockets ",
      "Adjustable hem and waist",
      "Adjustable fit (thigh and calf)",
      "YKK waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SP29TL08/XPH24SP29TL08.gif",
    images: [
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_1.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_2.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_3.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_4.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_5.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_6.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_7.webp",
      "xItem/i/shop/products/XPH24SP29TL08/detail/XPH24SP29TL08_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SP029TL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP129TL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP229TL08", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SP329TL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP429TL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP529TL08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SP30TL06",
    name: "3L shell pants",
    price: 620000,
    usPrice: 600,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "3 layered waterproof shell pants",
      "Gray / Red"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset crotch",
      "2 side pockets, 2 thigh cargo pockets ",
      "Gusset pockets ",
      "Adjustable hem and waist",
      "Adjustable fit (thigh and calf)",
      "YKK waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SP30TL06/XPH24SP30TL06.gif",
    images: [
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_1.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_2.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_3.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_4.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_5.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_6.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_7.webp",
      "xItem/i/shop/products/XPH24SP30TL06/detail/XPH24SP30TL06_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SP030TL06", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP130TL06", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP230TL06", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SP330TL06", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP430TL06", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP530TL06", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SP20BD07",
    name: "Cargo pants",
    price: 450000,
    usPrice: 340,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "10 pocket origami flap cargo pants",
      "White"
    ],
    prodDescD: [
      "Articulated construction",
      "2 Ventilation holes",
      "Gusset crotch",
      "2 side pockets, 2 phone pocket, 2 back pockets",
      "4 origami side pockets",
      "Gusset pockets with snaps (adjustable shape)",
      "Adjustable hem",
      "Adjustable fit (thigh and calf)",
      "YKK waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SP20BD07/XPH24SP20BD07.gif",
    images: [
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_1.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_2.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_3.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_4.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_5.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_6.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_7.webp",
      "xItem/i/shop/products/XPH24SP20BD07/detail/XPH24SP20BD07_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SP020BD07", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP120BD07", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP220BD07", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SP320BD07", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP420BD07", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP520BD07", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SP21CD08",
    name: "Cargo pants",
    price: 450000,
    usPrice: 340,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "10 pocket origami flap cargo pants",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "2 Ventilation holes",
      "Gusset crotch",
      "2 side pockets, 2 phone pocket, 2 back pockets",
      "4 origami side pockets",
      "Gusset pockets with snaps (adjustable shape)",
      "Adjustable hem",
      "Adjustable fit (thigh and calf)",
      "YKK waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SP21CD08/XPH24SP21CD08.gif",
    images: [
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_1.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_2.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_3.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_4.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_5.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_6.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_7.webp",
      "xItem/i/shop/products/XPH24SP21CD08/detail/XPH24SP21CD08_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SP021CD08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP121CD08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP221CD08", size: "M", soldQty: 2, totalQty: 3 },
      { prodCdD: "XPH24SP321CD08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP421CD08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP521CD08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SJ02MR00",
    name: "Metallic Windbreaker Jacket",
    price: 350000,
    usPrice: 300,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Metallic nylon rib lightweight jacket",
      "Red"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "2 ventilation holes on front neck",
      "Thumbhole sleeve",
      "Full zip collar ",
      "YKK Vislon 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SJ02MR00/XPH24SJ02MR00.gif",
    images: [
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_1.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_2.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_3.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_4.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_5.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_6.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_7.webp",
      "xItem/i/shop/products/XPH24SJ02MR00/detail/XPH24SJ02MR00_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SJ002MR00", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ102MR00", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ202MR00", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPH24SJ302MR00", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ402MR00", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ502MR00", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SJ03MR06",
    name: "Metallic Windbreaker Jacket",
    price: 350000,
    usPrice: 270,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Metallic nylon lightweight jacket",
      "Gray"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "2 ventilation holes on front neck",
      "Thumbhole sleeve",
      "Full zip collar ",
      "YKK Vislon 2way zipper",
      "Size guide on the last slide"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SJ03MR06/XPH24SJ03MR06_240920.gif",
    images: [
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_1.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_2.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_3.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_4.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_5.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_6.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_7.webp",
      "xItem/i/shop/products/XPH24SJ03MR06/detail/XPH24SJ03MR06_240920_8.webp"
    ],
    variants: [
      { prodCdD: "XPH24SJ003MR06", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ103MR06", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ203MR06", size: "M", soldQty: 2, totalQty: 15 },
      { prodCdD: "XPH24SJ303MR06", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ403MR06", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ503MR06", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SJ04MR08",
    name: "Metallic Windbreaker Jacket",
    price: 350000,
    usPrice: 270,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Metallic nylon lightweight jacket",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "2 ventilation holes on front neck",
      "Thumbhole sleeve",
      "Full zip collar ",
      "YKK Vislon 2way zipper",
      "Size guide on the last slide"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SJ04MR08/XPH24SJ04MR08_240920.gif",
    images: [
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_1.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_2.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_3.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_4.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_5.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_6.webp",
      "xItem/i/shop/products/XPH24SJ04MR08/detail/XPH24SJ04MR08_240920_7.webp"
    ],
    variants: [
      { prodCdD: "XPH24SJ004MR08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ104MR08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ204MR08", size: "M", soldQty: 0, totalQty: 15 },
      { prodCdD: "XPH24SJ304MR08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ404MR08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SJ504MR08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SP18SM08",
    name: "Sports shorts",
    price: 200000,
    usPrice: 180,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Ventilated lightweight shorts",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Ventilation sidelines",
      "Gusset crotch",
      "2 side pockets, 1 Jacket hanger pocket ",
      "Gusset pockets",
      "3m reflective prints",
      "Adjustable elastic waist band"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SP18SM08/XPU24SP18SM08.gif",
    images: [
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_1.webp",
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_2.webp",
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_3.webp",
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_4.webp",
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_5.webp",
      "xItem/i/shop/products/XPU24SP18SM08/detail/XPU24SP18SM08_6.webp"
    ],
    variants: [
      { prodCdD: "XPU24SP018SM08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP118SM08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP218SM08", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPU24SP318SM08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP418SM08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP518SM08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SP19SM06",
    name: "Sports shorts",
    price: 200000,
    usPrice: 180,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Ventilated lightweight shorts",
      "Gray"
    ],
    prodDescD: [
      "Articulated construction",
      "Ventilation sidelines",
      "Gusset crotch",
      "2 side pockets, 1 Jacket hanger pocket ",
      "Gusset pockets",
      "3m reflective prints",
      "Adjustable elastic waist band"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SP19SM06/XPU24SP19SM06.gif",
    images: [
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_1.webp",
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_2.webp",
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_3.webp",
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_4.webp",
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_5.webp",
      "xItem/i/shop/products/XPU24SP19SM06/detail/XPU24SP19SM06_6.webp"
    ],
    variants: [
      { prodCdD: "XPU24SP019SM06", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP119SM06", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP219SM06", size: "M", soldQty: 0, totalQty: 1 },
      { prodCdD: "XPU24SP319SM06", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP419SM06", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP519SM06", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SJ09SJ07",
    name: "Track jacket",
    price: 320000,
    usPrice: 300,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "High neck jersey sideline jacket",
      "White / Red"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "Seamless high neck collar",
      "YKK Vislon 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SJ09SJ07/XPU24SJ09SJ07.gif",
    images: [
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_1.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_2.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_3.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_4.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_5.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_6.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_7.webp",
      "xItem/i/shop/products/XPU24SJ09SJ07/detail/XPU24SJ09SJ07_8.webp"
    ],
    variants: [
      { prodCdD: "XPU24SJ009SJ07", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ109SJ07", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ209SJ07", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XPU24SJ309SJ07", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ409SJ07", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ509SJ07", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SJ10SJ08",
    name: "Track jacket",
    price: 320000,
    usPrice: 300,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "High neck jersey sideline jacket",
      "Black / White"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "Seamless high neck collar",
      "YKK Vislon 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SJ10SJ08/XPU24SJ10SJ08.gif",
    images: [
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_1.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_2.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_3.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_4.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_5.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_6.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_7.webp",
      "xItem/i/shop/products/XPU24SJ10SJ08/detail/XPU24SJ10SJ08_8.webp"
    ],
    variants: [
      { prodCdD: "XPU24SJ010SJ08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ110SJ08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ210SJ08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ310SJ08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ410SJ08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ510SJ08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SJ11SJ00",
    name: "Track jacket",
    price: 320000,
    usPrice: 300,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "High neck jersey sideline jacket",
      "Burgundy / white"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset sleeve",
      "Seamless high neck collar",
      "YKK Vislon 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SJ11SJ00/XPU24SJ11SJ00.gif",
    images: [
      "xItem/i/shop/products/XPU24SJ11SJ00/detail/XPU24SJ11SJ00_1.webp"
    ],
    variants: [
      { prodCdD: "XPU24SJ011SJ00", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ111SJ00", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ211SJ00", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ311SJ00", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ411SJ00", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SJ511SJ00", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SP26SJ08",
    name: "Track pants",
    price: 280000,
    usPrice: 260,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Flared sideline jersey pants",
      "Black / White"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset crotch",
      "2 side pockets",
      "Single knee tuck",
      "Adjustable elastic waist band"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SP26SJ08/XPU24SP26SJ08.gif",
    images: [
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_1.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_2.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_3.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_4.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_5.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_6.webp",
      "xItem/i/shop/products/XPU24SP26SJ08/detail/XPU24SP26SJ08_7.webp"
    ],
    variants: [
      { prodCdD: "XPU24SP026SJ08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP126SJ08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP226SJ08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP326SJ08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP426SJ08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP526SJ08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SP27SJ00",
    name: "Track pants",
    price: 280000,
    usPrice: 260,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Flared sideline jersey pants",
      "Red / white"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset crotch",
      "2 side pockets",
      "Single knee tuck",
      "Adjustable elastic waist band"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SP27SJ00/XPU24SP27SJ00.gif",
    images: [
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_1.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_2.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_3.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_4.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_5.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_6.webp",
      "xItem/i/shop/products/XPU24SP27SJ00/detail/XPU24SP27SJ00_7.webp"
    ],
    variants: [
      { prodCdD: "XPU24SP027SJ00", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP127SJ00", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP227SJ00", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP327SJ00", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP427SJ00", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP527SJ00", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPU24SP28SJ00",
    name: "Track pants",
    price: 280000,
    usPrice: 260,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Flared sideline jersey pants",
      "Burgundy / white"
    ],
    prodDescD: [
      "Articulated construction",
      "Gusset crotch",
      "2 side pockets",
      "Single knee tuck",
      "Adjustable elastic waist band"
    ],
    imageSrc: "xItem/i/shop/products/XPU24SP28SJ00/XPU24SP28SJ00.gif",
    images: [
      "xItem/i/shop/products/XPU24SP28SJ00/detail/XPU24SP28SJ00_1.webp"
    ],
    variants: [
      { prodCdD: "XPU24SP028SJ00", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP128SJ00", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP228SJ00", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP328SJ00", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP428SJ00", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPU24SP528SJ00", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XPH24SP22ST08",
    name: "XIP 6.0 pants",
    price: 350000,
    usPrice: 280,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XP",
    season: "24SS",
    prodDesc: [
      "Flared fit stretch pants",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Single knee tuck",
      "3m reflective parts and logo",
      "Gusset crotch",
      "2 side pockets, 2 back pockets, 2 calf pockets ",
      "Gusset pockets with holed flaps",
      "Carabiner buckle on beltloop",
      "Pre-order Item",
      "Ships in 3 - 4 weeks",
      "Please note that pre-order items cannot be",
      "exchanged and are non-refundable"
    ],
    imageSrc: "xItem/i/shop/products/XPH24SP22ST08/XPH24SP22ST08.gif",
    images: [
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_1.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_2.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_3.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_4.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_5.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_6.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_7.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_8.webp",
      "xItem/i/shop/products/XPH24SP22ST08/detail/XPH24SP22ST08_9.webp"
    ],
    variants: [
      { prodCdD: "XPH24SP022ST08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP122ST08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP222ST08", size: "M", soldQty: 1, totalQty: 6 },
      { prodCdD: "XPH24SP322ST08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP422ST08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XPH24SP522ST08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMH24SJ05RT08",
    name: "Fidlock convertible jacket",
    price: 650000,
    usPrice: 610,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Detachable sleeve jacket/vest ",
      "Black / Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Padded shoulder",
      "Action slits",
      "adjustable sleeve",
      "V-shaped high neck collar ",
      "Magnetic Fidlock snaps",
      "YKK waterproof 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SJ05RT08/XMH24SJ05RT08.gif",
    images: [
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_1.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_2.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_3.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_4.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_5.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_6.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_7.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_8.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_9.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_10.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_11.webp",
      "xItem/i/shop/products/XMH24SJ05RT08/detail/XMH24SJ05RT08_12.webp"
    ],
    variants: [
      { prodCdD: "XMH24SJ005RT08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ105RT08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ205RT08", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XMH24SJ305RT08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ405RT08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ505RT08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMH24SJ06TL07",
    name: "Fidlock convertible jacket",
    price: 650000,
    usPrice: 610,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Detachable sleeve jacket/vest ",
      "Black / White"
    ],
    prodDescD: [
      "Articulated construction",
      "Padded shoulder",
      "Action slits",
      "adjustable sleeve",
      "V-shaped high neck collar ",
      "Magnetic Fidlock snaps",
      "YKK waterproof 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SJ06TL07/XMH24SJ06TL07.gif",
    images: [
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_1.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_2.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_3.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_4.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_5.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_6.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_7.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_8.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_9.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_10.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_11.webp",
      "xItem/i/shop/products/XMH24SJ06TL07/detail/XMH24SJ06TL07_12.webp"
    ],
    variants: [
      { prodCdD: "XMH24SJ006TL07", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ106TL07", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ206TL07", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XMH24SJ306TL07", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ406TL07", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ506TL07", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMH24SP24TL07",
    name: "Fidlock detachable pants",
    price: 600000,
    usPrice: 500,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Detachable leg gaiter pants",
      "White / Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Magnetic Fidlock snaps",
      "Gusset crotch",
      "2 side pockets, 2 back pockets",
      "Adjustable silhouette with back zip",
      "Tapered- straight- flared (3 adjustable shapes)",
      "YKK waterproof zipper",
      "YKK Vislon waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SP24TL07/XMH24SP24TL07.gif",
    images: [
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_1.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_2.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_3.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_4.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_5.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_6.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_7.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_8.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_9.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_10.webp",
      "xItem/i/shop/products/XMH24SP24TL07/detail/XMH24SP24TL07_11.webp"
    ],
    variants: [
      { prodCdD: "XMH24SP024TL07", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP124TL07", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP224TL07", size: "M", soldQty: 1, totalQty: 1 },
      { prodCdD: "XMH24SP324TL07", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP424TL07", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP524TL07", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMH24SP25RT08",
    name: "Fidlock detachable pants",
    price: 600000,
    usPrice: 500,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Detachable leg gaiter pants",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Magnetic Fidlock snaps",
      "Gusset crotch",
      "2 side pockets, 2 back pockets",
      "Adjustable silhouette with back zip",
      "Tapered- straight- flared (3 adjustable shapes)",
      "YKK waterproof zipper",
      "YKK Vislon waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SP25RT08/XMH24SP25RT08.gif",
    images: [
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_1.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_2.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_3.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_4.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_5.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_6.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_7.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_8.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_9.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_10.webp",
      "xItem/i/shop/products/XMH24SP25RT08/detail/XMH24SP25RT08_11.webp"
    ],
    variants: [
      { prodCdD: "XMH24SP025RT08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP125RT08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP225RT08", size: "M", soldQty: 0, totalQty: 1 },
      { prodCdD: "XMH24SP325RT08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP425RT08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP525RT08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMU24SJ07SL08",
    name: "Gakuran Jacket",
    price: 550000,
    usPrice: 500,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "High neck tailored Jacket",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Padded shoulder",
      "Gusset sleeve",
      "Mesh lining",
      "Back ventilation",
      "adjustable sleeve",
      "high neck collar ",
      "Cobrax Zero snaps"
    ],
    imageSrc: "xItem/i/shop/products/XMU24SJ07SL08/XMU24SJ07SL08.gif",
    images: [
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_1.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_2.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_3.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_4.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_5.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_6.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_7.webp",
      "xItem/i/shop/products/XMU24SJ07SL08/detail/XMU24SJ07SL08_8.webp"
    ],
    variants: [
      { prodCdD: "XMU24SJ007SL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ107SL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ207SL08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ307SL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ407SL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ507SL08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMH24SP23SL08",
    name: "Gakuran pants",
    price: 400000,
    usPrice: 370,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Flared wide fit cargo pants",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Knee tucks",
      "Gusset crotch",
      "4 ventilation holes",
      "2 side pockets, 2 back pockets, 2 calf pockets ",
      "Gusset pockets with snaps (adjustable shape)",
      "Adjustable hem",
      "Adjustable thigh",
      "Carabiner buckle on beltloop",
      "YKK waterproof zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SP23SL08/XMH24SP23SL08.gif",
    images: [
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_1.webp",
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_2.webp",
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_3.webp",
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_4.webp",
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_5.webp",
      "xItem/i/shop/products/XMH24SP23SL08/detail/XMH24SP23SL08_6.webp"
    ],
    variants: [
      { prodCdD: "XMH24SP023SL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP123SL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP223SL08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP323SL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP423SL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SP523SL08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMF24SS31GB00",
    name: "Half pleated wrap skirt",
    price: 200000,
    usPrice: 180,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Half pleated Gurkha style wrap skirt",
      "Adjustable waist"
    ],
    prodDescD: [
      "G buckle on both sides"
    ],
    imageSrc: "xItem/i/shop/products/XMF24SS31GB00/XMF24SS31GB00.gif",
    images: [
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_1.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_2.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_3.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_4.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_5.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_6.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_7.webp",
      "xItem/i/shop/products/XMF24SS31GB00/detail/XMF24SS31GB00_8.webp"
    ],
    variants: [
      { prodCdD: "XMF24SS031GB00", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS131GB00", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS231GB00", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS331GB00", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS431GB00", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS531GB00", size: "ONE SIZE", soldQty: 1, totalQty: 1 }
    ],
  },
  {
    prodCd: "XMU24SV15GD06",
    name: "Harness vest",
    price: 350000,
    usPrice: 300,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Harness vest with 2 pouches",
      "Gray / Red"
    ],
    prodDescD: [
      "2 detachable zipped pouches",
      "YKK waterproof zipper",
      "Joint buckles",
      "Pre-order Item",
      "Ships in 3 - 4weeks",
      "Please note that pre-order items cannot be ",
      "exchanged and are non-refundable"
    ],
    imageSrc: "xItem/i/shop/products/XMU24SV15GD06/XMU24SV15GD06.gif",
    images: [
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_1.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_2.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_3.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_4.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_5.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_6.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_7.webp",
      "xItem/i/shop/products/XMU24SV15GD06/detail/XMU24SV15GD06_8.webp"
    ],
    variants: [
      { prodCdD: "XMU24SV015GD06", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV115GD06", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV215GD06", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV315GD06", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV415GD06", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV515GD06", size: "ONE SIZE", soldQty: 1, totalQty: 4 }
    ],
  },
  {
    prodCd: "XMU24SV16GD08",
    name: "Harness vest",
    price: 350000,
    usPrice: 300,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Harness vest with 2 pouches",
      "Black / Gray"
    ],
    prodDescD: [
      "2 detachable zipped pouches",
      "YKK waterproof zipper",
      "Joint buckles",
      "Pre-order Item",
      "Ships in 3 - 4 weeks",
      "Please note that pre-order items cannot be",
      "exchanged and are non-refundable"
    ],
    imageSrc: "xItem/i/shop/products/XMU24SV16GD08/XMU24SV16GD08.gif",
    images: [
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_1.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_2.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_3.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_4.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_5.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_6.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_7.webp",
      "xItem/i/shop/products/XMU24SV16GD08/detail/XMU24SV16GD08_8.webp"
    ],
    variants: [
      { prodCdD: "XMU24SV016GD08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV116GD08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV216GD08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV316GD08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV416GD08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV516GD08", size: "ONE SIZE", soldQty: 2, totalQty: 4 }
    ],
  },
  {
    prodCd: "XMU24SV17XP08",
    name: "Harness vest",
    price: 370000,
    usPrice: 320,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Harness vest with 2 pouches",
      "Black (X-Pac)"
    ],
    prodDescD: [
      "2 detachable zipped pouches",
      "YKK waterproof zipper",
      "Joint buckles",
      "X-pac Fabric"
    ],
    imageSrc: "xItem/i/shop/products/XMU24SV17XP08/XMU24SV17XP08.gif",
    images: [
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_1.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_2.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_3.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_4.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_5.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_6.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_7.webp",
      "xItem/i/shop/products/XMU24SV17XP08/detail/XMU24SV17XP08_8.webp"
    ],
    variants: [
      { prodCdD: "XMU24SV017XP08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV117XP08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV217XP08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV317XP08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV417XP08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SV517XP08", size: "ONE SIZE", soldQty: 1, totalQty: 1 }
    ],
  },
  {
    prodCd: "XMH24SJ12SL08",
    name: "Hatch-open jacket",
    price: 600000,
    usPrice: 500,
    sizeOpt: [
      "M"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Back stretch jacket",
      "Black"
    ],
    prodDescD: [
      "Articulated construction",
      "Thumbhole sleeve",
      "2 ventilation holes",
      "Full zip collar ",
      "YKK Vislon 2way zipper",
      "Pre-order Item",
      "Ships in 3 - 4 weeks",
      "Please note that pre-order items cannot be",
      "exchanged and are non-refundable"
    ],
    imageSrc: "xItem/i/shop/products/XMH24SJ12SL08/XMH24SJ12SL08.gif",
    images: [
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_1.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_2.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_3.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_4.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_5.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_6.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_7.webp",
      "xItem/i/shop/products/XMH24SJ12SL08/detail/XMH24SJ12SL08_8.webp"
    ],
    variants: [
      { prodCdD: "XMH24SJ012SL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ112SL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ212SL08", size: "M", soldQty: 3, totalQty: 3 },
      { prodCdD: "XMH24SJ312SL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ412SL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMH24SJ512SL08", size: "ONE SIZE", soldQty: 0, totalQty: 0 }
    ],
  },
  {
    prodCd: "XMU24SJ01TL07",
    name: "Racing Jacket",
    price: 670000,
    usPrice: 550,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Racing jacket",
      "Cropped and oversized fit"
    ],
    prodDescD: [
      "Gusset sleeve",
      "Mesh lining",
      "Padded shoulder",
      "Adjustable hem and sleeve",
      "4 ventilation holes on front chest",
      "YKK Vislon 2way zipper"
    ],
    imageSrc: "xItem/i/shop/products/XMU24SJ01TL07/XMU24SJ01TL07.gif",
    images: [
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_1.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_2.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_3.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_4.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_5.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_6.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_7.webp",
      "xItem/i/shop/products/XMU24SJ01TL07/detail/XMU24SJ01TL07_8.webp"
    ],
    variants: [
      { prodCdD: "XMU24SJ001TL07", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ101TL07", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ201TL07", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ301TL07", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ401TL07", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMU24SJ501TL07", size: "ONE SIZE", soldQty: 0, totalQty: 1 }
    ],
  },
  {
    prodCd: "XMF24SS32SL08",
    name: "Wrap skirt",
    price: 230000,
    usPrice: 210,
    sizeOpt: [
      "ONE SIZE"
    ],
    status: "2",
    line: "XM",
    season: "24SS",
    prodDesc: [
      "Gurkha style wrap skirt",
      "Adjustable waist"
    ],
    prodDescD: [
      "2 ventilation holes",
      "2 back pockets",
      "3m reflective detail "
    ],
    imageSrc: "xItem/i/shop/products/XMF24SS32SL08/XMF24SS32SL08.gif",
    images: [
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_1.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_2.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_3.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_4.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_5.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_6.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_7.webp",
      "xItem/i/shop/products/XMF24SS32SL08/detail/XMF24SS32SL08_8.webp"
    ],
    variants: [
      { prodCdD: "XMF24SS032SL08", size: "XS", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS132SL08", size: "S", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS232SL08", size: "M", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS332SL08", size: "L", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS432SL08", size: "XL", soldQty: 0, totalQty: 0 },
      { prodCdD: "XMF24SS532SL08", size: "ONE SIZE", soldQty: 1, totalQty: 1 }
    ],
  },
];

export function getProduct(prodCd: string): Product | undefined {
  return PRODUCTS.find((p) => p.prodCd === prodCd);
}

export function toProductImageUrl(relativePath: string): string {
  return `/${relativePath}`;
}
