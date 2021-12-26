
// BOM
window.addEventListener('load', async () => {
  const channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let dataset = [];

  const promises = channels.map(async (channel) => {
    const { data } = await axios.get(`https://twitch-proxy.freecodecamp.rocks/twitch-api/channels/${channel}`);
    return data;
  });

  dataset = await Promise.all(promises);

  console.log("🚀 ~ file: axios.js ~ line 9 ~ dataset", dataset);

  const streamers = document.querySelector('#streamers');

  

  dataset.forEach(item => {
    // Render streamer list
    const streamerItem = document.createElement('li');

    // Render streamer's logo
    const imgEle = document.createElement('img'); // src
    imgEle.src = item.logo;

    // Render streamer's link
    const linkEle = document.createElement('a'); // href
    linkEle.innerHTML = item.display_name;
    linkEle.href = item.url;

    // Render streamer's status
    const statusEle = document.createElement('span');
    statusEle.innerHTML = `${item.name}: ${item.status}`;

    streamerItem.appendChild(imgEle);
    streamerItem.appendChild(linkEle);
    streamerItem.appendChild(statusEle);

    streamers.appendChild(streamerItem);
  })
})



