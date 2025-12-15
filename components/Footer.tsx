export default function Footer() {
    return (
        <footer 
            className="border-t mt-16"
            style={{
                backgroundColor: "var(--footer-gb)",
                borderColor: "var(--border)",
            }}    
        >
            <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-gray-600 dark:text-gray-400">
                
                {/* Column 1 - Branding */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Nombre de la farmacia</h3>
                    {/* Logo */}
                    {/* <Image src="" alt="Logo" width={120} height={40} />*/}
                </div>
                
                {/* Column 2 - Contact */}
                <div>
                    <h4 className="font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2">
                        <li>📍 Address: Guatemala City</li>
                        <li>📞 Phone: +502 0000-0000</li>
                        <li>✉️ Email: contact@pharmacy.com</li>
                    </ul>
                </div>
                
                {/* Column 3 - Information */}
                <div>
                    <h4 className="font-semibold mb-3">Information</h4>
                    <ul className="space-y-2">
                        <li>Opening hours.</li>
                        <li>Product availability subject to change.</li>
                        <li>Pricesmay change without notice.</li>
                        <li>Catalog for informational purposes only.</li>
                    </ul>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs text-gray-500 dark:text-gray-500 py-4 border-t border-gray-200 dark:border-gray-800">
                © {new Date().getFullYear()} Pharmacy Catalog. All Rights reserved.
            </div>
        </footer>
    );
}
