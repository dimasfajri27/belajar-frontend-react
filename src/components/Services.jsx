import ServiceCard from "./ServiceCard";

function Services() {
    const services = [
        {
            icon : "bi-laptop",
            title : "Web Development",
            description : "Membangun website modern,responsive, dan sesuai kebutuhan"
        },
        {
            icon : "bi-phone",
            title : "Mobile Aplication",
            description : "Membangun Aplikasi mobile untuk Android dan iOS"
        },
        {
            icon : "bi-bar-chart",
            title : "Data & Analytics",
            description : "Mengubah data menjadi informasi yang membantu pengembalian keputusan"
        },
        {
            icon : "bi-cloud",
            title : "Cloud Solution",
            description : "Menyediakan solusi cloud yang fleksibel dan mudah dikembangkan"
        }
    ]

    return (
        <section id = "services" className="py-3 bg-light">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <span className="text-primary fw-semibold">
                        LAYANAN KAMI
                    </span>
                    <h2 className="display-6 fw-bold mt-2">
                        Solusi untuk Kebutuhan Digital
                    </h2>
                    <p className="text-secondary mx-auto section-description">
                        Berbagai layanan teknologi untuk membantu bisnis
                        berkembang lebih cepat dan efisien
                    </p>
                </div>
                <div className="row g-4">
                    {/*Mulai looping */}
                    {services.map((service,index) =>{
                        <ServiceCard key={index} service={service}/>
                    })}
                    {/*Akhir looping */}
                </div>
            </div>
        </section>
    )
}

export default Services;