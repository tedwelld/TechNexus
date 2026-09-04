import Image from "next/image";

type SiteImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function SiteImage({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: SiteImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

export const IMAGES = {
  heroNetwork: "/images/hero-network.jpg",
  serviceSoftware: "/images/service-software.jpg",
  serviceWeb: "/images/service-web.jpg",
  serviceIt: "/images/service-it.jpg",
  workEcommerce: "/images/work-ecommerce.jpg",
  workDashboard: "/images/work-dashboard.jpg",
  workMobile: "/images/work-mobile.jpg",
  aboutMission: "/images/about-mission.jpg",
  team1: "/images/team/tedwell.jpg",
  team2: "/images/team-2.jpg",
  teamStephen: "/images/team/stephen.jpg",
  itSupport: "/images/it-support.jpg",
  itNetwork: "/images/it-network.jpg",
  itCloud: "/images/it-cloud.jpg",
  pricingHero: "/images/pricing-hero.jpg",
  contactHero: "/images/contact-hero.jpg",
  process1: "/images/process-1.jpg",
  process2: "/images/process-2.jpg",
  process3: "/images/process-3.jpg",
  process4: "/images/process-4.jpg",
  process5: "/images/process-5.jpg",
  servicesHero: "/images/services-hero.jpg",
} as const;
