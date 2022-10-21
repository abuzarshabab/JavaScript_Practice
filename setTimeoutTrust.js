
const StartedAt = Date()

console.log('Started', StartedAt)

setTimeout(() => { console.log('There is some trust issue here =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', StartedAt, '\t',Date() )}, 5000  )

for (let i = 0; i < 200000; i++) {
  console.log(i)
}
