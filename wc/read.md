# wc cli tool in node.js
return bytes
```javascript=true
node wc -c test.txt
342190 test.txt
```

return lines
```javascript=true
> node wc -w test.txt
342190 test.txt
```

return words
```javascript=true
> node wc -w test.txt
342190 test.txt
```

default bytes, lines and words
```javascript=true
> node wc test.txt
342190 7146 58166 test.txt
```
