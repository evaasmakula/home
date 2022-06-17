// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  nickname: string,
  age: number,
  about: string,
  education: string[],
  contact: {
    email: string,
    phone: string,
    address: string,
  },
  techAndLanguage: string[],
  hobbies: string[],
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    name: 'Andika Nur Pratama',
    nickname: 'evaasmakula',
    age: 20,
    about: 'I am eva and I am a web developer and I am a student at the University Of Muhammadiyah Ponorogo my major is Technical Informatics',
    education: [
      'University of Muhammadiyah Ponorogo - major in Technical Informatics',
      'Vocational High School 2 Magetan - major in Multimedia',
    ],
    contact: {
      email: 'hy@evaasmakula.my.id',
      phone: '0812-3215-2210',
      address: 'Plangkrongan village, Poncol sub-district, Magetan district, East Java, Indonesia',
    },
    techAndLanguage: [
      'JavaScript',
      'TypeScript',
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
      'Reading books',
      'Solving problems',
      'Learning new things',
      'Challenging myself',
    ]
  })
}
