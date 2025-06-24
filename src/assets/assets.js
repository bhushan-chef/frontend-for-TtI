import logo from './logo.svg'
import logo_icon from './logo_icon.svg'
import facebook_icon from './facebook_icon.svg'
import instagram_icon from './instagram_icon.svg'
import twitter_icon from './twitter_icon.svg'
import star_icon from './star_icon.svg'
import rating_star from './rating_star.svg'
import sample_img_1 from './sample_img_1.png'
import sample_img_2 from './sample_img_2.png'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import step_icon_1 from './step_icon_1.svg'
import step_icon_2 from './step_icon_2.svg'
import step_icon_3 from './step_icon_3.svg'
import email_icon from './email_icon.svg'
import lock_icon from './lock_icon.svg'
import cross_icon from './cross_icon.svg'
import star_group from './star_group.png'
import credit_star from './credit_star.svg'
import profile_icon from './profile_icon.png'
import logo1 from './logo1.png'
import logo2 from './logo2.jpg'
import logo3 from './logo3.png'
import logo4 from './logo4.png'
import bhushan from './bhushan.jpg'
import Swagat from './Swagat.jpg'
import Cat from './Cat.png'

export const assets = {
    logo,
    logo_icon,
    facebook_icon,
    instagram_icon,
    twitter_icon,
    star_icon,
    rating_star,
    sample_img_1,
    sample_img_2,
    email_icon,
    lock_icon,
    cross_icon,
    star_group,
    credit_star,
    profile_icon,
    logo1,
    logo2,
    logo3,
    logo4,
    bhushan,
    Swagat,
    Cat,
  }

export const stepsData = [
    {
      title: 'Describe Your Vision',
      description: 'Type a phrase, sentence, or paragraph that describes the image you want to create.',
      icon: step_icon_1,
    },
    {
      title: 'Watch the Magic',
      description: 'Our AI-powered engine will transform your text into a high-quality, unique image in seconds.',
      icon: step_icon_2,
    },
    {
      title: 'Download & Share',
      description: 'Instantly download your creation or share it with the world directly from our platform.',
      icon: step_icon_3,
    },
  ];

export const testimonialsData = [
    {
        image:logo1,
        name:'Vedant Pande',
        role:'Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:logo3,
        name:'Chudaman Khandait',
        role:' Graphic Designer',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
    {
        image:logo4,
        name:'Aman Birla',
        role:' Business Owner',
        stars:5,
        text:`I've been using bg.removal for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.`
    },
]

export const Creators=[
   {
    image:Swagat,
    name:"Swagat Koreti",
    role:"Developer",
    text:`Swagat Koreti is a passionate developer with a keen interest in AI and web technologies. He loves creating innovative solutions that enhance user experiences and streamline processes. With a background in computer science, Swagat is dedicated to pushing the boundaries of what's possible in the digital world.`,
   },
   {
    image:bhushan,
    name:"Bhushan Zode",
    role:"Developer",
    text:`Bhushan Zode is a skilled developer with a strong focus on AI-driven applications. He enjoys tackling complex challenges and building robust systems that deliver real value to users. With expertise in various programming languages and frameworks, Bhushan is committed to continuous learning and innovation in the tech industry.`,
   }

]

export const plans = [
    {
      id: 'Basic',
      price: 10,
      credits: 100,
      desc: 'Best for personal use.'
    },
    {
      id: 'Advanced',
      price: 50,
      credits: 500,
      desc: 'Best for business use.'
    },
    {
      id: 'Business',
      price: 250,
      credits: 5000,
      desc: 'Best for enterprise use.'
    },
  ]