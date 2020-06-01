firefox.runtime.onInstalled.addListener(function() 
{
    firefox.declarativeContent.onPageChanged.removeRules(undefined, function() 
    {
        firefox.declarativeContent.onPageChanged.addRules([
        {
            conditions: [new firefox.declarativeContent.PageStateMatcher(
            {
                pageUrl: {hostEquals: 'letterboxd.com'},
            })],
            actions: [new firefox.declarativeContent.ShowPageAction()]
        }]);
    });
});