//
//
// const mongoose = require('mongoose')
//
// const itemSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   text: {
//     type: String,
//     required: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   }
// }, {
//   timestamps: true
// }, {
//   completed: {
//     type: Boolean,
//     default: false
//   }
// })
//
// module.exports = mongoose.model('Item', itemSchema)
// const mongoose = require('mongoose')
//
// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   hashedPassword: {
//     type: String,
//     required: true
//   },
//   token: String
// }, {
//   timestamps: true,
//   toObject: {
//     // remove `hashedPassword` field when we call `.toObject`
//     transform: (_doc, user) => {
//       delete user.hashedPassword
//       return user
//     }
//   }
// })
//
// module.exports = mongoose.model('User', userSchema)
//
// // const mongoose = require('mongoose')
// //
// // const exampleSchema = new mongoose.Schema({
// //   title: {
// //     type: String,
// //     required: true
// //   },
// //   text: {
// //     type: String,
// //     required: true
// //   },
// //   owner: {
// //     type: mongoose.Schema.Types.ObjectId,
// //     ref: 'User',
// //     required: true
// //   }
// // }, {
// //   timestamps: true
// // })
// //
// // module.exports = mongoose.model('Example', exampleSchema)
