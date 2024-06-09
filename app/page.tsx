import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Paul Tiberghien</h1>
      <Link href="/Experience">Experience</Link><br></br>
      <Link href="/Projects">Projects</Link><br></br>
      <Link href="/Videography">Videography</Link><br></br>
      <Link href="/Interests">Interests</Link><br></br>
      <Link href="/Blog">Blog</Link><br></br>
      <h1>Most discomfort I've sought so far</h1>
    </main>
  );
}
