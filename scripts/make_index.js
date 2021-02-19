console.log(`
# 박물관
너도 당해보니 어때?

## 다운로드 방법
이 repo를 clone하거나 [https://github.com/hyea1337/archive/archive/gh-pages.zip](https://github.com/hyea1337/archive/archive/gh-pages.zip) 에서 zip으로 받으세요.

## 페이지 목록

${require('fs').readdirSync('.').filter($=>(!$.startsWith('index'))&&$.match(/(html|json)$/)).reduce(($,$$)=>`- [${$$}](./${$$})\n\n`+$,'')}
`);
