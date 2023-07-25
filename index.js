import clipboardListener from 'clipboard-event';
import clipboard from 'clipboardy';

clipboardListener.startListening();

clipboardListener.on('change', () => {
    clipboardListener.stopListening();
    try {
        var before = clipboard.readSync();
        console.log(before);
        var after = before.replace(/\[\^[0-9]+\^\]\[[0-9]+\]/g, "");
        clipboard.writeSync(after);
        console.log("Before");
        console.log(before);
        console.log("After");
        console.log(after);
    }
    catch {
        console.log("Error");
    }
    clipboardListener.startListening();
});