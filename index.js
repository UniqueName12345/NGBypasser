/**
 * Downloads a song from a given URL and saves it to the user's device.
 *
 * @param {number} ID - The ID of the song to download.
 * @param {string} name - The name of the song to save.
 * @return {void} This function does not return anything.
 */
function saveAs(blob, fileName) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
}

async function downloadSong(ID, name) {
    const songURL = `https://audio-download.ngfiles.com/${ID - Math.floor(ID / 1000)}/${ID}_${name.slice(0, 26)}.mp3`;
    const response = await fetch(songURL);
    const blob = await response.blob();
    saveSong(blob, `${ID}.mp3`);
}
