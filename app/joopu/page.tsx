import Link from "next/link";
import Image from "next/image";


export default function Joopu() {
  return (
    <div className="container">
      <nav className="nav-menu">
        <Link href="/" className="nav-link">Início</Link>
        <Link href="/about" className="nav-link">Sobre</Link>
        <Link href="/history" className="nav-link">História</Link>
        <Link href="/joopu" className="nav-link">Categorias</Link>
      </nav>

      <h1>Categorias de Espécies</h1>
      <p>Cada grupo de sapinhos desenvolveu ferramentas visuais e de sobrevivência completamente diferentes:</p>

      <div className="grid">
        <div className="card">
         
          <h3>Dendrobatidae (Flecha)</h3>
            <Image src={"/images (1).jpg"}
                    width={500}
                    height={500}
                    alt="Dendrobatidae"
                    />
          <p>Usam cores quentes e chamativas para alertar predadores sobre o perigoso veneno contido em suas costas.</p>
        </div>

        <div className="card">         
          <h3>Hylidae (Pererecas de Árvore)</h3>
            <Image src={"/Agalychnis.jpg"}
                    width={500}
                    height={500}
                    alt="Hylidae"
                    />
          <p>Equipados com discos colantes especiais nas pontas de seus dedos, facilitando escaladas verticais perfeitas.</p>
        </div>
      </div>
    </div>
  );
}