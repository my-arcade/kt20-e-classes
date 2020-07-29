const fs = require('fs');
const extract = require('extract-comments');
const str = fs.readFileSync('./example.ts', 'utf8')

console.log(str)
const lines = str.split('\n')
const regex = /[A-Za-z]/;

function ingest(payloadStr) {
  let payload = ''
  let startedMatching = false
  for(const i in payloadStr) {
    const c = payloadStr[i]
    if(c.match(regex)) {
      startedMatching = true
      payload += c
    } else if(startedMatching) {
      break;
    }
  }
  return payload.
}
function getCode(modelStr) {
  const arr = modelStr.split(':')
  const model = arr[arr.length - 1].trim().split('{')[0].trim()
  let payload = null

  if(modelStr.indexOf('payload') !== -1) {
    const arr = modelStr.split('payload')
    console.log(arr[1])
    payload = ingest(arr[1])
  }
  return ({
    payload,
    model
  })
}

function enrich({line, ...rest}) {
  return ({
    ...rest,
    line,
    model: getCode(lines[line])
  })
}

const rules = extract.line(str)
    .filter(comment => comment.value.indexOf('exp:') === 0)
    .map(comment => ({...comment, value: comment.value.substring(4)}))
    .map(comment => ({context: eval(`(${comment.value})`), line: comment.loc.start.line}))
    .map(rule => enrich(rule))

console.log(rules)
