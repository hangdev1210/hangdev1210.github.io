export const delay = (order:number, time?:number) => {
  const _delay = time ? time : 200;
  return (_delay * order).toString();
}