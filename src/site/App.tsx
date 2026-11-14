const phone = '524921614598'
const message = encodeURIComponent('Hola, quiero información para mi evento.')
const whatsapp = `https://wa.me/${phone}?text=${message}`
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const socials = {
  instagram: 'https://www.instagram.com/sonidofusionzac/',
  tiktok: 'https://www.tiktok.com/@fusion.zac',
  facebook: 'https://www.facebook.com/share/19FXPwsgby/',
}

const services = [
  { number: '01', title: 'Sonido', description: 'Un sonido que se siente y mantiene la energía de tu celebración.' },
  { number: '02', title: 'Iluminación', description: 'Color, movimiento y ambiente para transformar cada espacio.' },
  { number: '03', title: 'Eventos', description: 'Una experiencia pensada para reunir a todos alrededor de la música.' },
]

const gallery = [
  { src: asset('assets/859683142_122238164402318142_7978589201987121749_n.jpg'), alt: 'Promoción de Fusión Zac con equipo de sonido e iluminación' },
  { src: asset('assets/866081418_122238713222318142_2344235169799620781_n.jpg'), alt: 'Fusión Zac en Zacatecas con su identidad gráfica y redes sociales' },
  { src: asset('assets/866081418_122238713222318142_2344235169799620781_n (1).jpg'), alt: 'Arte promocional de Fusión Zac' },
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
          <a href="#nosotros">Nosotros</a>
          <a href="#galeria">Galería</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="header-cta" href={whatsapp} target="_blank" rel="noreferrer">Cotiza tu evento <Arrow diagonal /></a>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <img className="hero-image" src={asset('images/fusion-zac-hero.png')} alt="Personas bailando en una celebración junto a la Catedral de Zacatecas iluminada" fetchPriority="high" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-dot" /> SONIDO · LUZ · CELEBRACIÓN</p>
            <h1 id="hero-title">Que tu evento<br />se <em>sienta.</em></h1>
            <p className="hero-copy">Creamos el ambiente para esos momentos que quieres volver a vivir.</p>
            <div className="hero-actions">
              <a className="button button-lime" href={whatsapp} target="_blank" rel="noreferrer">Hablemos de tu evento <Arrow diagonal /></a>
              <a className="text-link" href="#servicios">Conoce lo que hacemos <Arrow /></a>
            </div>
          </div>
          <div className="hero-meta"><span>FUSIÓN ZACATECAS</span><span>HECHO PARA CELEBRAR <b>✳</b></span></div>
          <a className="scroll-cue" href="#servicios" aria-label="Desplazarse a servicios"><span /> SCROLL</a>
        </section>

        <section className="intro section-wrap" id="nosotros">
          <div className="intro-label"><span className="section-index">01 /</span> CERCA DE TI SIEMPRE</div>
          <div className="intro-main">
            <h2>La música reúne.<br /><span>Nosotros ponemos</span><br />el ambiente.</h2>
            <div className="intro-aside"><p>En Fusión Zac hacemos que cada celebración tenga su propio ritmo. Sonido e iluminación para disfrutar el momento, desde la primera canción hasta la última.</p><a className="under-link" href={socials.instagram} target="_blank" rel="noreferrer">Síguenos en Instagram <Arrow diagonal /></a></div>
          </div>
          <div className="intro-bottom"><span>SONIDO FUSIÓN ZAC</span><span>ZACATECAS, MÉXICO <b>✳</b></span></div>
        </section>

        <section className="services section-wrap" id="servicios">
          <div className="section-heading"><div><span className="section-index">02 / LO QUE HACEMOS</span><h2>Tu celebración,<br /><em>a otro nivel.</em></h2></div><p>Nos encargamos de la atmósfera para que tú te dediques a disfrutar.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-mark" aria-hidden="true">✳</span></article>)}</div>
        </section>

        <section className="statement" aria-label="Una celebración para recordar">
          <div className="statement-bg"><img src={asset('images/fusion-zac-hero.png')} alt="" loading="lazy" /></div>
          <p className="eyebrow"><span className="eyebrow-dot" /> HAY NOCHES QUE SE QUEDAN CONTIGO</p>
          <h2>Sube el volumen.<br /><em>Vive el momento.</em></h2>
          <a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer">Planeemos tu fecha <Arrow diagonal /></a>
        </section>

        <section className="gallery section-wrap" id="galeria">
          <div className="gallery-heading"><div><span className="section-index">03 / MOMENTOS FUSIÓN</span><h2>Así se vive.</h2></div><a className="under-link" href={socials.tiktok} target="_blank" rel="noreferrer">Más en TikTok <Arrow diagonal /></a></div>
          <div className="gallery-grid">{gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1}`} key={item.src}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>FUSIÓN ZAC</span><span>0{index + 1}</span></figcaption></figure>)}</div>
        </section>

        <section className="contact" id="contacto">
          <div className="contact-top"><span className="section-index">04 / HAGAMOS QUE PASE</span><span>✳ ZACATECAS, MÉXICO</span></div>
          <div className="contact-main"><h2>Tu evento<br />empieza <em>aquí.</em></h2><a className="contact-button" href={whatsapp} target="_blank" rel="noreferrer"><span className="wa-icon" aria-hidden="true">◉</span><span><small>ESCRÍBENOS POR WHATSAPP</small><strong>492 161 4598</strong></span><Arrow diagonal /></a></div>
          <div className="contact-bottom"><span>FUSIÓN ZAC · CERCA DE TI SIEMPRE</span><div className="social-links"><a href={socials.facebook} target="_blank" rel="noreferrer">Facebook <Arrow diagonal /></a><a href={socials.instagram} target="_blank" rel="noreferrer">Instagram <Arrow diagonal /></a><a href={socials.tiktok} target="_blank" rel="noreferrer">TikTok <Arrow diagonal /></a></div></div>
        </section>
      </main>

      <footer><a className="footer-brand" href="#inicio">FUSIÓN <b>ZAC</b></a><span>SONIDO QUE REÚNE <b>✳</b></span><span>© {new Date().getFullYear()} FUSIÓN ZAC</span></footer>
    </>
  )
}

export default App
