import { Client, Databases, ID } from "appwrite";
import conf from "../conf";
class Servies {

    Client = new Client()
    database
constructor(){
this.Client.setEndpoint(conf.appwriteurl)
            .setProject(conf.projectId)
      this.database  =  new Databases(this.Client)
}

//add the user to databse 
async AddUserToDB(data){
    const {name , email , $id} = data
 const id = $id

try {
    return  await this.database.createDocument(
        conf.databaseId,
        conf.usercollectionId,
        ID.unique(),
        {name , email ,id}
    )
} catch (error) {
   console.log("ERROR IN ADDUSERDB", error) 
}
}

//collect the user data 
 async GetUser(data) {
const {$id} = data
    try {
        debugger
        const AllData = await this.database.listDocuments(
            conf.databaseId,
            conf.usercollectionId,
        )
        if(!AllData) return 
    
const UserData = AllData.documents
.filter((doc)=>(
 doc.id == $id 
))

return UserData
    } catch (error) {
        console.log("ERROR IN GetUSERDATA", error)
    }
}

//add the cart in DB
async ADDTOCART (data){
    const {img , title , intPrice , description, id ,owner} = data
    const price = intPrice.toString()
    try {
        await this.database.createDocument(
            conf.databaseId,
            conf.cartcollectionId,
            ID.unique(),
            {img , title , price , description,id ,owner}
        )

    } catch (error) {
        console.log("ERROR IN ADD DATA ", error)
    }
}


//remove the cart from DB

async RemoveCartDB (id){
    try {
      return  await  this.database.deleteDocument(
            conf.databaseId,
            conf.cartcollectionId,
            id
      )
    } catch (error) {
        console.log("ERORR IN DELETE CART IN DB", error)
    } 
}

//add favourite list into database 

async ADDTOFAVLISTDB (data){
    const {img , title , intPrice , description, id ,owner} = data 

    try {
        return await this.database.createDocument(
            conf.databaseId,
            conf.favlistcollectionId,
            ID.unique(),
            {img , title , intPrice , description, id ,owner}
        )
    } catch (error) {
        console.log("ERROR IN ADD FAVLIST IN DB", error)
    }
}


//delete favlist in DB
async DELETEFAVLISTDB (id){
    try {
        return await this.database.deleteDocument(
            conf.databaseId,
            conf.favlistcollectionId,
              id
        )
    } catch (error) {
        console.log("ERROR IN DELETEFAVLSIST", error)
    }
}


}

const servise = new Servies
export default servise