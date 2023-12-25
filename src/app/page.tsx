import Link from "next/link";
import homeImg from "/public/images/home.jpg"
import Hero from "@/components/hero";


export default function HomePage() {
  return (
    <>
      <Hero imgData={homeImg} imgAlt="Home Page" title="Professional Cloud Hosting"/>
    </>
  )
}
