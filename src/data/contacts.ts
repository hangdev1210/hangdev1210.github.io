
export type ContactType = 'x' | 'youtube' | 'instagram' | 'linkedin' | 'facebook' | 'email' | 'phone';

type ContactData = {
  type:ContactType;
  link:string;
}
const data:ContactData[] = [{
  type:'email',
  link:'hang.dev1210@gmail.com'
},
{
  type:'instagram',
  link:'https://www.instagram.com/hang.dev1210'
}];

export default data;