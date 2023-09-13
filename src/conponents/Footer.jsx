
function Footer () {
    const date = new Date();
    return (
        <footer>
            <p>copyRight: @Abdisamad {date.getFullYear()}</p>
            </footer>
    )
}

export default Footer;