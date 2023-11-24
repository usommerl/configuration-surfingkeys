var keySet0 = ['E', 'R', 'S', 'D', '<<', '>>', '<Alt-p>', 'X'];
var keySet1 = keySet0.concat(['d', 'u']);
var keySet2 = keySet1.concat(['f', 'gg', 'x']);

api.unmapAllExcept(keySet0, /(mail|calendar|chat|docs)\.google\.com/i);
api.unmapAllExcept(keySet0, /outlook\.live\.com/i);
api.unmapAllExcept(keySet2, /(twitter|reddit)\.com/i);
api.unmapAllExcept(keySet2, /exelonix\.atlassian\.net/i);
api.unmapAllExcept(keySet0, /(dev\.)?(monitoring|obre)\.exelonix\.com/i);
api.unmapAllExcept(keySet0, /.+\.grafana\.net/i);
api.unmapAllExcept(keySet0, /(ops)\.corona-warn-buzzer\.(de|com)/i);
api.unmapAllExcept(keySet2, /bitbucket\.org/i);
api.unmapAllExcept(keySet1, /github\.com/i);
api.unmapAllExcept([], /stadia\.google\.com/i);

api.unmap('<Ctrl-h>');
api.unmap('<Ctrl-6>');

settings.hintAlign = "left";
settings.blocklistPattern = /.*docs\.google\.com\/presentation.*/
