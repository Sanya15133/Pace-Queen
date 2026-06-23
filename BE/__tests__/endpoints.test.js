const endpointsObj = require('../endpoints.json')
const request = require('supertest')
const app = require('../app.js')
const expectCookies = require('supertest/lib/cookies')

/* 
//const db = require('../db/connection.js');
// const data = require('../db/test-data'); 
//const seed = require('../db/seeds/seed.js');

beforeEach(()=>{
    return seed(data)
})

afterAll(()=>{
    return db.end()
})

//will use the code above depneding on if we use test db or how we use it

*/


describe("GET /api", ()=>{
    test("200: respond and all available endpoints",()=>{
        return request(app)
        .get("/api")
        .expect(200)
        .then(({body})=>{
            expect(body).toEqual(endpointsObj) //endpoints.json to be finished
        })
    })
})

describe('activity tests', ()=>{
    describe('GET activities', ()=>{
        describe('GET all activities', ()=>{
            test('200: respond with all activities', ()=>{
                return request(app)
                .get('/api/activities')
                .expect(200)
                .then(({body})=>{
                    expect(Array.isArray(body.activities)).toBe(true)
                    if(body.activities.length >0){
                        body.activities.forEach(activity=>{
                            expect(typeof acticity.description).toBe('string')
                        })
                    }
                })
            })
        })
        describe('GET activities by ID', ()=>{
            test('200: respond with the correct activity of valid and existent id',()=>{
                return request(app)
                .get('/api/activities/1')
                .expect(200)
                .then(({body})=>{
                    expect(body.acticity.id).toBe(1); 
                    expect(typeof body.acticity.name).toBe('string');
                    expect(typeof body.acticity.description).toBe('string');
                })
            })
            test('400: respond to ivalid param',()=>{
                return request(app)
                .get('/api/activities/one')
                .expect(400)
                .then(({body})=>{
                    expect(body.msg).toBe("Bad Request")
                })
            })
            test('404: respond to valid but non existent param',()=>{
                return request(app)
                .get('/api/activities/9999')
                .expect(404)
                .then(({body})=>{
                    expect(body.msg).toBe("activity does not exist")
                })
            })
        })
        describe('GET activities by category ID',()=>{
            test('200: respond and the correct activities that have the same catetory ID',()=>{
                return request(app)
                .get('/api/categories/1/activities')
                .expect(200)
                .then(({body})=>{
                    expect(Array.isArray(body.activities)).toBe(true);
                    body.activities.forEach(activity => {
                        expect(activity.category_id).toBe(1);
                    });
                 })
            })
            test('400: respond to ivalid param',()=>{
                return request(app)
                .get('/api/categories/one/activities')
                .expect(400)
                .then(({body})=>{
                    expect(body.msg).toBe("Bad Request")
                })
            })
            test('404: respond to valid but non existent param',()=>{
                return request(app)
                .get('/api/categories/55555/activities')
                .expect(404)
                .then(({body})=>{
                    expect(body.msg).toBe("category does not exist")
                })
            })
            
        })
    })
    describe('POST activities',()=>{

    })
    describe('DELETE activities',()=>{

    })
})
describe('category tests',()=>{
    describe('GET categories',()=>{
        describe('GET all categories',()=>{
            test('200: respond with all categories',()=>{
                return request(app)
                .get('/api/categories')
                .expect(200)
                .then(({body})=>{
                    expect(Array.isArray(body.categories)).toBe(true)
                })
            })
        })
        describe('GET category by ID',()=>{
            test('200: respond with the correct category',()=>{
                return request(app)
                .get('/api/categories/1')
                .expect(200)
                .then(({body})=>{
                    expect(body) //needs a test object here to match
                })
            })
             test('400: respond to ivalid param',()=>{
                return request(app)
                .get('/api/categories/one')
                .expect(400)
                .then(({body})=>{
                    expect(body.msg).toBe("Bad Request")
                })
            })
            test('404: respond to valid but non existent param',()=>{
                return request(app)
                .get('/api/categories/55555')
                .expect(404)
                .then(({body})=>{
                    expect(body.msg).toBe("category does not exist")
                })
            })
        })

    })
})
describe('user tests',()=>{
    describe('GET users',()=>{
        describe('GET all users',()=>{
            test('200: respond with all users',()=>{
                return request(app)
                .get('/api/users')
                .expect(200)
                .then(({body}),()=>{
                    expect(Array.isArray(body.users)).toBe(true);
                    body.users.forEach(user => {
                        expect(typeof(user.id)).toBe('number');
                    });
                })
            })
        })
        describe('GET user by ID',()=>{
            test('200: respond with correct user',()=>{
                return request(app)
                .get('/api/users/1')
                .expect(200)
                .then(({body}),()=>{
                    expect(body.user.id).toBe(1); 
                    expect(typeof body.user.username).toBe('string');
                })
            })
            test('404: respond to non existent user',()=>{
                return request(app)
                .get('/api/users/00001')
                .expect(404)
                .then(({body}),()=>{
                    expect(body.msg).toBe('User does not exist'); 
                })

            })
            test('400: respont to invalid user ID param',()=>{
                return request(app)
                .get('/api/users/one')
                .expect(400)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Bad Request'); 
                })
            })
        })
    })
    describe('POST users',()=>{
        describe('register',()=>{
            test('201: creates a new user and returns it',()=>{
                const testUser_register = {} //to be written according to DB
                const testUser_returned = {} // same as above, with less fields e.g. pssword 
                return request(app)
                .post('/api/users/register')
                .send(testUser_register)
                .expect(201)
                .then(({body}),()=>{
                    expect(body.user).toMatchObject(testUser_returned)
                })
            })
            test('400: missing fields',()=>{
                return request(app)
                .post('/api/users/register')
                .send({email:'idontexist@bye.com'})
                .expect(400)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Missing fields')
                })
            })
            test('409: duplicate username',()=>{
                const dupeUsername = {} //to be replaced with one exiting user in test data
                return request(app)
                .post('/api/users/register')
                .send(dupeUser)
                .expect(409)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Username already exists')
                })
            })
            test('409: duplicate email address',()=>{
                const dupeEmail = {} //to be replaced with a new user but with an email address that matches one in the test data
                return request(app)
                .send(dupeEmail)
                .expect(409)
                .then(({body}),()=>{
                    expect(body.msg).toBe('A user with this email address already exists')
                })
            })
            test('400: invalid email address',()=>{
                const badEmail = {} // to be replaced with a user with invalid email
                return request(app)
                .post('/api/users/register')
                .send(badEmail)
                .expect(400)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Invalid email address')
                })
            })
        })
        describe('login',()=>{
            test('200: logs in to a valid user and returns the username',()=>{
                const existingUser = {} //to be replaced with an existing user in test data
                return request(app)
                .post('/api/users/login')
                .send(existingUser)
                .expect(200)
                .then(({body}),()=>{
                    expect(body.user).toMatchObject({})// to be replaced with an object with just the username. Needs to exclude the password of the user in the returned object in model
                    
                })
            })
            test('401: wrong password',()=>{
                const wrongPassword = {} // to be replaced with a valid user with wrong password
                return request(app)
                .post('/api/users/login')
                .send(wrongPassword)
                .expect(401)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Incorrect password')
                })
            })
            test('404: user does not exist',()=>{
                const invalidUser = {} // to be replaced with a unregistered user
                return request(app)
                .post('/api/users/login')
                .send(invalidUser)
                .expect(404)
                .then(({body}),()=>{
                    expect(body.msg).toBe('Username not registered')
                })
            })
        })
    })
})