import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <nav className="nav-menu">
        <Link href="/" className="nav-link">Início</Link>
        <Link href="/about" className="nav-link">Sobre</Link>
        <Link href="/history" className="nav-link">História</Link>
        <Link href="/joopu" className="nav-link">Categorias</Link>
      </nav>

      <h1>Bem-vindo ao Portal dos Sapinhos 🐸</h1>
      
      <div className="illustration-box">
        <Image src={"/anfibios3.jpg"}
        width={500}
        height={500}
        alt="sapinho"
        />
      </div>

      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 30px' }}>
        Descubra o fascinante universo dos anfíbios anuros. Navegue pelas seções acima para explorar curiosidades biológicas, fatos históricos e suas incríveis categorias.
      </p>
    </div>
  );
}