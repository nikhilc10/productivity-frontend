'use strict';

module.exports={

server:{
	PORT: process.env.PORT || 1221,
},

database:{
	HOST: process.env.MONGODB || 'mongodb+srv://user1:test123@cluster0-cwtjr.mongodb.net/test?retryWrites=true',
},

};