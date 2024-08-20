export const fetchYoutube = async () => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PLhOdDlU9F7X-kNkGxSTKdlT5eZDd23Cga&key=${process.env.YOUTUBE_KEY}`,
    )
    const jsonData = await res.json()

    return jsonData
  } catch (error) {
    console.error(error)
  }
}
