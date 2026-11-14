const phone = '524921614598'
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`
const chat = (text: string) => `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
const whatsapp = chat('Hola, quiero información para mi evento.')

const socials = {
  instagram: 'https://www.instagram.com/sonidofusionzac/',
  tiktok: 'https://www.tiktok.com/@fusion.zac',
  facebook: 'https://www.facebook.com/share/19FXPwsgby/',
}

const packages = [
  { number: '01', name: 'Paquete 1', price: '$2,500', hours: '4 horas', items: ['2 bocinas con tripié de 15”', 'Controlador DJ y mezcladora mixer', '2 micrófonos inalámbricos', '2 luces'], note: 'Aparta tu fecha con $500' },
  { number: '02', name: 'Paquete 2', price: '$3,500', hours: '5 horas', items: ['2 bocinas con tripié de 15”', 'Controlador DJ y mezcladora mixer', '2 micrófonos inalámbricos', '3 luces y 1 barra T para luces', '1 subwoofer de 18”', '30 globos para ambientar'], note: 'Aparta tu fecha con $500' },
  { number: '03', name: 'Paquete 3', price: '$6,000', hours: '5 horas', items: ['2 bocinas con tripié de 15”', 'Controlador DJ y mezcladora mixer', '2 micrófonos inalámbricos', '4 luces robóticas y portería para luces', '1 subwoofer de 18”', '30 globos y máquina de humo pequeña', '1 hora de robot LED'], note: 'Aparta tu fecha con $1,000' },
  { number: '04', name: 'Paquete 4', price: '$8,500', hours: '5 horas', items: ['2 bocinas con tripié de 15”', 'Controlador DJ y mezcladora mixer', '2 micrófonos inalámbricos', '4 luces robóticas y portería para luces', '2 subwoofers de 18”', '30 globos y máquina de humo pequeña', '1 hora de robot LED', 'Carrito de shots'], note: 'Aparta tu fecha con $1,000' },
]

const celebrationExtras = ['Robot LED', 'Carrito de shots', 'Cabina de fotos', 'Pantalla / proyector', 'Cabezón de la máscara', 'Show de la Monja', 'Pirotecnia fría']

