import SiteIcon from '../assets/siteicon.svg?react';

export const SiteIconComponent = () => {
    return (
        <div className="fixed left-15 top-18 z-40 transition-all duration-300">
            <a href='#Home' className="">
                <SiteIcon className="h-15 w-15 fill-current hover:text-accent transition" />
            </a>
        </div>
    );
}