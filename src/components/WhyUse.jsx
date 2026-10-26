function WhyUse() {
    const reasons = [
        "Tin profesional dan berpengalaman",
        "Menggunakan teknologi modern",
        "Solusi didsesuikan dengan kebutuhan",
        "Suppot dan maintenance",
        "Harga transparan",
        "Fokus pada kepuasan pelanggan"
    ]
    
    return(
        <section id="whyus" className="py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <span className="text-primary fw-semibold">
                            MENGAPA KAMI
                        </span>
                        <h2 className="display-6 fw-bold mt-2 mb-4">
                            Solusi yang dibangun untuk kebutuhan Anda
                        </h2>
                        <p className="text-secondary">
                            Kami tidak hanya menyediakan teknologi, tetapi juga
                            membantu memahami kebutuhan dan tujuan bisnis Anda
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-3">
                            {reasons.map((reason,index) =>{
                                <div className="col-md-6" key={index}>
                                    <div className="d-flex aligb-items-center gap-2">
                                        <i className="bi bi-check-circle-fill text-primary fs-5"></i>
                                            <span>{reason}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default WhyUse;