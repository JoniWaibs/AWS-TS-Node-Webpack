import { UserCredentialsDBAccess } from '../Authorization/UserCredentialsDBAccess';
import { AccessRights } from '../enums/accessRights';
import { UsersDB } from '../User/User';
// import { WorkingPosition } from '../src/enums/workingPosition'

const {
  CREATE, READ, UPDATE, DELETE,
} = AccessRights;

class DBAccessTest {
  public userCredentials: UserCredentialsDBAccess = new UserCredentialsDBAccess();

  public handlerUser: UsersDB = new UsersDB();
}

new DBAccessTest().userCredentials.saveCredential({
  username: 'Jota',
  password: 'Password',
  accessRights: [CREATE, READ, UPDATE, DELETE],
});

// new DBAccessTest().handlerUser.createUser({
//   name: 'Bob',
//   age: 43,
//   email: 'bob@email.com',
//   workingPosition: WorkingPosition.JUNIOR,
// })
