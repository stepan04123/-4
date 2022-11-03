let a = prompt("пуш пароль:" )
if ( a.length > 4 && ( a.includes('_') || a.includes('-') ) )
{console.log("сильный пароль")}
else
{console.log("слабый пароль")}