
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
  type:'facebook',
  link:'https://www.facebook.com/hang.dev1210'
},
{
  type:'instagram',
  link:'https://www.instagram.com/hang.dev1210'
},
{
  type:'linkedin',
  link:'https://www.linkedin.com/hang.dev1210'
}];

export default data;