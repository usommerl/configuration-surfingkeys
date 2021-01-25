var keySet0 = ['E', 'R', 'S', 'D', '<<', '>>', '<Ctrl-6>', '<Alt-p>', 'X'];
var keySet1 = keySet0.concat(['f', 'gg', 'd', 'u', 'x']);

unmapAllExcept(keySet0, /(mail|calendar|chat)\.google\.com/i);
unmapAllExcept(keySet0, /outlook\.live\.com/i);
unmapAllExcept(keySet1, /(twitter|reddit)\.com/i);
unmapAllExcept(keySet1, /exelonix\.atlassian\.net/i);
unmapAllExcept(keySet0, /(dev\.)?(monitoring|obre)\.exelonix\.com/i);
unmapAllExcept(keySet0, /.+\.grafana\.net/i);
unmapAllExcept(keySet0, /(ops)\.corona-warn-buzzer\.(de|com)/i);
unmapAllExcept(keySet1, /bitbucket\.org/i);

unmap('<Ctrl-h>')

settings.hintAlign = "left";
Hints.style('border: solid 3px #552a48; color:#efe1eb; background: initial; background-color: #552a48; font-family: sans-serif;');

settings.theme = `
.sk_theme {
    font-family: sans-serif;
    font-size: 11pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult>ul>li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult>ul>li.focused {
    background: #3e4452;
}

.sk_theme .prompt .separator {
    display: none;
}

#sk_status, #sk_find {
    font-size: 20pt;
}`;
