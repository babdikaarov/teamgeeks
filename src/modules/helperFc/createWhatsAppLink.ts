export default function (number: number | string, text: string) {
   if (typeof number === "string") {
      number = Number(number);
   }
   const encodedText = encodeURIComponent(text);
   return `https://wa.me/${number}?text=${encodedText}`;
}
