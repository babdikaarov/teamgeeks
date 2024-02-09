export default function (phoneNumber: string | number) {
   const phoneNumberString = phoneNumber.toString();
   const numericPhoneNumber = phoneNumberString.replace(/\D/g, "");
   const formattedPhoneNumber = `+${numericPhoneNumber.slice(0, 3)} ${numericPhoneNumber.slice(
      3,
      6,
   )} ${numericPhoneNumber.slice(6, 9)} ${numericPhoneNumber.slice(9)}`;
   return formattedPhoneNumber;
}
