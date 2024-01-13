export default function (email: string, subject: string) {
   const encodedSubject = encodeURIComponent(subject);
   return `mailto:${email}?subject=${encodedSubject}`;
}
