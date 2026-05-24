export default function EncomiendaYALanding() {
  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white font-sans">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#FFC300] flex items-center justify-center text-black font-black text-xl shadow-lg">
              E
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                Encomienda<span className="text-[#FFC300]">YA</span>
              </h1>
              <p className="text-xs text-gray-400">
                Tu envío en movimiento.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#como-funciona" className="hover:text-[#FFC300] transition">Cómo funciona</a>
            <a href="#beneficios" className="hover:text-[#FFC300] transition">Beneficios</a>
            <a href="#app" className="hover:text-[#FFC300] transition">App</a>
            <a href="#contacto" className="hover:text-[#FFC300] transition">Contacto</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-24 px-6">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#FFC300,transparent_40%)]"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-white/10 rounded-full px-4 py-2 mb-8 text-sm text-gray-300">
              🚀 Startup logística inteligente para ciudades medianas
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8">
              La nueva forma inteligente de enviar
              <span className="text-[#FFC300]"> encomiendas.</span>
            </h2>

            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Conectamos personas, comercios y repartidores mediante tecnología en tiempo real para crear entregas más rápidas, simples y seguras.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#FFC300] hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl text-lg transition shadow-2xl shadow-yellow-500/20">
                Enviar ahora
              </button>

              <button className="border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] text-white px-8 py-4 rounded-2xl text-lg transition bg-white/5">
                Quiero ser repartidor
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              <div>
                <h3 className="text-3xl font-black text-[#FFC300]">24/7</h3>
                <p className="text-gray-400 text-sm">Seguimiento en tiempo real</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#FFC300]">+1000</h3>
                <p className="text-gray-400 text-sm">Entregas proyectadas</p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-[#FFC300]">15 min</h3>
                <p className="text-gray-400 text-sm">Tiempo promedio urbano</p>
              </div>
            </div>
          </div>

          {/* APP MOCKUP */}
          <div className="relative flex justify-center">
            <div className="absolute w-96 h-96 bg-[#FFC300] blur-3xl opacity-20 rounded-full"></div>

            <div className="relative bg-[#121212] border border-white/10 rounded-[40px] p-4 shadow-2xl w-[340px]">
              <div className="bg-black rounded-[30px] overflow-hidden border border-white/5">
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-lg">Nuevo envío</h3>
                    <p className="text-gray-500 text-sm">Tu pedido en tiempo real</p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#FFC300] text-black font-bold flex items-center justify-center">
                    E
                  </div>
                </div>

                <div className="p-6 space-y-5">
                  <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Origen</p>
                    <p className="font-medium">Av. San Martín 1234</p>
                  </div>

                  <div className="bg-[#1A1A1A] rounded-2xl p-4 border border-white/5">
                    <p className="text-xs text-gray-500 mb-1">Destino</p>
                    <p className="font-medium">Belgrano 567, Junín</p>
                  </div>

                  <div className="rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-black h-56 border border-white/5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#FFC300,transparent_60%)]"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-[#FFC300] mx-auto mb-4 flex items-center justify-center text-black text-2xl">
                        📍
                      </div>
                      <p className="font-bold text-lg">Seguimiento en vivo</p>
                      <p className="text-gray-500 text-sm">ETA: 15 minutos</p>
                    </div>
                  </div>

                  <button className="w-full bg-[#FFC300] hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl transition">
                    Confirmar envío
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[#FFC300] uppercase tracking-[0.3em] text-sm mb-4">
              Cómo funciona
            </p>

            <h2 className="text-5xl font-black mb-6">
              Envíos simples en 3 pasos.
            </h2>

            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Una experiencia rápida, moderna y optimizada para personas y comercios.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Solicitá el envío",
                desc: "Ingresá origen, destino y detalles del paquete desde la app.",
              },
              {
                step: "02",
                title: "Asignamos repartidor",
                desc: "El sistema encuentra automáticamente al repartidor ideal.",
              },
              {
                step: "03",
                title: "Seguimiento en vivo",
                desc: "Visualizá el recorrido del paquete en tiempo real.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#151515] border border-white/5 rounded-3xl p-10 hover:border-[#FFC300]/30 transition"
              >
                <div className="text-[#FFC300] text-5xl font-black mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="beneficios" className="py-24 px-6 bg-[#111111] border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clientes",
              benefits: ["Tracking en vivo", "Entregas rápidas", "Pagos digitales", "Seguridad"],
            },
            {
              title: "Comercios",
              benefits: ["Logística tercerizada", "Menos costos", "Más entregas", "Operación escalable"],
            },
            {
              title: "Repartidores",
              benefits: ["Ingresos flexibles", "Horarios libres", "Cobros rápidos", "Más pedidos"],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-black border border-white/5 rounded-3xl p-10"
            >
              <h3 className="text-3xl font-black mb-8 text-[#FFC300]">
                {card.title}
              </h3>

              <div className="space-y-5">
                {card.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-4 text-lg"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#FFC300]"></div>
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APP SECTION */}
      <section id="app" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[#FFC300] uppercase tracking-[0.3em] text-sm mb-4">
              Tecnología en tiempo real
            </p>

            <h2 className="text-5xl font-black leading-tight mb-8">
              Una experiencia moderna para usuarios y repartidores.
            </h2>

            <div className="space-y-8">
              {[
                {
                  title: "Tracking GPS",
                  desc: "Seguimiento preciso del recorrido del paquete.",
                },
                {
                  title: "Pagos integrados",
                  desc: "Integración con Mercado Pago y métodos digitales.",
                },
                {
                  title: "Optimización logística",
                  desc: "Asignación inteligente de repartidores cercanos.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFC300] text-black flex items-center justify-center font-black text-xl shrink-0">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((card) => (
              <div
                key={card}
                className="bg-[#151515] border border-white/5 rounded-[30px] h-72 flex items-center justify-center text-center p-6"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-[#FFC300] mx-auto mb-5 flex items-center justify-center text-black text-2xl">
                    📦
                  </div>
                  <h3 className="text-xl font-bold mb-2">UI Premium</h3>
                  <p className="text-gray-500 text-sm">
                    Interfaz optimizada para mobile y tracking en tiempo real.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#FFC300,transparent_40%)]"></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Empezá a enviar de forma más inteligente.
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            EncomiendaYA conecta tecnología, logística y personas para crear la próxima generación de entregas regionales.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="bg-[#FFC300] hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-2xl text-lg transition shadow-2xl shadow-yellow-500/20">
              Solicitar acceso
            </button>

            <button className="border border-white/10 hover:border-[#FFC300] hover:text-[#FFC300] text-white px-10 py-5 rounded-2xl text-lg transition bg-white/5">
              Presentación para inversores
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contacto"
        className="border-t border-white/5 py-12 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-black mb-2">
              Encomienda<span className="text-[#FFC300]">YA</span>
            </h3>
            <p className="text-gray-500">
              La infraestructura logística inteligente para ciudades medianas.
            </p>
          </div>

          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-[#FFC300] transition">Instagram</a>
            <a href="#" className="hover:text-[#FFC300] transition">LinkedIn</a>
            <a href="#" className="hover:text-[#FFC300] transition">Contacto</a>
            <a href="#" className="hover:text-[#FFC300] transition">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
