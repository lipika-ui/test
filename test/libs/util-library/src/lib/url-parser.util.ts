/**
 * A function to remove the backslash from resource url path.
 * for example:
 * input :"https:\/\/cms-dev.lla.digital\/uploads\/_\/originals\/9d8504d1-4468-4777-a9b1-ead19bf7cb53.jpg"
 * output :"https://cms-dev.lla.digital/uploads/_/originals/9d8504d1-4468-4777-a9b1-ead19bf7cb53.jpg"
 * @param url string
 */
export function removeBackSlashFromUrl(url: string): string {
  return url.replace(/\\/g, '/');
}
