import Image from "next/image";

export default function SectionAboutUs() {
  return (
    <section
      title="about-us"
      className="flex justify-center items-center gap-6"
    >
      <Image src="/checklist.svg" alt="" width={500} height={500} />
      <article className="flex flex-col gap-4">
        <h3 className="text-blue-700 font-semibold text-sm">ABOUT US</h3>
        <h2 className="text-3xl mb-3">A Software Engineering Team</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde enim
          architecto laborum sit. Sint, quo nulla. Provident consectetur,
          sapiente aperiam, eligendi deserunt asperiores a architecto et beatae
          repudiandae maiores fuga? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Odit incidunt, qui reprehenderit, dolor tempora
          perspiciatis harum debitis voluptatum fugit consequuntur consectetur
          cupiditate dolores accusantium sed repellendus laudantium. Quasi,
          tempora at.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam qui
          eligendi eos aliquam beatae ex voluptate officia enim fugit. Ipsum
          odio illum expedita reiciendis cum delectus incidunt, doloribus
          cupiditate nisi?
        </p>
      </article>
    </section>
  );
}
