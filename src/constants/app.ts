interface NavMenuType {
  title: string
  link: string
}

export const navManu: NavMenuType[] = [
  {
    title: 'Services',
    link: '/#services'
  },
  {
    title: 'Our Working',
    link: '/#our-working'
  },
  {
    title: 'Use Cases',
    link: '/#use-cases'
  },
  {
    title: 'Team',
    link: '/#team'
  },
  {
    title: 'Testimonials',
    link: '/#testimonials'
  }
]

interface ServicesType {
  title: string
  icon: string
  link: string
  bgColor?: 'primary' | 'secondary' | 'dark'
  bgText?: 'primary' | 'white' | 'dark'
}

export const services: ServicesType[] = [
  {
    title: 'Search engine optimization',
    icon: '/static/icons/tokyo-magnifier-web-search-with-elements-2.svg',
    link: '/#services',
    bgColor: 'secondary',
    bgText: 'primary'
  },
  {
    title: 'Pay-per-click advertising',
    icon: '/static/icons/tokyo-selecting-a-value-in-the-browser-window-1.svg',
    link: '/#services',
    bgColor: 'primary',
    bgText: 'white'
  },
  {
    title: 'Social Media Marketing',
    icon: '/static/icons/tokyo-browser-window-with-emoticon-likes-and-stars-around-2.svg',
    link: '/#services',
    bgColor: 'dark',
    bgText: 'white'
  },
  {
    title: 'Email Marketing',
    icon: '/static/icons/tokyo-sending-messages-from-one-place-to-another-1.svg',
    link: '/#services',
    bgColor: 'secondary',
    bgText: 'primary'
  },
  {
    title: 'Content Creator',
    icon: '/static/icons/tokyo-many-browser-windows-with-different-information-1.svg',
    link: '/#services',
    bgColor: 'primary',
    bgText: 'white'
  },
  {
    title: 'Analytics and Tracking',
    icon: '/static/icons/tokyo-volumetric-analytics-of-different-types-in-web-browsers-2.svg',
    link: '/#services',
    bgColor: 'dark',
    bgText: 'primary'
  }
]

interface WorkingProcessType {
  title: string
  description: string
}

export const workingProcess: WorkingProcessType[] = [
  {
    title: 'Consultation',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Research and Strategy Development',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Monitoring and Optimization',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Reporting and Communication',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  },
  {
    title: 'Continual Improvement',
    description:
      'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
  }
]

export const sponsorLogos: string[] = [
  '/static/icons/amazon.svg',
  '/static/icons/dribble.svg',
  '/static/icons/hubspot.svg',
  '/static/icons/notion.svg',
  '/static/icons/netflix.svg',
  '/static/icons/zoom.svg'
]

interface TeamsType {
  name: string
  profession: string
  description: string
  img: string
  link: string
}

export const teams: TeamsType[] = [
  {
    name: 'John Smith',
    profession: 'CEO and Founder',
    description: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
    img: '/static/images/people/ian-dooley-d1UPkiFd04A-unsplash-1.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  },
  {
    name: 'Jane Doe',
    profession: 'Director of Operations',
    description:
      '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
    img: '/static/images/people/suad-kamardeen-khewjy5l4Zo-unsplash-2.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  },
  {
    name: 'Michael Brown',
    profession: 'Senior SEO Specialist',
    description:
      '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
    img: '/static/images/people/christian-buehner-DItYlc26zVI-unsplash-1.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  },
  {
    name: 'Emily Johnsons',
    profession: 'PPC Manager',
    description:
      '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
    img: '/static/images/people/feli-ramsanjami-agung-wUe_Q-t4-cI-unsplash-1.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  },
  {
    name: 'Brian Williams',
    profession: 'Social Media Specialist',
    description:
      '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
    img: '/static/images/people/chanvre-quebec-mXu1SpzHq6w-unsplash-1.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  },
  {
    name: 'Sarah Kim',
    profession: 'Content Creator',
    description:
      '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
    img: '/static/images/people/alexandra-gorn-smuS_jUZa9I-unsplash-1.png',
    link: 'https://www.linkedin.com/in/zheka-baila-arkan-624517267/'
  }
]

interface TestimonialsType {
  review: string
  name: string
  profession: string
}

export const testimonials: TestimonialsType[] = [
  {
    review:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    profession: 'Marketing Director at XYZ Corp'
  },
  {
    review:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    profession: 'Marketing Director at XYZ Corp'
  },
  {
    review:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    profession: 'Marketing Director at XYZ Corp'
  },
  {
    review:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    profession: 'Marketing Director at XYZ Corp'
  },
  {
    review:
      'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.',
    name: 'John Smith',
    profession: 'Marketing Director at XYZ Corp'
  }
]

interface CaseStudiesType {
  link: string
  text: string
}

export const caseStudies: CaseStudiesType[] = [
  {
    link: '/',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
  },
  {
    link: '/',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
  },
  {
    link: '/',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
  },
  {
    link: '/',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
  },
  {
    link: '/',
    text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'
  }
]
