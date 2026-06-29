import Link from "next/link";
import Image from "next/image";

export default function History() {
  return (
    <div className="container">
      <nav className="nav-menu">
        <Link href="/" className="nav-link">Início</Link>
        <Link href="/about" className="nav-link">Sobre</Link>
        <Link href="/history" className="nav-link">História</Link>
        <Link href="/joopu" className="nav-link">Categorias</Link>
      </nav>

      <h1>Grandes Estudiosos</h1>
      <p>Abaixo estão os pesquisadores históricos que decifraram os mistérios da evolução dos anfíbios através dos séculos:</p>

      <div className="illustration-box">
        {/* Ilustração: Livro Aberto / Ciência */}
        
      </div>

      <table className="history-table">
        <thead>
          <tr>
            <th>Cientista</th>
            <th>Período Histórico</th>
            <th>Legado Científico</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div>
              <td><strong>Carlos Linneu</strong>
                <Image src={"/lineu.jpg"}
                        width={500}
                        height={500}
                        alt="CArlos Linneu"
                        />
              </td>
              <td>Século XVIII</td>
              <td>Pioneiro na categorização biológica oficial dos primeiros anfíbios da história moderna.</td>
            </div>
          </tr>
          <tr>
            <div>
              <td><strong>George K. Noble</strong>
                <Image src={"/George_Noble_2019_(cropped).png"}
                        width={500}
                        height={500}
                        alt="George k. Noble"
                        />
              </td>
              <td>Século XX</td>
              <td>Fundou análises profundas sobre a neurobiologia e comportamento social dos anuros.</td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  );
}