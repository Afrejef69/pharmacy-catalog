export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t mt-10">
            <div className="max-w-7x1 mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
                {/* Column 1 - Branding */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Nombre de la farmacia</h3>
                    {/* Logo */}
                    {/* <Image src="" alt="Logo" width={120} height={40} />*/}
                </div>
                {/* Column 2 - Contact */}
                <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <ul className="space-y-1">
                        <li>📍 Address: Guatemala City</li>
                        <li>📞 Phone: +502 0000-0000</li>
                        <li>✉️ Email: contact@pharmacy.com</li>
                    </ul>
                </div>
                {/* Column 3 - Information */}
                <div>
                    <h4 className="font-semibold mb-2">Information</h4>
                    <ul className="space-y-1">
                        <li>Opening hours.</li>
                        <li>Product availability may vary.</li>
                        <li>Prices availability subject to change without notice.</li>
                        <li>This catalog is for informational purposes only.</li>
                        <li>This catalog does not constitute a sales contract.</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-xs text-gray-500 py-4 border-t">
                © {new Date().getFullYear()} Pharmacy Catalog. All Rights reserved.
            </div>
        </footer>
    );
}
