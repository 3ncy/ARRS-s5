// Hit Ctrl-Shift-C to open the browser console and past this code in there
// It removes the slow printing of the texts and removes the background video.

originalTimeout = window.setTimeout; window.setTimeout = (method) => originalTimeout(() => { method(); HideLoader(); ScrollToBottom(); }, 1);
document.getElementById('video-wrap').remove();