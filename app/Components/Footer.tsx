export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="py-6">
            <div className="mt-6 w-4/5 mx-auto text-center text-white opacity-70">
                &#169; Copyright Mathieu Stamm {year}
            </div>
        </div>
    );
}
