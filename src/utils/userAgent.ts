export function getBrowserName(){
  if (typeof window === 'undefined') {
    throw new Error("getBrowserName can be used on client component only");
  }
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Chrome')) {
    return 'chrome';
  } else if (userAgent.includes('Firefox')) {
    return 'firefox';
  } else if (userAgent.includes('Safari')) {
    return 'safari';
  } else if (userAgent.includes('Edge')) {
    return 'edge';
  } else if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
    return 'ie';
  }
  return 'unknown';
}