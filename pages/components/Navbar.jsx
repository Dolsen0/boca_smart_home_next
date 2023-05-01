function Navbar(){
    const navItems = [ "Boca Smart Home", "Services", "About", "Contact"]
    const navLinks = navItems.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )})
    return(
        <>
        <p>{navLinks}</p>
        </>
    )
}

module.exports = Navbar;

// Path: pages/components/Footer.jsx