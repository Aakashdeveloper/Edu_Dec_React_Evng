let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);


describe('Testing my API', () => {
    it('should be return status 200 for default', (done) => {
        chai
            .request('http://localhost:8900')
            .get('/')
            .then((res) =>{
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err
            })
    })

    it('Should return true for getdata route', (done) => {
        chai 
            .request('http://localhost:8900')
            .get('/articles') 
            .then((res) =>{
                expect(res).to.have.status(200);
                done();
            })
            .catch((err) => {
                throw err
            })
    })

    it('should insert data in articles', (done) => {
            chai
            .request('http://localhost:8900').post('/articles')
            .send({name:'testcase', subject:'React'})
            .then((res) =>{
                expect(res).to.have.status(201);
                done();
            })
    })
})