export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      {/* Base genética */}
      <section id="genetica" className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-[#4AAD52]">
        <h2 className="text-2xl font-semibold text-[#4AAD52] mb-3">Base Genética da Doença</h2>
        <p>
          A Anemia Falciforme é causada por uma mutação no gene da hemoglobina (HBB). 
          Essa mutação altera a forma das hemácias, que ficam em formato de foice, 
          dificultando o transporte de oxigênio e causando complicações.
        </p>
      </section>

      {/* Sequenciamento */}
      <section id="sequenciamento" className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-[#77567A]">
        <h2 className="text-2xl font-semibold text-[#77567A] mb-3">Sequenciamento Genético</h2>
        <p>
          O sequenciamento de DNA permite identificar rapidamente a mutação no gene HBB. 
          Isso ajuda médicos a diagnosticar precocemente e a desenvolver terapias personalizadas.
        </p>
      </section>

      {/* Química */}
      <section id="quimica" className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-[#FFBFA0]">
        <h2 className="text-2xl font-semibold text-[#FFBFA0] mb-3">Princípio Químico</h2>
        <pre className="bg-[#CCD5FF] p-4 rounded mt-3 font-mono overflow-x-auto">
          {`C=C + H₂ → CH-CH₂`}
        </pre>
      </section>

      {/* Física */}
      <section id="fisica" className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-[#2D728F]">
        <h2 className="text-2xl font-semibold text-[#2D728F] mb-3">Aplicação Física</h2>
        <p>
          Propomos cápsulas revestidas com nanopartículas magnéticas. 
          Sob ação de um campo magnético externo, o medicamento é liberado 
          exatamente na região desejada.
        </p>
      </section>

      {/* Matemática */}
      <section id="matematica" className="bg-white shadow-md rounded-2xl p-6 border-l-8 border-[#4AAD52]">
        <h2 className="text-2xl font-semibold text-[#4AAD52] mb-3">Modelagem Matemática</h2>
        <pre className="bg-[#CCD5FF] p-4 rounded mt-3 font-mono overflow-x-auto">
          {`R(t) = t² + 5t + 10`}
        </pre>
        <pre className="bg-[#CCD5FF] p-4 rounded mt-3 font-mono overflow-x-auto">
          {`V = (4/3) · π · r³ = 33,51 cm³`}
        </pre>
      </section>

      {/* Conclusão */}
      <section id="conclusao" className="bg-[#77567A] text-white rounded-2xl p-8 text-center shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Conclusão</h2>
        <p>
          Nossa startup combina ciência e tecnologia para enfrentar a Anemia Falciforme. 
          Com biotecnologia, síntese química e aplicações físicas, visamos um futuro com terapias mais eficazes.
        </p>
      </section>
    </main>
  );
}
