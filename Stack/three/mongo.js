const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://boba_D:${password}@cluster0.bdwwrvs.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length === 3) {
  Person.find({}).then(people => {
    console.log('Phonebook:')
    people.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  const name = process.argv[3]
  const number = process.argv[4]

  const person = new Person({
    name: name,
    number: number,
  })

  person.save().then(() => {
    console.log(`Added ${name} with number ${number} to phonebook`)
    mongoose.connection.close()
  })
} else {
  console.log('Invalid number of arguments')
  process.exit(1)
}
