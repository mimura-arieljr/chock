import SiteIcon from '../assets/siteicon.svg?react';

export const SiteIconComponent = () => {
    return (
        <div className="fixed left-6 top-10 md:left-12 md:top-15 z-0 transition-all duration-300">
            <a href='#Home' className="">
                <SiteIcon className="h-10 w-10 md:h-15 md:w-15 fill-current hover:text-accent transition" />
            </a>
        </div>
    );
}