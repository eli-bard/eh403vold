export default function Home() {
  const minhaMensagem = "Estamos trabalhando";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Estamos trabalhando parte 1</h1>
        <p className="text-xl">{minhaMensagem}</p>
      </div>
    </main>
  );
}
