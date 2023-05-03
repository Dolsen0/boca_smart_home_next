function Services(){
    const services = ['Consultation', 'Installation', 'Maintenance', 'Sales', 'Training']
    const servicesList = services.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )})
    return(
        <>
        <h2>Services</h2>
        <div className="services">{servicesList}</div>
        </>
    )
}

module.exports = Services;