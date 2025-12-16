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
                    <h3 className="text-lg font-semibold mb-2">Farmacia Shalom</h3>
                    {/* Logo */}
                    {/* <Image src="" alt="Logo" width={120} height={40} />*/}
                </div>
                
                {/* Column 2 - Contact */}
                <div>
                    <h4 className="font-semibold mb-3">Contacto</h4>
                    <ul className="space-y-2">
                        <li>📍 <strong>Dirección:</strong> {process.env.NEXT_PUBLIC_STORE_ADDRESS}</li>
                        <li>📞 <strong>Telefono:</strong> {process.env.NEXT_PUBLIC_STORE_PHONE} </li>
                        <li>✉️ <strong>Correo:</strong> {process.env.NEXT_PUBLIC_STORE_EMAIL} </li>
                    </ul>
                </div>
                
                {/* Column 3 - Information */}
                <div>
                    <h4 className="font-semibold mb-3">Información</h4>
                    <ul className="space-y-2 text-sm text-[var(--muted)]">
                        <li><strong>Horario de atención:</strong> 8:00 a.m. a 12:00 a.m.</li>
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
