import Image from "next/image";

export default function NotFound() {
  return (
    <div>
      <Image src="/logo-black.png" alt="EliHelp Logo" width={60} height={20} />
      <div>
        <h1>AINDA ESTAMOS EM CONSTRUÇÃO.</h1>
      </div>
      <h2>Agradecemos por usar nossos serviços!!</h2>
      <h2>
        Tenha paciência, estão todos fazendo o melhor que podem para resolver
        tudo...
      </h2>
    </div>
  );
}
