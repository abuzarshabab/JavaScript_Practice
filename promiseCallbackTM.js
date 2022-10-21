const posts = [
  { title: 'Post One', body: 'This is post One' },
  { title: 'Post Two', body: 'This is post Two' }
]

function getPosts(fetchedMessage) {
  console.log(fetchedMessage)
  setTimeout(() => {
    let output = ''
    posts.forEach((post) => {
      output += `<li> ${post.title} </li>`
    })

    document.body.innerHTML = output
  }, 1000)
  return 'Data is created'
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post)
      const error = false

      if(error) { reject('Error: Something went wrong') }

      resolve('Everything is alright thankyou for understanding the concept')
    }, 2000)
  })
}

createPost({ title: 'Post Three', body: 'This is post three' })
  .then((message) => getPosts(message))
  .then(message => console.log(message))
  .catch(error => {
    console.log('Clean error', error)
  })

