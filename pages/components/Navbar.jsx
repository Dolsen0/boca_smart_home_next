function Navbar(){
    const navItems = [ "Boca Smart Home", "Services", "About", "Contact"]
    const navLinks = navItems.map((item, index) => {
        return (
            <div className="navbar">
            <li key={index}>{item}</li>
            </div>
        )})
    return(
        <>
        <p>{navLinks}</p>
        </>
    )
}

module.exports = Navbar;

// Path: pages/components/Footer.jsx