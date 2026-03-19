export const SITE_DETAILS = {
  workshopName: 'Shiv Motors',
  tagline: 'Best Workshop in the Area',
  foundedDate: '18 Oct 2025',
  location: {
    area: 'Aada Gela, Chitawa',
    city: 'Kuchman City 341519',
    full: 'Aada Gela, Chitawa, Kuchman City 341519',
  },
  owner: {
    name: 'Bhanwar Lal Karwa',
    role: 'Owner',
    photo: '/media/team/owner.jpeg',
    callNumber: '9216439571',
    callDisplay: '+91 92164 39571',
    whatsappNumber: '9494299571',
    whatsappDisplay: '+91 94942 99571',
  },
  manager: {
    name: 'Mahesh Balara',
    role: 'Manager',
    photo: '/media/team/mahesh.jpeg',
    callNumber: '8104874440',
    callDisplay: '+91 81048 74440',
    whatsappNumber: '8104874440',
    whatsappDisplay: '+91 81048 74440',
  },
};

export const TEAM_MEMBERS = [
  {
    key: 'owner',
    name: SITE_DETAILS.owner.name,
    role: SITE_DETAILS.owner.role,
    photo: SITE_DETAILS.owner.photo,
    primaryLabel: `Call ${SITE_DETAILS.owner.callDisplay}`,
    primaryHref: `tel:+91${SITE_DETAILS.owner.callNumber}`,
    secondaryLabel: `WhatsApp ${SITE_DETAILS.owner.whatsappDisplay}`,
    secondaryHref: `https://wa.me/91${SITE_DETAILS.owner.whatsappNumber}?text=${encodeURIComponent(
      `Hi! I found the ${SITE_DETAILS.workshopName} website and would like to book a service.`
    )}`,
    secondaryExternal: true,
  },
  {
    key: 'manager',
    name: SITE_DETAILS.manager.name,
    role: SITE_DETAILS.manager.role,
    photo: SITE_DETAILS.manager.photo,
    primaryLabel: `Call ${SITE_DETAILS.manager.callDisplay}`,
    primaryHref: `tel:+91${SITE_DETAILS.manager.callNumber}`,
    secondaryLabel: `WhatsApp ${SITE_DETAILS.manager.whatsappDisplay}`,
    secondaryHref: `https://wa.me/91${SITE_DETAILS.manager.whatsappNumber}?text=${encodeURIComponent(
      `Hi! I would like to talk to ${SITE_DETAILS.manager.name} from ${SITE_DETAILS.workshopName}.`
    )}`,
    secondaryExternal: true,
  },
];

export const GALLERY_IMAGES = [
  { src: '/media/gallery/workshop-01.jpeg', label: 'Workshop Signboard', description: 'Roadside Shiv Motors signboard with workshop services.' },
  { src: '/media/gallery/workshop-02.jpeg', label: 'Open Service Bay', description: 'Main workshop floor with covered parking and active service space.' },
  { src: '/media/gallery/workshop-03.jpeg', label: 'Wheel Service Equipment', description: 'Tyre changing and wheel balancing setup inside the workshop.' },
  { src: '/media/gallery/workshop-04.jpeg', label: 'Heavy Vehicle Wash Bay', description: 'Service support for working vehicles and wash area access.' },
  { src: '/media/gallery/workshop-05.jpeg', label: 'Air Compressor Unit', description: 'Core pneumatic equipment used for tyre and service operations.' },
  { src: '/media/gallery/workshop-06.jpeg', label: 'Interior Detailing Work', description: 'Vehicle interior cleaning and detailing in progress.' },
  { src: '/media/gallery/workshop-07.jpeg', label: 'Workshop Exterior', description: 'Front view of the Shiv Motors workshop compound.' },
  { src: '/media/gallery/workshop-08.jpeg', label: 'Workshop Entrance', description: 'Approach view showing the open front and service access.' },
  { src: '/media/gallery/workshop-09.jpeg', label: 'Service Yard View', description: 'Wide yard view with active service zone and vehicle movement.' },
  { src: '/media/gallery/workshop-10.jpeg', label: 'Front Vehicle Service', description: 'Vehicle positioned for inspection and wash support.' },
  { src: '/media/gallery/workshop-11.jpeg', label: 'Workshop Coverage Area', description: 'Covered space built for multiple vehicles and daily workshop operations.' },
];

export const GALLERY_VIDEOS = [
  {
    src: '/media/videos/shiv.mp4',
    title: 'Shiv Motors Walkthrough',
    description: 'A direct look at the workshop layout, service area, and facilities.',
    poster: '/media/gallery/workshop-11.jpeg',
  },
  {
    src: '/media/videos/workshop-walkthrough.mp4',
    title: 'Workshop Activity Video',
    description: 'Recent on-site footage showing the workshop in action.',
    poster: '/media/gallery/workshop-02.jpeg',
  },
];

export const CONTACT_LINKS = {
  ownerCall: `tel:+91${SITE_DETAILS.owner.callNumber}`,
  ownerWhatsApp: `https://wa.me/91${SITE_DETAILS.owner.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I found the ${SITE_DETAILS.workshopName} website and would like to book a service.`
  )}`,
  managerCall: `tel:+91${SITE_DETAILS.manager.callNumber}`,
  managerWhatsApp: `https://wa.me/91${SITE_DETAILS.manager.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I would like to talk to ${SITE_DETAILS.manager.name} from ${SITE_DETAILS.workshopName}.`
  )}`,
  directions: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SITE_DETAILS.workshopName}, ${SITE_DETAILS.location.full}`
  )}`,
  mapsEmbed: `https://www.google.com/maps?q=${encodeURIComponent(
    `${SITE_DETAILS.workshopName}, ${SITE_DETAILS.location.full}`
  )}&output=embed`,
};

export const SEO_DESCRIPTION = `${SITE_DETAILS.workshopName} is the best workshop in the area, serving ${SITE_DETAILS.location.full}. Started on ${SITE_DETAILS.foundedDate}, led by owner ${SITE_DETAILS.owner.name}, and supported by manager ${SITE_DETAILS.manager.name}.`;
