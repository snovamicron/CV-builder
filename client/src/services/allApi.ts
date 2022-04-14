import axios from 'axios'

export const send_template_1_data = async(allData:any):Promise<any> => {
    try {
        const response = await axios({
            url:'http://localhost:4000/cv/temp_1_data',
            method:'POST',
            data: allData
        }) 
        return response       
    } catch (error) {
        console.log('getting error while calling send_template_1_data api'+error)
    }
}