const PrizeClientService = {
    async setExpiredPrize(userprizeId: number, expiresAt:number): Promise<any> {
               
        const response = await fetch(`/api/prizes/setExpired`, {
            method: "POST",
            body: JSON.stringify({
                userprizeId,
                expiresAt
            })
        })

        return await response!.json()
    },

    async setUsedPrize(userprizeId: number): Promise<any> {
               
        const response = await fetch(`/api/prizes/setUsed`, {
            method: "POST",
            body: JSON.stringify({
                userprizeId,
            })
        })

        return await response!.json()
    },

    async setOpenedPrize(): Promise<any> {
               
        const response = await fetch(`/api/prizes/setOpened`, {
            method: "POST"
        })

        return await response!.json()
    },

    async setWonPrize(userprizeId: number): Promise<any> {
               
        const response = await fetch(`/api/prizes/setWon`, {
            method: "POST",
            body: JSON.stringify({
                userprizeId,
            })

        })

        return await response!.json()
    },

    
    async updateChecked(prizeId: number, isActive: boolean): Promise<any> {

        const response = await fetch(`/api/prizes/${prizeId}?check`, {
            method: "PUT",
            body: JSON.stringify({
                isActive
            })
        })

        return await response!.json()
    },

    async updateImage(prizeId: number, url: string): Promise<any> {

        const response = await fetch(`/api/prizes/${prizeId}?image`, {
            method: "PUT",
            body: JSON.stringify({
                url
            })
        })

        return await response!.json()
    },

    async updatePrize(prizeObj: IPrize): Promise<any> {

        const response = await fetch(`/api/prizes/${prizeObj.id}`, {
            method: "PUT",
            body: JSON.stringify({
                prizeObj
            })
        })

        return await response!.json()
    },

    async createPrize(prizeObj: IPrize): Promise<any> {

        const response = await fetch(`/api/prizes`, {
            method: "POST",
            body: JSON.stringify({
                prizeObj
            })
        })

        return await response!.json()
    },

    async getRandomPrizes(randNum: number, userId: number): Promise<any>{
        const response = await fetch(`/api/prizes/getRandomPrizes`, {
            method: "POST",
            body: JSON.stringify({
                randNum,
                userId
            })
        })

        return await response!.json()
    },
}

export default PrizeClientService;