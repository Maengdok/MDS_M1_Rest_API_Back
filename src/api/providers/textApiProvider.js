const axios = require("axios");

const baseUrl = "https://loripsum.net/api";

exports.getRandomText = async () => {
    let response = await axios.get(baseUrl + "/plaintext", { responseType: "text" });
    return response.data;

}

// exports.getRandomText = () => {
//     return new Promise((resolve, reject) => {
//         axios.get(baseUrl + "/plaintext", {responseType: "text"})
//         .then((response) => {
//             resolve(response.data)
//         })
//         .catch(error => {
//             console.log(error);
//             reject(false);
//         })
//     })
// }

// exports.getRandomImage