const gallery = [
  { src: asset('images/fusion-zac-baile-1.webp'), alt: 'Amigos bailando en una celebración con luces cálidas y azules' },
  { src: asset('images/fusion-zac-baile-2.webp'), alt: 'Invitados disfrutando juntos la pista de baile' },
  { src: asset('images/fusion-zac-hero.webp'), alt: 'Público bailando junto a la Catedral de Zacatecas iluminada' },
  { src: asset('assets/866081418_122238713222318142_2344235169799620781_n (1).jpg'), alt: 'Fusión Zac y Zacatecas al atardecer' },
]

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? '↗' : '→'}</span>
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Fusión Zac, inicio">
          <img src={asset('assets/logolimpio.jpg')} alt="" />
          <span>FUSIÓN <b>ZAC</b></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#paquetes">Paquetes</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Cotiza tu evento <Arrow diagonal /></a>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img className="hero-image" src={asset('images/fusion-zac-hero.webp')} alt="Personas bailando en una celebración junto a la Catedral de Zacatecas iluminada" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> SONIDO · LUZ · SABOR A FIESTA</p>
            <h1 id="hero-title">Que se arme<br />la <em>fiesta.</em></h1>
            <p className="hero-copy">Del primer rolón al último baile. Ponemos el sonido, las luces y la energía para celebrar a lo grande.</p>
            <div className="hero-actions">
              <a className="button button-lime" href="#paquetes">Encuentra tu paquete <Arrow /></a>
              <a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">Cotiza por WhatsApp <Arrow diagonal /></a>
            </div>
          </div>
          <div className="hero-meta"><span>FUSIÓN ZACATECAS</span><span>HECHO PARA CELEBRAR <b>✳</b></span></div>
          <a className="scroll-cue" href="#paquetes" aria-label="Desplazarse a paquetes"><span /> SCROLL</a>
        </section>

        <section className="intro section-wrap" id="nosotros">
          <div className="intro-label">CERCA DE TI SIEMPRE · GUADALUPE, ZACATECAS</div>
          <div className="intro-main">
            <h2>La música reúne.<br /><span>La fiesta la hacemos</span><br />entre todos.</h2>
            <div className="intro-aside"><p>Sonido, iluminación, robots LED y experiencias para que tus XV años, boda o celebración se sientan hasta el último rincón.</p><a className="under-link" href={socials.instagram} target="_blank" rel="noreferrer">Síguenos en Instagram <Arrow diagonal /></a></div>
          </div>
          <div className="intro-bottom"><span>SONIDO FUSIÓN ZAC</span><span>GUADALUPE, ZACATECAS <b>✳</b></span></div>
        </section>

        <section className="packages section-wrap" id="paquetes" aria-labelledby="packages-title">
          <div className="section-heading"><div><span className="section-index">PAQUETES LUZ Y SONIDO · 2026</span><h2 id="packages-title">Tú pones el motivo.<br /><em>Nosotros el ambiente.</em></h2></div><p>Elige el paquete que va con tu fiesta y arma tu cotización por WhatsApp.</p></div>
          <div className="package-grid">{packages.map((item) => <article className={`package-card package-${item.number}`} key={item.number}>
            <div className="package-top"><span className="package-number">{item.number} · {item.hours}</span><span className="package-spark">✳</span></div>
            <h3>{item.name}</h3><div className="package-price">{item.price}<small> MXN</small></div>
            <ul>{item.items.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <div className="package-foot"><span>{item.note}</span><a href={chat(`Hola, me interesa el ${item.name} de ${item.price}. ¿Está disponible para mi fecha?`)} target="_blank" rel="noreferrer" aria-label={`Cotizar ${item.name}`}>Cotizar <Arrow diagonal /></a></div>
          </article>)}</div>
          <p className="package-note"><b>Arma tu fiesta a tu manera:</b> paquetes 1 y 2 apartan fecha con $500; paquetes 3 y 4 con $1,000. Robot, carrito de shots y otros personajes también se pueden rentar por separado. Pantalla, cabina de fotos, cabezón de la máscara, show de la Monja y pirotecnia fría disponibles con costo extra. <b>Contamos con facturación.</b></p>
        </section>

        <section className="services section-wrap" id="servicios">
          <div className="section-heading"><div><span className="section-index">MÁS QUE SONIDO</span><h2>Prende la pista.<br /><em>Enciende la noche.</em></h2></div><p>Arma tu experiencia a tu gusto: en paquete o agregando tus favoritos.</p></div>
          <div className="service-list">
            <article className="service-row"><span className="service-icon" aria-hidden="true">♫</span><h3>Sonido y DJ</h3><p>Bocinas, mezcla y micrófonos para que los buenos rolones no paren.</p><span className="service-mark" aria-hidden="true">✳</span></article>
            <article className="service-row"><span className="service-icon" aria-hidden="true">✦</span><h3>Luces robóticas</h3><p>Color y movimiento que transforman el salón y levantan la pista.</p><span className="service-mark" aria-hidden="true">✳</span></article>
            <article className="service-row"><span className="service-icon" aria-hidden="true">🤖</span><h3>Robot LED</h3><p>¡Una hora de show incluida en paquetes 3 y 4! También disponible por renta.</p><span className="service-mark" aria-hidden="true">✳</span></article>
            <article className="service-row"><span className="service-icon" aria-hidden="true">🥂</span><h3>Momentos y sorpresas</h3><p>Shots, fotos, personajes y espectáculos para prender el ambiente.</p><span className="service-mark" aria-hidden="true">✳</span></article>
          </div>
          <div className="extras-line"><span>También puedes agregar:</span>{celebrationExtras.map((extra) => <span className="extra-pill" key={extra}>{extra}</span>)}</div>
        </section>

        <section className="featured-package" id="paquete-xv">
          <div className="featured-art"><img src={asset('assets/87bd3d2b-721c-4bb9-803f-5f0fcb2d915f.jpg')} alt="Paquete para quinceañera y boda de Fusión Zac, $13,700" loading="lazy" /></div>
          <div className="featured-copy">
            <span className="section-index">EL PAQUETE ESTRELLA ✦ XV AÑOS Y BODAS</span>
            <h2>Una noche<br />de <em>realeza.</em></h2>
            <p className="featured-lead">Todo el ambiente para que tus quince o tu boda se conviertan en una fiesta inolvidable.</p>
            <div className="featured-price"><span>PAQUETE ESTRELLA</span><strong>$13,700</strong><small>MXN</small></div>
            <ul className="featured-list">
              <li>5 horas de sonido profesional</li><li>Robot LED con iluminación y show en vivo</li><li>Carrito de shots para el brindis</li><li>Cabezón de la máscara y show de la Monja</li><li>Pantalla / proyector para tus momentos</li><li>Cabina de fotos</li><li>4 chisperos para darle chispa a la fiesta</li>
            </ul>
            <a className="button button-lime" href={chat('Hola, quiero cotizar el Paquete Estrella de $13,700 para XV años / boda.') } target="_blank" rel="noreferrer">Quiero esta fiesta <Arrow diagonal /></a>
          </div>
        </section>

        <section className="statement" aria-label="Una celebración para recordar">
          <div className="statement-bg"><img src={asset('images/fusion-zac-hero.webp')} alt="" loading="lazy" /></div>
          <p className="eyebrow"><span className="eyebrow-dot" /> QUE SE OIGA HASTA EL CERRO</p>
          <h2>Sube el volumen.<br /><em>Saca los pasos.</em></h2>
          <a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Planeemos tu fecha <Arrow diagonal /></a>
        </section>

        <section className="gallery section-wrap" id="galeria">
          <div className="gallery-heading"><div><span className="section-index">MOMENTOS FUSIÓN</span><h2>Así se arma.</h2></div><a className="under-link" href={socials.tiktok} target="_blank" rel="noreferrer">Más en TikTok <Arrow diagonal /></a></div>
          <div className="gallery-grid">{gallery.map((item) => <figure className="gallery-item" key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>FUSIÓN ZAC</span><span>✳</span></figcaption></figure>)}</div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-top"><span className="section-index">HAGAMOS QUE PASE</span><span>✳ GUADALUPE, ZACATECAS</span></div>
          <div className="contact-main"><h2>Tu fiesta<br />empieza <em>aquí.</em></h2><a className="contact-button" href={whatsapp} target="_blank" rel="noreferrer"><span className="wa-icon" aria-hidden="true">◉</span><span><small>ESCRÍBENOS POR WHATSAPP</small><strong>492 161 4598</strong></span><Arrow diagonal /></a></div>
          <div className="contact-bottom"><span>FUSIÓN ZAC · CERCA DE TI SIEMPRE</span><div className="social-links"><a href={socials.facebook} target="_blank" rel="noreferrer">Facebook <Arrow diagonal /></a><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok <Arrow diagonal /></a></div></div>
        </section>
      </main>

      <footer><a className="footer-brand" href="#inicio">FUSIÓN <b>ZAC</b></a><span>QUE SE ARME <b>✳</b></span><span>© {new Date().getFullYear()} FUSIÓN ZAC</span></footer>
    </>
  )
}

export default App
