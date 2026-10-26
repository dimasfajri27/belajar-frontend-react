function Hero() {
    return(
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row align-items-center min-vh-100 py-5">
                    <div className="col-lg-6">
                        <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                            Solusi digital untuk bisnis anda!
                        </span>
                        <h1 className="fw-bold display-4 mb-4">
                            Mengembangkan Bisnis di Era Digital
                        </h1>
                        <p className="p.lead.text-secondary mb-4">
                            Kami membantu perusahaan membangun solusi digital yang modern, efektif, dan mudah digunakan untuk meningkatkan produktivitas bisnis
                        </p>
                        <div className="d-flex gap-3 flex-wrap">
                            <a href="#SERVICES" className="btn btn-primary btn-lg px-4">
                                Lihat Layanan
                            </a>
                            <a href="#about" className="btn btn-outline-secondary btn-lg px-4">
                                Tentang Kami!
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <i className="bi bi-building display-1 text-primary">
                            <h3 className="fw-bold mt-4">
                                Technology & Inovation
                            </h3>
                            <p className="text-secondary">
                                Membawa ide menjadi solusi nyata
                            </p>
                        </i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;