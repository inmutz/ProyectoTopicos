import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Storage,
  Query,
} from "react-native-appwrite";

export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.train.mate",
  projectId: "66611980001825556338",
  databaseId: "66612591002f0d46a232",
  userCollectionId: "666125d8000069f75547",
  imageCollectionId: "6664f51200397c02cef6",
  storeId: "6664fe18002ef3bc2c45",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    const avatarsUrl = avatars.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarsUrl,
      }
    );
    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email, password) => {
  try {
    console.log(Object.keys("Se imprimio", account));

    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error) {
    throw new Error(error);
  }
}

export const getCurrentUser = async () => { 
  try {
    const currentAccont = await account.get(); 
    if (!currentAccont) throw Error; 

    const currentUser = await databases.listDocuments(
      config.databaseId, 
      config.userCollectionId,
      [Query.equal("accountId", currentAccont.$id)]
    )

    if(!currentUser) throw Error; 

    return currentUser.documents[0]; 
  } catch (error) {
    console.log(error)
    
  }
}
