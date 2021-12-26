const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
let dataset = [];

const promises = channels.map(async (channel) => {
  const { data } = await axios.get(`https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${channel}`);
  return data;
});

dataset = await Promise.all(promises);

console.log("🚀 ~ file: axios.js ~ line 9 ~ dataset", dataset);

