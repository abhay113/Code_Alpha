async function shorten() {
  const longUrl = document.getElementById("longUrl").value;

  const accessToken = "dca80a3e0d52aca4d6f4bbe4af5037c442ce38bd"; //api token

  const apiUrl = `https://api-ssl.bitly.com/v4/shorten`;  // bitly api

  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  const data = await response.json();

  if (response.ok) {
    const shortUrl = data.link;
    document.getElementById(
      "shortUrl"
    ).innerHTML = `  <a href="${shortUrl}" target="_blank"> <i class="fas fa-link"></i> ${shortUrl}</a>`;
  } else {
    document.getElementById(
      "shortUrl"
    ).innerHTML = `Error: ${data.description}`;
  }
}


