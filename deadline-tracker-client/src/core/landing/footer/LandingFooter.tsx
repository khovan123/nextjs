import Image from "next/image";
import IconCustom from "./IconCustom";
import Widget from "./Widget";

export default function LandingFooter() {
  return (
    <section className="w-full h-full pt-16">
      <div className="mx-56 grid grid-cols-4 items-start justify-items-center pb-36">
        <Widget>
          <h3 className="text-blue-500 font-semibold text-lg">
            Deadline Tracker
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            assumenda minus eaque consectetur, qui perspiciatis eveniet
            doloribus exercitationem commodi adipisci aliquam corrupti! Incidunt
            iure ratione deleniti natus, nisi voluptate ipsam.
          </p>
          <div className="flex gap-2 my-2 ">
            <IconCustom src="/twitter.svg" alt="" />
            <IconCustom src="/facebook.svg" alt="" />
            <IconCustom src="/instagram.svg" alt="" />
          </div>
        </Widget>
        <Widget>
          <h3 className=" font-semibold text-lg">Explore</h3>
          <ul>
            <li>
              <span>About Us</span>
            </li>
            <li>
              <span>Services</span>
            </li>
            <li>
              <span>Workds</span>
            </li>
            <li>
              <span>Blog</span>
            </li>
            <li>
              <span>Contact Us</span>
            </li>
          </ul>
        </Widget>
        <Widget>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul>
            <li>
              <span>Contact Us</span>
            </li>
            <li>
              <span>Pricing</span>
            </li>
            <li>
              <span>Terms & Conditions</span>
            </li>
            <li>
              <span>Privacy</span>
            </li>
            <li>
              <span>Feedbacks</span>
            </li>
          </ul>
        </Widget>
        <Widget>
          <h3 className=" font-semibold text-lg">Have a Question?</h3>
          <ul>
            <li>
              <span>Dien Thang Nam, Dien Ban, Quang Nam, Viet Nam</span>
            </li>
            <li>
              <span>0767348675</span>
            </li>
            <li>
              <span>minhpnq1807@gmail.com</span>
            </li>
          </ul>
        </Widget>
      </div>
      <div className="bg-slate-700 py-10">
        <p className="text-gray-500 text-xs text-center">
          Copyright 2024 &copy;2024 All rights reserved
        </p>
      </div>
    </section>
  );
}
