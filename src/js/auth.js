import configs from "../config/config";

function access(){
    Axios({
      method: "GET",
      url: configs.baseUrl,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log("Message",res.data.message);
    });
  
  }
const auth = async () => {
    try {
      const res = await axios.get('/authenticate', { auth: { username: '', password: '' } });
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  