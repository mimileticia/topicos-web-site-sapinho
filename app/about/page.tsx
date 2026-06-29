import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="container">
      <nav className="nav-menu">
        <Link href="/" className="nav-link">Início</Link>
        <Link href="/about" className="nav-link">Sobre</Link>
        <Link href="/history" className="nav-link">História</Link>
        <Link href="/joopu" className="nav-link">Categorias</Link>
      </nav>

      <h1>Biologia e Curiosidades</h1>
      <p>Os sapos possuem adaptações biológicas impressionantes que os permitiram colonizar quase todos os continentes do mundo.</p>

      <div className="grid">
        <div className="card">
          <Image src={"/images.jpg"}
                  width={500}
                  height={500}
                  alt="Pele hidratada"
                  />          
            <h3>Pele Hidratada</h3>
          <p>Sua pele glandular precisa se manter constantemente úmida para auxiliar na respiração cutânea e proteção corporal.</p>
        </div>

        <div className="card">
          <Image src={"/Agalychnis_callidryas.jpg"}
                  width={500}
                  height={500}
                  alt="pulo impulsionado"
                  />  
          <h3>Pulo Impulsionado</h3>
          <p>Músculos traseiros hipertrofiados agem como molas orgânicas perfeitas para escapar rapidamente de predadores.</p>
        </div>
      </div>
    </div>
  );
}