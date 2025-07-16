import { FuzzyText } from '../components/Animations/FuzzyText';

export const NotFound = () => {
    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/assets/404.gif')" }}>
            <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
                <div className="flex flex-col items-center gap-y-10">
                    <p
                        style={{
                            opacity: 0,
                            animation: 'reveal-in 0.6s ease 0.5s forwards'
                        }}
                    >
                        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover={true}>
                            404
                        </FuzzyText>
                    </p>
                    <p
                        style={{
                            opacity: 0,
                            animation: 'reveal-in 0.6s ease 1s forwards'
                        }}
                    >
                        <FuzzyText baseIntensity={0.2} hoverIntensity={0.7} enableHover={true}>
                            NOT FOUND
                        </FuzzyText>

                    </p>
                </div>
            </div>
        </div >
    );
};