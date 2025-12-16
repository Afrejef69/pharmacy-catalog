export default function Footer() {
    return (
        <footer 
            className="border-t mt-16"
            style={{
                backgroundColor: "var(--footer-gb)",
                borderColor: "var(--border)",
            }}    
        >
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
                
                {/* Column 1 - Branding */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Nombre de la farmacia</h3>
                    {/* Logo */}
                    {/* <Image src="" alt="Logo" width={120} height={40} />*/}
                </div>
                
                {/* Column 2 - Contact */}
                <div>
                    <h4 className="font-semibold mb-3">Contacto</h4>
                    <ul className="space-y-2">
                        <li>📍 Dirección: Guatemala City</li>
                        <li>📞 Telefono: +502 0000-0000</li>
                        <li>✉️ Correo: contact@pharmacy.com</li>
                    </ul>
                </div>
                
                {/* Column 3 - Information */}
                <div>
                    <h4 className="font-semibold mb-3">Información</h4>
                    <ul className="space-y-2">
                        <li>Horario de atención</li>
                        <li>La disponibilidad del producto está sujeta a cambios.</li>
                        <li>Los precios pueden cambiar sin previo aviso.</li>
                        <li>Catálogo sólo con fines informativos.</li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs py-4 border-t">
                © {new Date().getFullYear()} Pharmacy Catalog. All Rights reserved.
            </div>
        </footer>
    );
}
