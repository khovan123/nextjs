import Image from "next/image";

import React from "react";
export default function IconCustom({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={40}
      height={40}
      className="bg-slate-500 p-3 rounded-lg"
    />
  );
}
