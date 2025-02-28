import dash from '../../public/knitLogo.png'
import image from '../../public/image.png'
import book from '../../public/book.png'
import poetry from '../../public/poetry.png'
import debate from '../../public/debate.jpeg'
import facebook from '../../public/facebook.png'
import instagram from '../../public/instagram.png'
import gmail from '../../public/gmail.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'message',
    title: 'Message',
  },

  {
    id: 'branches',
    title: 'Branches',
  },
  {
    id: 'events',
    title: 'Events',
  },
  {
    id: 'achievements',
    title: 'Achivements',
  },
  {
    id: 'members',
    title: 'Members',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

export const branchRoute = {
  kavitaClub: {
    img: poetry,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam distinctio possimus excepturi molestiae reiciendis aperiam provident voluptatum. Deserunt dolorem voluptatibus est iure asperiores alias repudiandae deleniti magni doloribus in?',
  },
  debateClub: {
    img: debate,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam distinctio possimus excepturi molestiae reiciendis aperiam provident voluptatum. Deserunt dolorem voluptatibus est iure asperiores alias repudiandae deleniti magni doloribus in?',
  },
  bookPool: {
    img: book,
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam distinctio possimus excepturi molestiae reiciendis aperiam provident voluptatum. Deserunt dolorem voluptatibus est iure asperiores alias repudiandae deleniti magni doloribus in?',
  },
}

export const events = [
  {
    id: 'DebateSuperLeague',
    title: 'Debate Super League',
  },
  {
    id: 'Sahityotsav',
    title: 'Sahityotsav',
  },

  {
    id: 'KavySarita',
    title: 'Kavy Sarita',
  },
  {
    id: 'LitFest',
    title: 'Lit Fest',
  },
  {
    id: 'Abhyudav',
    title: 'Abhyudav',
  },
  {
    id: 'Aarambh',
    title: 'Aarambh',
  },
]
export const branches = [
  {
    id: 'kavita-club',
    title: 'Kavita Club',
    image: poetry,
  },
  {
    id: 'book-pool',
    title: 'Book Pool',
    image: book,
  },
  {
    id: 'debate-club',
    title: 'Debate Club',
    image: debate,
  },
]

export const messages = [
  {
    id: 'Director',
    name: 'KS Verma ',
    Position: 'Director',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.Lorem ipsum dolor sit amet conse',
  },
  {
    id: 'Dean',
    name: 'Ajay Shekhar Pandey ',
    Position: 'Dean',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.',
  },
  {
    id: 'Convenor',
    name: 'Ajay Shekhar Pandey ',
    Position: 'Convenor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.',
  },
  {
    id: 'Alumni1',
    name: 'Anurag Srivastava ',
    Position: 'TCS',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquam velit adipisci dicta. Similique repudiandae reprehenderit aliquam explicabo iure, ipsam repellat tenetur accusantium nisi, eum dignissimos quidem, perferendis nihil vitae.',
  },
]

export const members = [
  {
    id: 'name1',
    name: 'Name1 ',
    img: image,
    Position: 'secreatery',
  },
  {
    id: 'name2',
    name: 'Name2 ',
    img: image,
    Position: 'secreatery',
  },
  {
    id: 'name3',
    name: 'Name3 ',
    img: image,
    Position: 'secreatery',
  },
  {
    id: 'name4',
    name: 'Name4 ',
    img: image,
    Position: 'secreatery',
  },
]

export const achievementData = [
  {
    //first
    title: 'College Name',
    eventName: 'Event Name',
    collegeIcon: dash,
    year: 'year',
    points: [
      {
        winnerName: 'Winner Name',
        batch: 'batch',
        positions: [
          {
            eventName: 'event name',
            rank: 'got position',
          },
          {
            eventName: 'event name',
            rank: 'got position',
          },
        ],
      },
      {
        winnerName: 'Winner Name',
        batch: 'batch',

        positions: [
          {
            eventName: 'event name',
            position: 'got position',
          },
          {
            eventName: 'event name',
            position: 'got position',
          },
        ],
      },
    ],
  },

  {
    title: 'College Name ',
    collegeIcon: dash,
    eventName: 'Event Name',
    year: 'year',
    points: [
      {
        winnerName: 'Winner Name',
        batch: 'batch',
        positions: [
          {
            eventName: 'event name',
            rank: 'got position',
          },
          {
            eventName: 'event name',
            rank: 'got position',
          },
        ],
      },
      {
        winnerName: 'Winner Name',
        batch: 'batch',
        positions: [
          {
            eventName: 'event name',
            rank: 'got position',
          },
          {
            eventName: 'event name',
            rank: 'got position',
          },
        ],
      },
    ],
  },

  {
    title: 'College Name ',
    collegeIcon: dash,
    eventName: 'Event Name',
    year: 'year',
    points: [
      {
        winnerName: 'Winner Name',
        batch: 'batch',

        positions: [
          {
            eventName: 'event name',
            rank: 'got position',
          },
          {
            eventName: 'event name',
            rank: 'got position',
          },
        ],
      },
      {
        winnerName: 'Winner Name',
        batch: 'batch',

        positions: [
          {
            eventName: 'event name',
            rank: 'got position',
          },
          {
            eventName: 'event name',
            rank: 'got position',
          },
        ],
      },
    ],
  },
]

export const contacts = [
  {
    id: 'facebook',
    title: 'Facebook',
    img: facebook,
    url: 'https://m.facebook.com/profile.php/?id=100064312614553',
  },
  {
    id: 'instagram',
    title: 'Instagram',
    img: instagram,
    url: 'https://www.instagram.com/litcknit/',
  },
  {
    id: 'gmail',
    title: 'Gmail',
    img: gmail,
    url: 'litcknit@gmail.com',
  },
]
