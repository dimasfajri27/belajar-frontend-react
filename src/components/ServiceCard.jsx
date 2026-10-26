function ServiceCard() {
    return(
        <div className="col-md-6 col-lg-3">
            <div className="card service-card h-100 border-0 shadow-sm">
                <div className="card-body">
                    <div className="service-icon mb-3">
                        <i className={`bi ${service.icon}`}></i>
                    </div>
                    <h5 className="fw-bold">
                        {service.title}
                    </h5>
                    <p className="text-secondary mb-0">
                        {service.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard;