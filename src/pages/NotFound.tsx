export const NotFound = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/404.gif')" }} >
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-primary text-[56px] lg:text-[140px] font-gotham animate-reveal-in">404</h1>
                    <p className="text-secondary text-[18px] lg:text-[38px] font-gotham lg:-mt-8"
                        style={{
                            opacity: 0,
                            animation: 'reveal-in 0.6s ease 1s forwards'
                        }}>PAGE NOT FOUND</p>
                </div>
            </div>
        </div>
    );
};