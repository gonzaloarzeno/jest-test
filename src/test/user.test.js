const User = require('../user')

let user

beforeEach(() => {
   //cargo valores que necesito para los tests en una base de datos.
});

afterEach(() => {
    //limpio la base de datos.
})

test('user constructor', () => {
    //Arrange
    let id = 1;
    let username = "gonzalo";
    let email = "gonzalo.arzeno@gmail.com";
    let country = "UY";

    //Act
    user = new User(id, username, email, country);

    //Assert
    expect(user.id).toBe(id);
    expect(user.username).toBe(username);
    expect(user.email).toBe(email);
    expect(user.country).toBe(country);
});

describe('user language', () => {

    let id = 1;
    let username = "gonzalo";
    let email = "gonzalo.arzeno@gmail.com";

    test('portuguese', () => {
        //Arrange
        let expectedLanguage = "PR";
        let country = "BR";
        let user = new User(id, username, email, country);

        //Act
        let language = user.getLanguage()

        //Assert
        expect(language).toBe(expectedLanguage);
    });
  
    test('spanish', () => {
      //Arrange
      let expectedLanguage = "ES";
      let country = "UY";
      let user = new User(id, username, email, country);

      //Act
      let language = user.getLanguage()

      //Assert
      expect(language).toBe(expectedLanguage);
    });

    test('other', () => {
        //Arrange
        let expectedLanguage = "ES";
        let country = "OTHER";
        let user = new User(id, username, email, country);
  
        //Act
        let language = user.getLanguage()
  
        //Assert
        expect(language).toBe(expectedLanguage);
    });
});


describe('set email', () => {

    let user
    beforeEach(() => {
        let id = 1;
        let username = "gonzalo";
        let email = "gonzalo.arzeno@gmail.com";
        let country = "BR";
        user = new User(id, username, email, country);
    });
    
    test('update', () => {
        //Arrange
        let newMail = "pepito.flores@gmail.com";
        
        //Act
        let updated = user.setEmail(newMail);

        //Assert
        expect(user.email).toBe(newMail);
        expect(updated).toBe(true);
    });
  
    test('not update', () => {
     //Arrange
     let oldMail = "gonzalo.arzeno@gmail.com";
        
     //Act
     let updated = user.setEmail(oldMail);

     //Assert
     expect(user.email).toBe(oldMail);
     expect(updated).toBe(false);
    });
});
