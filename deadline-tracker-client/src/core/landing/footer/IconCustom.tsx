import Image from "next/image";

import React from "react";
export default function IconCustom({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={50}
      height={50}
      className="bg-slate-500 p-4 rounded-lg"
    />
  );
}
