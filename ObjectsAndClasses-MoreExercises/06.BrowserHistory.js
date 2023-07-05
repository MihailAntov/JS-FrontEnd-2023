function browserHistory(browser, commands) {
    while (commands.length > 0) {
        let command = commands.shift();
        if (command === 'Clear History and Cache') {
            browser['Open Tabs'] = [];
            browser['Recently Closed'] = [];
            browser['Browser Logs'] = [];
            continue;

        }

        let cmdArgs = command.split(' ');
        let cmd = cmdArgs.shift();
        let site = cmdArgs.join(' ');

        if(cmd === 'Open'){
            browser['Open Tabs'].push(site);
        }else if(cmd === 'Close'){
            let index = browser['Open Tabs'].indexOf(site);
            if(index === -1){
                continue;
            }
            browser['Open Tabs'].splice(index,1);
            if(!browser['Recently Closed'].includes(site)){
                browser['Recently Closed'].push(site);
            }
        }

        browser['Browser Logs'].push(command);
    }
    console.log(`${browser['Browser Name']}`);
    console.log(`Open Tabs: ${browser['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browser['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${browser['Browser Logs'].join(', ')}`);
}


browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail",
        "Dropbox"],
    "Browser Logs": ["Open Gmail",
        "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);