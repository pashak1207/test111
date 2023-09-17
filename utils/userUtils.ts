import moment from "moment";


const UserUtils = {
    selectRandomAvatar() : string {

        const avatarsUrl:string[] = []

        for(let i = 1; i <= 5; i++) {
            avatarsUrl[i] = `/avatar_${i}.svg`;
        }

        return avatarsUrl[Math.floor(Math.random() * avatarsUrl.length)];
    },

    validatePhone(code:string, phoneNum?:string) {
        if(!phoneNum){
            
            const phone = `${code}`.replace(/\D/g, '')

            return /^\d{9,}$/.test(phone);
        }

        const phone = `${code}` + `${phoneNum}`
        
        return /^\d{9,}$/.test(phone);
    },

    validateCode(code:string) : boolean {
        return /^\d{4}$/.test(code);
    },

    validateName(name:string) : boolean {
        return !!name.trim()
    },

    validateDate(day:string, month:string, year:string) : boolean {
        return moment(`${day}/${month}/${year}`, 'DD/MM/YYYY').isValid()
    },

    generateVerificationCode() : string {
        const randomNumber = Math.floor(Math.random() * 10000);
        const paddedNumber = randomNumber.toString().padStart(4, '0');
    
        return paddedNumber;
    }
}

export default UserUtils