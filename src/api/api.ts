const axios = require('axios').default;

class API{

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  public  async get(url: string, params?: any, authorization?: string): Promise<any> {
    try {
      const request: Object = {
        url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        method: 'GET',
        headers: {
          'Authorization': authorization,
          'Accept': 'application/json'
            
        },
        params: params
      };

      const response = await axios(request);
        
      return response.data;
        
    } catch (error) {
      return error;
    }
      
  }

  // rome-ignore lint/suspicious/noExplicitAny: <explanation>
  public  async send(url: string, data: Object, method: string = 'POST', authorization?: string, contentType: string = 'application/json'): Promise<any> {

    try {
      const request: Object = {
        url: `${process.env.NEXT_PUBLIC_API_URL}/${url}`,
        method: method,
        headers: {
          'Authorization': authorization,
          'Content-Type': contentType,
          'Accept': 'application/json'
            
        },
        data: data,
      };

      // rome-ignore lint/suspicious/noExplicitAny: <explanation>
      const  response: any = await axios(request);

      return response.data;

    } catch (error) {
      return error;
    }
      
  }

}

export default API;