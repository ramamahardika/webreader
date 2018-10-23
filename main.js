chrome.tabs.executeScript(
	{
		code: 'window.getSelection().toString();'
	},
	function(selection) {
		chrome.runtime.sendMessage({ toSay: selection[0] }, function() {});
	}
);
