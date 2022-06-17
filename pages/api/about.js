export default function handler(req, res) {
  res.status(200).json({
    name: 'Eva Asteria',
    nickname: 'evaasmakula',
    age: 20,
    about: 'I am eva and I am a web developer and I am a student at the University Of Muhammadiyah Ponorogo my major is Technical Informatics',
    education: [
      'University of Muhammadiyah Ponorogo - major in Technical Informatics',
      'Vocational High School 2 Magetan - major in Multimedia',
    ],
    contact: {
      email: 'hy@evaasmakula.my.id',
      phone: '+62-812-3215-2210',
      address: 'Plangkrongan village, Poncol sub-district, Magetan district, East Java, Indonesia',
    },
    socials: {
      discord: 'https://discord.com/users/606109486997962753',
      facebook: 'https://facebook.com/evaasmakula',
      github: 'https://github.com/evaasmakula',
      instagram: 'https://instagram.com/evaasmakula',
      reddit: 'https://www.reddit.com/u/evaasmakula',
      telegram: 'https://t.me/evaasmakula',
      trakteer: 'https://trakteer.id/evaasmakula',
      twitch: 'https://www.twitch.tv/evaasmakula',
      twitter: 'https://twitter.com/evaasmakula'
    },
    techAndLanguage: [
      'JavaScript',
      'React',
      'React Native',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'HTML',
      'CSS',
      'Github',
      'Heroku',
      'Vercel',
      'Vs Code',
      'Ubuntu',
      'Windows',
    ],
    hobbies: [
      'Playing games',
      'Watching movies',
      'Listening to music',
      'Solving problems',
      'Learning new things',
      'Challenging myself',
    ]
  })
}